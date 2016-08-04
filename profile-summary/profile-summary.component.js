angular
  .module('profileSummary')
  .component('profileSummary', {
    template:
        '<div id="intro">' +
          '<div class="intro-bg-2"></div>' +
          '<div class="wrapper">' +
            '<h1 ng-repeat="profile in $ctrl.profiles">' +
            '{{profile.name}}' +
              '<span class="lead">{{profile.description}}</span>' +
               '<a href="#about"><span class="arrow">Learn More</span></a>' +
            '</h1>' +
          '</div>' +
          '<footer ng-repeat="profile in $ctrl.profiles">' +
            '<a href="{{profile.socials[0].name}}"><img src="img/github.png"></a>' + '<a href="#"><img src="img/twit.png"></a>' +
            '<a href="{{profile.socials[1].name}}"><img src="img/linkedin.png"></a><br>' +
            '<span>Circa &copy; 2016 </span>' +
          '</footer>' +
        '</div>',
    controller: function ProfileSummaryController ($http) {
      var self = this

      $http.get('https://andrianapi.herokuapp.com/')
      .then(function (response) {
        self.profiles = response.data
      })
    }
  })
