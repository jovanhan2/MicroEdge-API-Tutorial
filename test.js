var request = require('request');
var keys = require('./keys')
// require('request-debug')(request);

// Get contact ID, user ID and private key from command line arguments

var contactId = "149"
var userId = keys.getuserID()
var privateKey = keys.getprivateKey()

// Abort if any of these weren't provided
if (!contactId) {
    console.log('Contact ID not provided.');
    return;
}
if (!userId) {
    console.log('User ID not provided.');
    return;
}
if (!privateKey) {
    console.log('Private key not provided.');
    return;
}
var proxyUrl = "http://webdefence.global.blackspider.com:8081"
var proxiedRequest = request.defaults({'proxy':proxyUrl})


proxiedRequest.post(
    'https://uk.api.microedge.com/auth/token/me-auth',
    { json: { userId: userId, privateKey: privateKey } },
    function (error, response, body) {
        console.log("TEST")
        console.log(body)
        // console.log(body)
        if (!error && response.statusCode == 200 && body.authenticated) {
            var token = body.token;
            var options = {
                url: 'https://uk.api.microedge.com/goapi/contact/getContact',
                method: 'POST',
                headers: { 'Authorization': 'bearer ' + token },
                json: true,
                body: { id: contactId }
            };
    
            // use the auth JWT to call the contact endpoint
            proxiedRequest(options, function (contactError, contactResponse, contactBody) {
                if (contactResponse.statusCode == 200) { 
                    var contact = contactResponse.body.contact;
                    if (contact) {
                        console.log('Name of contact: ' + contact.firstName + ' ' + contact.lastName);
                    } else {
                        console.log('Contact not found');
                    }
                } else {
                    console.log('There was an error retrieving the contact:');
                    console.log(contactResponse);
                }
            });
        }
    }
);
