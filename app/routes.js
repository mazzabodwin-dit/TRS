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
    res.redirect('/public-site/create-account/createaccount-your-org-uk-search')
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

// Register interest - public
// Register interest - public


// Run this code on reginterest-which-org: what org is registering interest?
router.post('/reginterest-which-org-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-what-org'
  var reginterestWho = req.session.data['reginterest-what-org']

    // Check whether the variable matches a condition
  if (reginterestWho == "my-org"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-tasks?which-org-task=complete')
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
    res.redirect('/public-site/reg-interest/reginterest-the-org-uk-search')
  } else {
    // Send user to no page
    res.redirect('/public-site/reg-interest/reginterest-the-org')
  }
})

// Run this code on reginterest-loa-existing - which option is chosen:
router.post('/reginterest-tasks-contact-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-valid-primary'
  var reginterestChooseContact = req.session.data['reginterest-choose-contact']

  // Check whether the variable matches a condition
  if (reginterestChooseContact == "Simon Williams - s.williams@steeluk.org"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-tasks?which-org-task=complete')
  } 
  if (reginterestChooseContact == "Robbie Cortina - ortina@steeluk.org"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-tasks?which-org-task=complete')
  } 
  if (reginterestChooseContact == "Tina Fray - tina.fray@steeluk.org"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-tasks?which-org-task=complete')
  } 
  if (reginterestChooseContact == "new-contact"){
    // Send user to next page
    res.redirect('/public-site/reg-interest/reginterest-contact')
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
// Setting specfic headers to not use logged in user
router.get('/caseworker/signin', function (req, res) {
  if (req.session.data['signin'] == null) {
    // store it in session
    req.session.data['signin'] = "no"
  }
  res.render('caseworker/signin')
})

// Run this code on reginterest-interested-party - which option is chosen:
router.post('/reginterest-interested-party-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-valid-primary'
  var reginterestValidPrimary = req.session.data['reginterest-valid-primary']

  // Check whether the variable matches a condition
  if (reginterestValidPrimary == "verified"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-party-type')
  } 
  if (reginterestValidPrimary == "unverified"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-unverified?primary-party-complete=yes&party-type=int')
  } 
})

// Run this code on reginterest-representative-party - which option is chosen:
router.post('/reginterest-representative-party-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-valid-primary'
  var reginterestValidRepresentative = req.session.data['reginterest-valid-representative']

  // Check whether the variable matches a condition
  if (reginterestValidRepresentative == "verified"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-tasks?representative-party-complete=yes')
  } 
  if (reginterestValidRepresentative == "unverified"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-unverified?representative-party-complete=yes&party-type=rep')
  } 
})

// Run this code on reginterest-confirm - which option is chosen:
router.post('/reginterest-accept-on-case-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-valid-party'
  var reginterestAccept = req.session.data['reginterest-accecpt-on-case']

  // Check whether the variable matches a condition
  if (reginterestAccept == "accept"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-complete?accept-on-case-complete=yes&accept-on-case-result=accept')
  } 
  if (reginterestAccept == "decline"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-complete?accept-on-case-complete=yes&accept-on-case-result=reject')
  } 
})

// Run this code on reginterest-loa-existing - which option is chosen:
router.post('/reginterest-loa-existing-route', function (req, res) {

  // Make a variable and give it the value from 'reginterest-valid-primary'
  var reginterestAuthChooseContact = req.session.data['reginterest-auth-choose-contact']

  // Check whether the variable matches a condition
  if (reginterestAuthChooseContact == "Simon Williams"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-tasks?loa-complete=yes')
  } 
  if (reginterestAuthChooseContact == "Robbie Cortina"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-tasks?loa-complete=yes')
  } 
  if (reginterestAuthChooseContact == "Tina Fray"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-tasks?loa-complete=yes')
  } 
  if (reginterestAuthChooseContact == "new-contact"){
    // Send user to next page
    res.redirect('/caseworker/reg-interest/reginterest-loa-new')
  } 
})



module.exports = router