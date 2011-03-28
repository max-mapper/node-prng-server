# Node.js cryptographically strong pseudo random number generator SSL server

Since browser JS can't [quite](http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2011-February/030394.html) make real random numbers, the next best option is to use `https://` to go to a trusted server and get a random number straight from OpenSSL. That's what this is!

I run an instance of this at [https://random.smalldata.org](https://random.smalldata.org).

It supports [CORS](http://enable-cors.org) and [JSONP](http://en.wikipedia.org/wiki/JSONP) so that you can get to it from client side JS.

For a client side crypto library that hooks up to this, see [ezcrypto-js](https://github.com/maxogden/ezcrypto-js).

WARNING: JavaScript cryptography is still more or less the wild west. See [this article](http://rdist.root.org/2010/11/29/final-post-on-javascript-crypto/) for a pretty decent explanation of what you are getting yourself into. Use at your own risk.