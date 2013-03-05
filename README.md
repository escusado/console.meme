console.meme
============
by toily 2013 :)
para esa bonita broma esa bonita bacilada

One does not simply log a message

* Usage *

[bookmarklet]( javascript: (function () { console.meme=function(e,t,n,r){var i="http://lit-atoll-9603.herokuapp.com/api/v1/";if(typeof r==="undefined"){r=200}var s=i+e+"/"+r+"/"+t+"/"+n;var o="background-image: url("+s+");";o+="background-repeat: no-repeat;";o+="background-position: center center;";r=Math.floor(r/2);o+="padding: "+r+"px "+r+"px; background-size: 100%;";var u="";var a=Math.ceil(r/14)+2;while(a--){u+="\n"}console.log("%c %c"+u,o,"background: none;")} }()); )

´´´ javascript
console.meme('meme', 'top-text', 'bottom-text');
´´´