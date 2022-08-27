const express = require('express');
const router = express.Router();

const messages = [
	{
		text:'Hey hey hey!',
		user: 'Amy',
		added: new Date()
	},
	{
		text: 'This is AWESOME!',
		user: 'Jamie',
		added: new Date()
	}
]

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

// route for new message form
router.get('/new', function(req, res, next) {
	res.render('form', { title: 'Add a new message' });
});

// post new message
router.post('/new', function(req, res, next) {
	messages.push({
		text: req.body.messageText,
		user: req.body.messageUser,
		added: new Date()
	});

	// redirect to index page after submitting new message
	res.redirect('/');
})

module.exports = router;
