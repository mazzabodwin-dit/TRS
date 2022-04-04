/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  "name": "Devi Lakhia",
  "accountOrg": "Devi",
  "case-ref1": "AD2224",
  "case-name1": "Steel plate from Russia",
  "case-typeabr1": "AD",
  "case-type1": "Anti-dumping",
  "party1": "Steel UK",
  "user1": "BobHoskins",
  "submission1": "Registration of Interest",
  "register-date1": "01 April 2021"

}
