const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


// Run this code during create account - is org UK reg?
router.post('/createaccount-uk-reg-dets', function (req, res) {

  // Make a variable and give it the value from 'createaccount-contact-address'
  var createaccountUKReg = req.session.data['createaccount-uk-reg']

  // Check whether the variable matches a condition
  if (createaccountUKReg == "yes"){
    // Send user to next page
    res.redirect('/public-site/createaccount-your-org-uk')
  } else {
    // Send user to ineligible page
    res.redirect('/public-site/createaccount-your-org')
  }
})

// Run this code during create account - is org address the same as contact address?
router.post('/createaccount-contact-address-answer', function (req, res) {

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

