var getHTML = require('./http-functions').getHTML;

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

var reverse = function printReverse (html) {

  var diff = html.split('').reverse().join('');
  // console.log('is this an array? ', typeof diff, diff);
  console.log(diff);
}



getHTML(requestOptions, reverse);