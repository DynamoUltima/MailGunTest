var api_key = 'key-208932306fbc9c08bd3d20434f541286';
var domain = 'forhey.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


const recipientVars=mailgun.lists('joel@forhey.com').list(function (err, members) {
  // `members` is the list of member
  if(error){
    console.log(error)
}
  console.log(members);
});
 
var data = {
  from: 'Ewurabena From Forhey <support@forhey.com>',
  to: recipientVars,
  subject: 'Hello our Customer',
  text: 'Testing some Mailgun test with forhey',
  
};

mailgun.lists('joel@forhey.com').info().then(function (data) {
  console.log(data);
}, function (err) {
  console.log(err);
});
 
mailgun.messages().send(data, function (error, body) {

    if(error){
        console.log(error)
    }
  console.log(body);
});

