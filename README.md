console.meme
============
para esa bonita broma esa bonita bacilada

*by [@escusado](https://twitter.com/escusado) 2013 :) this thing uses the npm package memeGenClient by https://npmjs.org/~phill.rosen*

![console.meme](http://i.imgur.com/0fh8eZk.png)

Usage
==
paste this in your console
```
console.meme=function(e,t,n,r){var i="http://lit-atoll-9603.herokuapp.com/api/v1/";if(typeof r==="undefined"){r=200}var s=i+e+"/"+r+"/"+t+"/"+n;var o="background-image: url("+s+");";o+="background-repeat: no-repeat;";o+="background-position: center center;";r=Math.floor(r/2);o+="padding: "+r+"px "+r+"px; background-size: 100%;";var u="";var a=Math.ceil(r/14)+2;while(a--){u+="\n"}console.log("%c %c"+u,o,"background: none;")};
console.meme('grumpy-cat', 'paste-this-in-my-console?...', '...is this it?');
```

alternatilvely you can set a size too:
``` javascript
console.meme('feel-bad', 'your-code-is-bad', 'and-you-should-feel-bad', 300);
```

Currently supported (feel free to add more):
* 'y-u-no'
* 'i-dont-always'
* 'orly'
* 'success'
* 'all'
* 'too-damn'
* 'good-news'
* 'not-sure-if'
* 'yo-dawg'
* 'all-your-base'
* 'fuck-you'
* 'have-a-bad-time'
* 'one-does-not-simply'
* 'grumpy-cat'
* 'it-looks-like-you'
* 'feel-bad'

Free GPL whatever use it as you like :)

*I work @freshout[http://freshout.us] on @Breezi[http://breezi.com]*