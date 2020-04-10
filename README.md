
## About the code
This nodejs code scrapes the HTTP Response Status Codes from the Mozilla Developer website. The final result is the creation of a module which enumerates the HTTP Status Codes. This module may be used in other JavaScript code and assists in complying with TypeScript rules regarding "Magic Numbers" (i.e. "HttpStatus.OK" versus 200).

### Reference Material
The Ultimate Guide to Web Scraping with Node.js</br>
*by Daniel Ni*</br>
https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/

HTTP Response Status Codes</br>
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Alternative nodejs code...</br>
*by prettymuchbryce*</br>
http-status-codes</br>
https://www.npmjs.com/package/http-status-codes

Alternative nodejs repo...</br>
*by prettymuchbryce*</br>
http-status-codes</br>
https://github.com/prettymuchbryce/http-status-codes#readme

### Nodejs modules
* request
* request-promise</br>
https://github.com/request/request-promise

* puppeteer</br>
https://github.com/GoogleChrome/puppeteer

* cheerio</br>
https://github.com/cheeriojs/cheerio

### Usage
In a terminal window, type:</br>
<strong>node generateHttpStatusCodes.js</strong>

### Version
#### v1.0 - HTTP Status Codes Scraper.</br>
The results after running the command above are as follows:
<div style="color:limegreen";>100 Continue</div>

#### v2.0 - Create aray of status codes.</br>
The results after running the command above are as follows:</br>
<div style="color:limegreen";>
[</br>
  { code: '100', response: 'Continue' },</br>
  { code: '101', response: 'Switching Protocol' },</br>
  { code: '102', response: 'Processing' },</br>
  { code: '103', response: 'Early Hints' },</br>
  { code: '200', response: 'OK' }, ...</br>
]
</div>

#### v3.0 - Create enumerated list for class module.
The results after running the command above are as follows:</br>
<div style="color:limegreen";>
this.CONTINUE = 100;</br>
this.SWITCHING_PROTOCOL = 101;</br>
this.PROCESSING = 102;</br>
this.EARLY_HINTS = 103;</br>
this.OK = 200; ...</br>
</div>

#### v4.0 - Add class module file to current project.

Note:</br>
To reference the file '*scripts/httpStatusCodes.js*' in your project 
you must add the following lines to a javascript file within your project:

* import { httpStatusCodes } from "./httpStatusCodes.js";</br>
* const HttpStatus = new httpStatusCodes;</br>

To use the enumerated list of status codes, simply type the constant and select a code from the list. 

Examples...
* HttpStatus.OK
* HttpStatus.UNAUTHORIZED

#### v5.0 - Resolve dependency vulnerabilities.

As Administrator, run: 
<div style="color:aqua";>npm audit fix</div>
