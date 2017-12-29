var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
var db = require('./database.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

// Due to express, when you load the page, it doesnt make a get request to '/', it simply serves up the dist folder
app.post('/search', function(req, res) {
  console.log('searched', req.body)

  request({
  	url: 'https://api.yelp.com/v3/businesses/search',
  	headers: {
  		'User-Agent' : 'request',
  		'Authorization' : //PUT API KEY HERE!!!!!!!!!
  	},
  	qs: {
  		'term' : 'dumplings',
  		'location' : req.body.param
  	}
  }, (err, response, body) => {
  	if (err) {console.log(err)}
  	if (response) {
  		res.send(JSON.parse(body))
  	}
  })
})

app.post('/save', function(req, res) {
	var dumpSpot = req.body.dumpSpot;
	db.query(`INSERT INTO dumps (name, image_url, phone_number, yelp_url) VALUES
			  ('${dumpSpot.name.replace('\'', '')}', '${dumpSpot.image_url}', '${dumpSpot.phone}', '${dumpSpot.url}')`);
	res.end();
});

app.get('/faves', function(req, res) {
	db.query('SELECT name, image_url, phone_number, yelp_url FROM dumps', (err, results) => {
		if (err) console.error(err); 
		res.send(results);
	});
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});