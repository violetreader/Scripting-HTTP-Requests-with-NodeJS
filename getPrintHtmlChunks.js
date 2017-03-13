var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {

    response.on('data', function(data) {
      data += data;
      console.log('Data Recieved: ', data + '/n');
    });

    response.on('finish', function(end) {
      console.log('Response stream is now completed.');
    });
  });

}

getAndPrintHTMLChunks();



