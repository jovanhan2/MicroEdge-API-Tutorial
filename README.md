# Prerequisite
* [Bash terminal](https://gitforwindows.org/), or equivalent 
* Ensure [NodeJS](https://nodejs.org/en/) is installed
* API key from GiftsOnline
# Company firewalls
* Get address of company firewall (PAC or equivalent) - ***chrome://net-internals/#proxy*** may help

Run and set the proxy  ( replace http://company.com:8000 with your companies proxy )
```
npm config set proxy http://company.com:8000
npm config set https-proxy http://company.com:8000
```
# Get up and running
- Execute: `npm install` to install dependencies
- Get a user ID and private key that can access the GO API (fill in keys.js)
- Change ```var contactId = "149"``` on line 7 to any contact ID
- Set ```var proxyUrl = "http://company.com:8000"``` to your company proxy
- Execute: `node test.js`l


