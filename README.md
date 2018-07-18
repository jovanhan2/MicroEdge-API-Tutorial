# Prerequisite
* [Bash terminal](https://gitforwindows.org/), or equivalent 
* Ensure [NodeJS](https://nodejs.org/en/) is installed
* API key from GiftsOnline
# Company firewalls
* Get address of company firewall (PAC or equivalent) - ***chrome://net-internals/#proxy*** may help

NPM is a package manager that comes with NodeJS. This lets you download packages quickly from the command line. However, since it requires an external connection, it needs to go through your coporate firewall.

Run and set the proxy for npm  ( replace http://company.com:8000 with your companies proxy ) - via bash terminal
```
npm config set proxy http://company.com:8000
npm config set https-proxy http://company.com:8000
```
# Get up and running
- Open terminal, in any directory
- Clone this project `git clone git@github.com:jovanhan2/MicroEdge-API-Tutorial.git`
- Open VS code in the directory
- Navigate to the directory via git clone 
- Execute: `npm install` to install dependencies
- Get a user ID and private key that can access the GO API (fill in keys.js)
- Change ```var contactId = "149"``` on line 7 to any contact ID
- Set ```var proxyUrl = "http://company.com:8000"``` to your company proxy
- Execute: `node test.js`
- Console should log the correct contact id


