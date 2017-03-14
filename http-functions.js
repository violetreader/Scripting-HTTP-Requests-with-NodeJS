var https = require('https');
var data;
function getHTML (options, callback) {

  https.get(options, function(response){
    var fullData = '';
    response.on('data', function(data){
      console.log('Data Recieved: ', data + '/n');
      fullData += data;
    });

    response.on('end', function(end){
      console.log('Response stream is now completed.');
      callback(fullData);
    });
  });
}


// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };

// getHTML(requestOptions, aFunct);

module.exports = { getHTML : getHTML };


