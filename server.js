// ES5 / ES6 / ES7

/*
    SendGrid
    Mailgun

*/

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));

var api_key = 'd03945638302953e1ec6a42fd1f9a62d-a5d1a068-53d1b1e6';
var domain = 'sandbox3c8fa6f27c1e4c589cdc1eb0edcc322b.mailgun.org';
var mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});


app.post('/message', function (req, res) {
    var { lastname, firstname, phone, email } = req.body; // destructuring
    console.log('Data is flowing...', email);

    var data = {
        from: 'marleegerard@gmail.com',
        to: 'marleegerard@gmail.com',
        subject: 'A visitor contacted me -', 
        text: `Phone: ${phone} \n, Email: ${email} \n Lastname: ${lastname}  Firstname: ${firstname}`, // Template Literal
    };

    mailgun.messages().send(data, function(error, body) {
        if (error) {
            console.log('Error: ', error);
            console.log('Ooops, there is an error')
            throw Error('It failed');
        }
        console.log('Email Status: ', body)
        res.json({
            msg: 'Email has been sent!'
        });
    }); // send Email

});


app.listen(port, function () {
    console.log('Server is starting at port 8080');
});