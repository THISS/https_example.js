// Import the https module into this file so we can use it
let https = require('https');

let options = {
  host: 'www.example.org',
  path: '/'
};

//  Create a callback to use once the request is made
let cb = (response) => {
  console.log('In response handler callback');

  response.on('data', (chunk) => {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
  console.log('Response:', response);
};


console.log("I'm about to make the request!");

// Make the request
https.request(options, cb).end();

console.log('I\'ve made the request');