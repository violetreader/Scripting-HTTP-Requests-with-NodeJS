var getHTML = require('./http-functions').getHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

var afunct = function (html) {
  console.log(html);
}

getHTML(requestOptions, afunct);
