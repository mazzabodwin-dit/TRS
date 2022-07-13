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

//Key default values to set up Public
  "who-signin": "org",
  "account-activated": "yes",
  "user-permissions": "Admin user",


//Key caseworker users 
  "caseworkername": "Jonanna Barton",
  
//CASE 1
  "case-ref1": "AD2224",
  "case-name1": "Steel plate from Russia",
  "case-typeabr1": "AD",
  "case-type1": "Anti-dumping",
  "commodity1": "Steel plate",
  "country1": "Russia",
  "created1": "12 May 2022",
  "initiated1": "13 May 2022",
  "register-date1": "21 June 2022",
  "updated1": "14 May 2022",
  "status1": "Initiation notices published",
  "next-task1": "Publish questionnaires",
  "next-notice1": "26 July 2022",

  "applicant1": "Steelman Plc",
  "app-user1": "Vladimir Boffoff",
  "app-email1": "v.boffoff@Steelman.org",
  "app-submission1": "Questionnaire",
  "app-role1": "Applicant",

  //KEY USER: who-signin=org
  "party1": "Steel UK",
  "party-user1": "Jane Winder",
  "party-email1": "j.winder@steeluk.org",
  "party-country1": "United Kingdom",
  "party-role1": "Interested party",
  "party-case-role1": "Importer",
  "party-submission1": "Registration of Interest",
  "party-status1": "Representative invite received",

  //KEY USER: who-signin=org-invite
  "party-user11": "Lara Crist",
  "party-email11": "l.crist@steeluk.com",

  //KEY USER: who-signin=rep
  "representative1": "BlueSteel Partners",
  "rep-role1": "Representative",
  "rep-user1": "Bob Hoskins",
  "rep-email1": "bobhoskins@BlueSteelPartners.com",
  "rep-user-role1": "Admin",
  "rep-mobile1": "+44 7854329445",
  "rep-mobile-national1": "07854329445",
  "rep-submission1": "Registration of Interest received",

  //KEY USER - who-signin=rep-invite
  //"representative1": "BlueSteel Partners",
  "rep-role3": "Representative",
  "rep-user3": "Demi Morre",  
  "rep-email3": "demi.morre@BlueSteelPartners.com",
  "rep-user-role3": "(Invite sent)",

   //KEY USER - who-signin=rep-invite2
  "rep-role2": "Representative",
  "rep-user2": "Trevor McDoodle",  
  "rep-email2": "doodle@lawyersinc.com",
  "rep-user-role2": "(Invite sent)",
  "representative2": "Lawyers Inc",

  //KEY USER: party that cannot be verified
  "party111": "Awesome Steel",
  "party-user111": "Itsa Steel",
  "party-email111": "itsa.steel@awesomesteel.cn",
  "party-country111": "China",
  "party-role111": "Interested party",
  "party-case-role111": "Unknown",
  "party-submission111": "Registration of Interest",
  "party-comment111": "Unable to find concrete details about this organisation through any of the usual channels. They have not responded to any email requests.",

//CASE 2 - case closed
  "case-ref2": "TS0002",
  "case-name2": "Rainbow Trout from Turkey",
  "case-typeabr2": "TAS",
  "case-type2": "Transition anti-subsidy review",
  "commodity2": "Rainbow Trout",
  "applicant2": "Secretary of State",
  "created2": "01 Feb 2019",
  "initiated2": "04 Mar 2019",
  "register-date2": "01 June 2019",
  "updated2": "30 Nov 2021",
  "country2": "Republic of Turkey",
  "status2": "	Final determination",
  "next-task2": "n/a",
  "next-notice2": "n/a",
  
  "party2": "Trouty Works",
  "party-case-role2": "Exporter",
  "party-role2": "Interested party",
  "party-user2": "Clay Akin",
  "party-email2": "Clay.Akin@trouty.works.co",


//CASE 3
  "case-ref3": "AG0404",
  "case-name3": "Farnets from Fabon",
  "case-typeabr3": "AS",
  "case-type3": "Anti-subsidy investigation",
  "commodity3": "Farnets",
  "applicant3": "Farnets First UK",
  "country3": "Federation of Fabon",
  "created3": "13 April 2022",
  "initiated3": "16 April 2022",
  "register-date3": "01 May 2022",
  "updated3": "16 April 2022",
  "status3": "Case initiated",
  "next-task3": "Issue questionnaires",
  "next-notice3": "01 June 2022",

  "party3": "Fabulous Farnets",
  "party-user3": "Odessa Seas",
  "party-email3": "o.seas@fabulous-farnets.fn",
  "party-role3": "Importer",
  "party-status5": "Questionnaires received",
  "party-country": "Russia",
  "submission3": "Questionnaire",

