const link = process.argv[2];
const path = process.argv[3];
const fs = require('fs');

const request = require('request');
request(link, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.

    if (error) {
        console.log('error:', error);
        console.log('Error in request.');
        return;
    }

    fs.writeFile(path, body, (error) => {
        if (error) {
            console.log('Failed to write to localPath: ', path);
            console.log('Error: ', error.message);
        } else if (path !== path) {
            console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
        } else {
            console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
        }
    });

});