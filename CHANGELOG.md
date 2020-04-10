# Changelog
All  changes to this project will be documented in this file.
<br/><br/>

## [Unreleased]
<br/><br/>


## [v5.0] - 2020-04-10

=== npm audit security report ===                        
                                                                                
### Run  npm update extract-zip --depth 2  to resolve 1 vulnerability
                                 
  Low             Prototype Pollution                                                                     
  Package         minimist                                                                      
  Dependency of   puppeteer                                                                     
  Path            puppeteer > extract-zip > mkdirp > minimist                   
                                   
  More info       https://npmjs.com/advisories/1179                             

### Run  npm update https-proxy-agent --depth 2  to resolve 1 vulnerability
                                   
  High            Machine-In-The-Middle                                                         
  Package         https-proxy-agent                                                             
  Dependency of   puppeteer                                                                     
  Path            puppeteer > https-proxy-agent                                                             
  More info       https://npmjs.com/advisories/1184                             

found 2 vulnerabilities (1 low, 1 high) in 155 scanned packages
  run `npm audit fix` to fix 2 of them.
<br/><br/>


## [v4.0] - 2019-10-28
### Add class module file to current project.
- Add class module file 'scripts/httpStatusCodes.js' to current project.
- Add usage notes in README for other projects.
<br/><br/>


## [v3.0] - 2019-10-28
### Create enumerated list for class module.
- Create enumerated list for use as class module in other projects.
<br/><br/>


## [v2.0] - 2019-10-28
### Create array of status codes.
- Use element referencing to find desired values from webpage.
<br/><br/>


## [v1.0] - 2019-10-28
### HTTP Status Codes Scraper.
- Web Scrape HTTP Status Codes from the Mozilla reference.
<br/><br/>