var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){

    var buffArr = [];
    response.on('data', function(data){
      // console.log('this is data: ', data);
      console.log('Data Recieved: ', data + '/n');
    });
    // console.log('this is response.on: ', myData);
    // buffArr.push(myData);


    response.on('end', function(end){
      console.log('Response stream is now completed.');
    });

  });

}

getAndPrintHTML();