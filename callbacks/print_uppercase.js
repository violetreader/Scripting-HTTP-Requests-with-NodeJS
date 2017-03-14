var getHTML = require('./http-functions').getHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

var upCase = function printUpperCase(html) {
  // console.log('html type is: ', typeof html);
  var switchUp = html.toUpperCase();
  // console.log('is this html UpCase? ', switchUp);
  console.log(switchUp);
}

getHTML(requestOptions, upCase);