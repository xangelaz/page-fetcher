const request = require('request');
const fs = require('fs');
let url = process.argv[2];
let filePath = process.argv[3];

request('https://www.example.edu', (error, response, body) => {
  console.log('Downloaded and saved ' + body.length + ' bytes to ' + 'filePath');
  fs.writeFile('/Users/angela/page-fetcher/index.html', body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
});


// const content = body;

// fs.writeFile('/Users/angela/page-fetcher/index.html', content, err => {
//   if (err) {
//     console.error(err);
//   }
//   // file written successfully
// });

