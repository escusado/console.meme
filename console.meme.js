     /*----------------------------------------------*/
    /*               console.meme v0.0.1            */
   /*         Toily escusado@gmail.com 2013        */
  /* Para esa bonita broma, esa bonita bacilada   */
 /* memeGenClient https://npmjs.org/~phill.rosen */
/*----------------------------------------------*/

console.meme = function(meme, top, bottom, size){
  var serverUrl = 'http://lit-atoll-9603.herokuapp.com/api/v1/';

  if(typeof size === 'undefined'){
    size = 200;
  }
  //craft url
  var url = serverUrl+meme+'/'+size+'/'+encodeURIComponent(top)+'/'+encodeURIComponent(bottom);

  //css buffer
  // var css  = 'background: no-repeat url('+ url +') middle;';
  var css  = 'background-image: url('+ url +');';
  css += 'background-repeat: no-repeat;';
  css += 'background-position: center center;';

  //fix size
  size = Math.floor(size/2);
  css += 'padding: '+size+'px '+size+'px; background-size: 100%;';

  var bottomPadding = '';

  var how_many = Math.ceil(size / 14)+2; //2 more spaces just because

  while(how_many--){
    bottomPadding += '\n';
  }

  console.log('%c %c'+bottomPadding, css, 'background: none;');﻿

};