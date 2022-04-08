const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Headers
// Setting a few spoecfic header to not use logged in user
router.get('/public-site/public-cases', function (req, res) {
  if (req.session.data['signin'] == null) {
    // store it in session
    req.session.data['signin'] = "no"
  }
  res.render('public-site/public-cases')
})

// Headers
// Setting a few spoecfic header to not use logged in user
router.get('/public-site/start', function (req, res) {
  if (req.session.data['signin'] == null) {
    // store it in session
    req.session.data['signin'] = "no"
  }
  res.render('public-site/start')
})

// Pubic
// Pubic
// Pubic
// Pubic
// Pubic
// Pubic - Create account

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

// Create Account 
// Run this code during createaccount-account-complete - If there is not an email use a default one
router.get('/public-site/create-account/createaccount-account-complete', function (req, res) {

  if (req.session.data['account-email'] == null) {
    // store it in session
    req.session.data['account-email'] = "myemail@email.com"
    // send it to the current page
    res.locals.data['account-email'] = "myemail@email.com"
  }

  res.render('public-site/create-account/createaccount-account-complete')
 
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


// Register interest
// Run this code during reginterest-upload
router.get('/public-site/reg-interest/reginterest-upload', function (req, res) {

  if (req.session.data['upload2-started'] == "yes") {
    // store it in session
    req.session.data['upload2-complete'] = "yes"
    // send it to the current page
    res.locals.data['upload2-complete'] = "yes"
  }

  if (req.session.data['upload3-started'] == "yes") {
    // store it in session
    req.session.data['upload3-complete'] = "yes"
    // send it to the current page
    res.locals.data['upload3-complete'] = "yes"
  }

  if (req.session.data['upload4-started'] == "yes") {
    // store it in session
    req.session.data['upload4-complete'] = "yes"
    // send it to the current page
    res.locals.data['upload4-complete'] = "yes"
  }

  res.render('public-site/reg-interest/reginterest-upload')
 
})

// Caseworker
// Caseworker
// Caseworker
// Caseworker
// Caseworker

// Headers
// Setting a few specfic header to not use logged in user
router.get('/caseworker/signin', function (req, res) {
  if (req.session.data['signin'] == null) {
    // store it in session
    req.session.data['signin'] = "no"
  }
  res.render('caseworker/signin')
})

// Run this code on reginterest-party-employer - which option is chosen:
router.post('/reginterest-valid-employer-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-valid-party'
  var reginterestValidEmployer = req.session.data['reginterest-valid-employer']

  // Check whether the variable matches a condition
  if (reginterestValidEmployer == "valid"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-tasks?party-employer-complete=yes')
  } 
  if (reginterestValidEmployer == "fraudulent"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-fraudulent')
  } 
})



module.exports = router