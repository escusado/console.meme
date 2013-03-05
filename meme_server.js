     /*----------------------------------------------*/
    /*  Meme server v0.0.1 for console.meme requests*/
   /*         Toily escusado@gmail.com 2013        */
  /* Para esa bonita broma, esa bonita bacilada   */
 /* memeGenClient https://npmjs.org/~phill.rosen */
/*----------------------------------------------*/

var meme_server = {
  init: function(){
    //Config
    var port = process.env.PORT || 5000;

    var memeGeneratorCredentials = {
        username:'toily_meme_generator',
        password:'toily_meme_generatorpass'
    };

    //Dependencies
    express              = require('express');
    http_get             = require('http-get');
    MemeGenClient        = require('memegenclient');

    app = express();
    memeGenClient = new MemeGenClient(memeGeneratorCredentials);

    app.get('/api/v1/:meme/:size/:top/:bottom', function(req, res){
      meme_server.prepareData(req, res);
    });

    //espress conficure app
    app.configure(function(){
      app.set('port', port);
    });

    //Create server
    app.listen(port, function(){
      console.log("Express server listening on port " + port);
    });

  },

  prepareData : function(req, res){
    var server = this;

    var memes = {
      'y-u-no'                   : { generatorID : 2       , imageID : 166088  },
      'i-dont-always'            : { generatorID : 74      , imageID : 2485    },
      'orly'                     : { generatorID : 920     , imageID : 117049  },
      'success'                  : { generatorID : 121     , imageID : 1031    },
      'all'                      : { generatorID : 6013    , imageID : 1121885 },
      'too-damn'                 : { generatorID : 998     , imageID : 203665  },
      'good-news'                : { generatorID : 1591    , imageID : 112464  },
      'not-sure-if'              : { generatorID : 305     , imageID : 84688   },
      'yo-dawg'                  : { generatorID : 79      , imageID : 108785  },
      'all-your-base'            : { generatorID : 349058  , imageID : 2079825 },
      'fuck-you'                 : { generatorID : 1189472 , imageID : 5044147 },
      'have-a-bad-time'          : { generatorID : 825296  , imageID : 3786537 },
      'one-does-not-simply'      : { generatorID : 274947  , imageID : 1865027 },
      'grumpy-cat'               : { generatorID : 1590955 , imageID : 6541210 },
      'it-looks-like-you'        : { generatorID : 20469   , imageID : 1159769 },
      'feel-bad'                 : { generatorID : 12270   , imageID : 1136171 },
      'nobody-got-time'          : { generatorID : 960670  , imageID : 4272597 },
      'bad-luck-brian-meme'      : { generatorID : 740857  , imageID : 3459374 },
      'first-world-problems-ii'  : { generatorID : 340895  , imageID : 2055789 },
      'scumbag-steve'            : { generatorID : 142     , imageID : 366130  },
      'what-if-i-told-you-meme'  : { generatorID : 1118843 , imageID : 4796874 },
      'san-juan-cholo'           : { generatorID : 1599963 , imageID : 6583377 },
      'good-guy-greg'            : { generatorID : 534     , imageID : 699717  },
      'prepare-yourself'         : { generatorID : 414926  , imageID : 2295701 },
      'stoner-stanley'           : { generatorID : 1091690 , imageID : 4694520 },
      'all-the-things'           : { generatorID : 318065  , imageID : 1985197 },
      'conspiracy-keanu'         : { generatorID : 318374  , imageID : 1986282 },
      'disaster-girl'            : { generatorID : 36240   , imageID : 1232401 },
      'pleaseguy'                : { generatorID : 668529  , imageID : 3219856 },
      'annoying-facebook-girl'   : { generatorID : 839     , imageID : 876097  },
      'trollface'                : { generatorID : 68      , imageID : 269     },
      'skeptical-3rd-world-kid'  : { generatorID : 1211003 , imageID : 5120447 },
      'correction-guy'           : { generatorID : 1204255 , imageID : 5095879 },
      'insanity-wolf'            : { generatorID : 45      , imageID : 20      },
      'kill-yourself-guy'        : { generatorID : 1385047 , imageID : 5747317 },
      'joseph-ducreux'           : { generatorID : 54      , imageID : 42      },
      'so-youre-telling-me'      : { generatorID : 1329714 , imageID : 5534345 },
      'african-children-dancing' : { generatorID : 1081322 , imageID : 4669763 }

    };

    var params = {
      languageCode : 'en',
      generatorID : memes[req.params.meme].generatorID,
      imageID : memes[req.params.meme].imageID,
      text0 : req.params.top.replace(/-/g, ' '),
      text1 : req.params.bottom.replace(/-/g, ' ')
    };

    var size = req.params.size;

    memeGenClient.instanceCreate(params)
    .on('data', function (data) {
        data = JSON.parse(data);
        server.generateImage(data.result.instanceImageUrl.replace(/400x/g, size+'x'+size), res);
    }).exec();

  },

  generateImage : function(url, res){

    var options = {
      url: url,
      stream: true
    };

    http_get.get(options, function (error, result) {
      if (error) { console.error(error);}
      var mimeType = result.headers['content-type'];
      res.header('Content-Type', mimeType);

      result.stream.on('data', function (data) {
        res.write(data);
      });

      result.stream.on('end', function () {
        res.end('binary');
      });
      result.stream.resume();
    });

  }
};

meme_server.init();