var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

function getAndPrintHTML (options) {

  https.get(options, function(response){

    response.on('data', function(data){
      console.log('Data Recieved: ', data + '/n');
    });

    response.on('end', function(end){
      console.log('Response stream is now completed.');
    });
  });

}

getAndPrintHTML(requestOptions);