/* global angular */

angular.
module('profileApp').
config(['$locationProvider', '$routeProvider', function config ($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!')

  $routeProvider
  .when('/', {
    template: '<profile-summary></profile-summary>'
  })
  .when('/about', {
    template: '<about-me></about-me>'
  })
  .when('/work', {
    template: '<past-project></past-project>'
  })
  .when('/contact', {
    template: '<contact-me></contact-me>'
  })
  .otherwise('/')
}])
