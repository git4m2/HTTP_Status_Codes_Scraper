// The Ultimate Guide to Web Scraping with Node.js
// by Daniel Ni
// https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/

// HTTP response status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// Alternative nodejs code...
// by prettymuchbryce
// http-status-codes
// https://www.npmjs.com/package/http-status-codes

// Alternative repo...
// by prettymuchbryce
// http-status-codes
// https://github.com/prettymuchbryce/http-status-codes#readme

const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status';

rp(url)
  .then(function(html){
    //success!
    let statusCodes = $('dt > a > code', html);

    const arrayStatusCodes = [];
    for (let i=0; i < statusCodes.length; i++) {
      let objData = statusCodes[i].firstChild.nodeValue;
      let statusCode = objData.split(" ")[0];
      let statusResponse = objData.slice(statusCode.length).trimLeft();
      let responseCodeData = {
        code: statusCode,
        response: statusResponse
      };
      arrayStatusCodes.push(responseCodeData);

      let txtResponse = statusResponse.toUpperCase();
      txtResponse = txtResponse.replace(/-/g, "_"); // global replacement
      txtResponse = txtResponse.replace(/ /g, "_"); // global replacement
      console.log("this." + txtResponse + " = " + statusCode + ";");
    }

    // console.log(arrayStatusCodes);
  })
  .catch(function(err){
    //handle error
    console.log(err.message);
  });