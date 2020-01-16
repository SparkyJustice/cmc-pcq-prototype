var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


router.get('*/prototype-admin/view-data', function(req, res){

	querystring = '';
	for ( var key in req.session.data )
	querystring += key +'=' + req.session.data[key] + '&';

  res.render('prototype-admin/view-data', { data: JSON.stringify( req.session, null, 2), querystring: querystring } )
});



// add your routes here

router.post('/defendant-pcq-call', function (req, res, next) {
	res.redirect('https://hmcts-cmc-pcq-prototype.herokuapp.com/introduction?userType=defendant')
})

router.post('/claimant-pcq-call', function (req, res, next) {
	res.redirect('https://hmcts-cmc-pcq-prototype.herokuapp.com/introduction?userType=claimant')
})

module.exports = router

