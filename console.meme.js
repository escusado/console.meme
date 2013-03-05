     /*----------------------------------------------*/
    /*               console.meme v0.0.1            */
   /*         Toily escusado@gmail.com 2013        */
  /* Para esa bonita broma, esa bonita bacilada   */
 /* memeGenClient https://npmjs.org/~phill.rosen */
/*----------------------------------------------*/

console.meme = function(meme, top, bottom, size){
  var serverUrl = 'http://lit-atoll-9603.herokuapp.com/api/v1/';

  if(typeof size === 'undefined'){
    size = 150;
  }

  var url = serverUrl+meme+'/'+size+'/'+top+'/'+bottom;

  console.log('>', url);

  //css buffer
  var css  = 'background: #fff url('+ url +') no-repeat;';
      css += 'padding: 100px 100px; width: 200px';

  console.log('%c test', css);﻿

}('all', 'top', 'bottom');