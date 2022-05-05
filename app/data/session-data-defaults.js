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
  
  "case-ref1": "AD2224",
  "case-name1": "Steel plate from Russia",
  "case-typeabr1": "AD",
  "case-type1": "Anti-dumping",
  "applicant1": "Steelman Plc",
  "created1": "12 May 2022",
  "party1": "Steel UK",
  "representative1": "Blue Steel Lawyers",
  "user1": "BobHoskins",
  "submission1": "Registration of Interest",
  "register-date1": "01 June 2021",
  "status1": "Case information finalised",
  "next-task1": "Publish initiation notices",
  "next-notice1": "26 May 2022",
  "reginterest-app-status": "Application received"
}
