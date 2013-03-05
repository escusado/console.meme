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
        username:'freshbot',
        password:'freshbotpass'
    };

    //Dependencies
    express              = require('express');
    http_get             = require('http-get');
    MemeGenClient        = require('memegenclient');

    app = express();
    memeGenClient = new MemeGenClient(memeGeneratorCredentials);

    app.get('/api/v1/:meme/:top/:bottom', function(req, res){
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
      'y-u-no'              : {  generatorID : 2       , imageID : 166088  },
      'i-dont-always'       : {  generatorID : 74      , imageID : 2485    },
      'orly'                : {  generatorID : 920     , imageID : 117049  },
      'success'             : {  generatorID : 121     , imageID : 1031    },
      'all'                 : {  generatorID : 6013    , imageID : 1121885 },
      'too-damn'            : {  generatorID : 998     , imageID : 203665  },
      'good-news'           : {  generatorID : 1591    , imageID : 112464  },
      'not-sure-if'         : {  generatorID : 305     , imageID : 84688   },
      'yo-dawg'             : {  generatorID : 79      , imageID : 108785  },
      'all-your-base'       : {  generatorID : 349058  , imageID : 2079825 },
      'fuck-you'            : {  generatorID : 1189472 , imageID : 5044147 },
      'have-a-bad-time'     : {  generatorID : 825296  , imageID : 3786537 },
      'one-does-not-simply' : {  generatorID : 274947  , imageID : 1865027 },
      'grumpy-cat'          : {  generatorID : 1590955 , imageID : 6541210 },
      'it-looks-like-you'   : {  generatorID : 20469   , imageID : 1159769 }
    };

    var params = {
      languageCode : 'en',
      generatorID : memes[req.params.meme].generatorID,
      imageID : memes[req.params.meme].imageID,
      text0 : req.params.top,
      text1 : req.params.bottom
    };

    memeGenClient.instanceCreate(params)
    .on('data', function (data) {
        data = JSON.parse(data);
        server.generateImage(data.result.instanceImageUrl, res);
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