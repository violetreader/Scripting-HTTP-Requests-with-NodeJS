var getHTML = require('./http-functions').getHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

var lowCase = function printLowerCase(htmlYah) {
  var switchUp = htmlYah.toLowerCase();
  console.log(switchUp);
}

getHTML(requestOptions, lowCase);

