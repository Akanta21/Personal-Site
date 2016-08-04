/* global angular */
// Define the `phonecatApp` module
angular.module('profileApp', [
  // ...which depends on the `phoneList` module
  // By passing phoneList as phonecatApp dependencies, it will make all entities registered on phoneList available on phonecatApp
  'ngRoute',
  'profileSummary',
  'aboutMe',
  'pastProject',
  'contactMe'
])
