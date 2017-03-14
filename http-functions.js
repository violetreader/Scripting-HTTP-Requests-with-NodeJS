var https = require('https');

function getHTML (options, callback) {

  https.get(options, function(response){

    response.on('data', function(data){
      console.log('Data Recieved: ', data + '/n');
    });

    response.on('end', function(end){
      console.log('Response stream is now completed.');
    });
  });


}

var aFunct = function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, aFunct);

module.exports = { getHTML : getHTML };


