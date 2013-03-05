     /*----------------------------------------------*/
    /*               console.meme v0.0.1            */
   /*         Toily escusado@gmail.com 2013        */
  /* Para esa bonita broma, esa bonita bacilada   */
 /* memeGenClient https://npmjs.org/~phill.rosen */
/*----------------------------------------------*/

console.meme = function(meme, top, bottom){
  var serverUrl = 'http://lit-atoll-9603.herokuapp.com/api/v1/';

  var url = serverUrl+meme+'/'+top+'/'+bottom;

  console.log('>', url);

  //css buffer
  var css  = 'background: #fff url('+ url +') no-repeat;';
      css += 'padding: 100px 100px';

  console.log('%c test', css);﻿

}('y u no', 'top', 'bottom');