//CASE 4
  "case-ref4": "BA0005",
  "case-name4": "Barnets from Tabon",
  "case-typeabr4": "SI",
  "case-type4": "Safeguarding Invesitgation",
  "commodity4": "Barnets",
  "applicant4": "Tabon Holdings",
  "applicant-user4": "Terry Crotchet",
  "applicant-email4": "terry.crotchet@tabon-holdings.tb",
  "applicant-submission4": "Applicant",
  "applicant-role4": "Applicant",
  "created4": "	13 Nov 2020",
  "initiated4": "20 Nov 2020",
  "register-date4": "05 Dec 2020",
  "updated4": "23 Dec 2021",
  "country4": "United Kingdom",
  "status4": "Questionnaires issued",
  "next-task4": "Process questionnaires",
  "next-notice4": "02 Feb 2021",

  "party4": "Best Barnets Corp",
  "party-user4": "Mohawks Fringe",
  "party-email4": "m.fringe@best-barnets.uk",
  "party-case-role4": "Importer",
  "party-role4": "Interested party",
  "party-submission4": "Questionnaire",

  //Representative for this case is Demi Morre - see Case 3 for dets


//CASE 5
  "case-ref5": "AS3464",
  "case-name5": "Garnets from Gabon",
  "case-typeabr5": "AS",
  "case-type5": "Anti-subsidy investigation",
  "commodity5": "Garnet stones",
  "applicant5": "Secretary of State",
  "created5": "24 Dec 2020",
  "initiated5": "01 Jan 2021",
  "register-date5": "15 Jan 2021",
  "updated5": "08 Jan 2022",
  "country5": "Republic of Gabon",
  "status5": "Processing applications",
  "next-task5": "Initiation",
  "next-notice5": "01 June 2022",
  "case-role5": "Declined",

  "party5": "Glorious Gabon Plc",
  "party-user5": "George Spinter",
  "party-email5": "Spinter@glorgabon.gb",
  "party-status5": "Questionnaire received",
  "party-case-role5": "Importer",
  "party-role5": "Interested party",
  "party-submission5": "Representative invite",

  //"representative1": "BlueSteel Partners",   Using Bob for this one as Jon is deactived
  "rep-user6": "Arnie Swarts",
  "rep-email6": "arnieswarts@BlueSteelPartners.com",

  "rep-user5": "Jonty Bodwin",
  "rep-email5": "jonty.bodwin@BlueSteelPartners.com",
  "rep-role5": "De-activated",
  

  //CASE 6
  "case-ref6": "SI9405",
  "case-name6": "Electric Bikes",
  "case-typeabr6": "SI",
  "case-type6": "Safeguarding Invesitgation",
  "commodity6": "Electric Bikes",
  "applicant6": "Bikers Ltd",
  "created6": "07 July 2021",
  "initiated6": "24 July 2021",
  "register-date6": "07 Aug 2021",
  "updated6": "24 March 2022",
  "country6": "Republic of China",
  "status6": "Post-verification analysis",
  "next-task6": "The Statement of Essential Facts",
  "next-notice6": "24 Sept 2022",

  // This is their own case. Not representing another party
  //"representative1": "BlueSteel Partners",
  //"rep-user6": "Arnie Swarts",
 // "rep-email6": "arnieswarts@BlueSteelPartners.com",
  "rep-status6": "Deficiency notice issued",
  "rep-user-role6": "Regular",
  "rep-role6": "Contributor",



//CASE 7 - DRAFT yet to be made public
  "case-ref7": "AD12234",
  "case-name7": "Corn-on-cob from Alaska",
  "case-typeabr7": "AD",
  "case-type7": "Anti-dumping",
  "commodity7": "Corn-on-cob, sweetcorn",
  "applicant7": "Secretary of State",
  "created7": "07 March 2022",
  "initiated7": "n/a",
  "register-date7": "n/a",
  "updated7": "24 July 2021",
  "country7": "United States",
  "status7": "DRAFT",
  "next-task7": "n/a",
  "next-notice7": "n/a/",

}