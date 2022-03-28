const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Create account
// Run this code on createaccount-uk-org: - is org UK reg?
router.post('/createaccount-uk-reg-route', function (req, res) {

  // Make a variable and give it the value from 'createaccount-uk-reg'
  var createaccountUKReg = req.session.data['createaccount-uk-reg']

  // Check whether the variable matches a condition
  if (createaccountUKReg == "yes"){
    // Send user to next page
    res.redirect('/public-site/create-account/createaccount-your-org-uk-alt')
  } else {
    // Send user to ineligible page
    res.redirect('/public-site/create-account/createaccount-your-org')
  }
})

// Run this code during createaccount-your-org / uk - is org address the same as contact address?
router.post('/createaccount-contact-address-route', function (req, res) {

  // Make a variable and give it the value from 'createaccount-contact-address'
  var createaccountContactAdd = req.session.data['createaccount-contact-address']

  // Check whether the variable matches a condition
  if (createaccountContactAdd == "no"){
    // Send user to next page
    res.redirect('/public-site/createaccount-your-office-dets')
  } else {
    // Send user to ineligible page
    res.redirect('/public-site/createaccount-your-org-dets')
  }
})

// Register interest
// Run this code during reginterest-which-org - If there is not an org name already use a default one
router.get('/public-site/reg-interest/reginterest-which-org', function (req, res) {

  if (req.session.data['createaccount-org-name'] == null) {
    // store it in session
    req.session.data['createaccount-org-name'] = "Cheesy Chips Ltd"
    // send it to the current page
    res.locals.data['createaccount-org-name'] = "Cheesy Chips Ltd"
  }

  if (req.session.data['account-email'] == null) {
    // store it in session
    req.session.data['account-email'] = "myemail@email.com"
    // send it to the current page
    res.locals.data['account-email'] = "myemail@email.com"
  }

  res.render('public-site/reg-interest/reginterest-which-org')
 
})

// Run this code on reginterest-which-org: what org is registering interest?
router.post('/reginterest-which-org-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-what-org'
  var reginterestWho = req.session.data['reginterest-what-org']

    // Check whether the variable matches a condition
  if (reginterestWho == "my-org"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-tasks')
  } 

  // Check whether the variable matches a condition
  if (reginterestWho == "existing-org"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-existing-org')
  } 

  // Check whether the variable matches a condition
  if (reginterestWho == "new-org"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-uk-reg')
  } 
})

// Run this code on reginterest-uk-org: - is org UK reg?
router.post('/reginterest-uk-reg-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-uk-org'
  var reginterestUKReg = req.session.data['reginterest-uk-reg']

  // Check whether the variable matches a condition
  if (reginterestUKReg == "yes"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-org-uk-search')
  } else {
    // Send user to no page
    res.redirect('/public-site/reg-interest/reginterest-the-org')
  }
})



module.exports = router