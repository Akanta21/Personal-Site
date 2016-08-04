angular
  .module('aboutMe')
  .component('aboutMe', {
    template:

    '<div id="about">' +
        '<div class="wrapper">' +
            '<h2>Hello.</h2>' +
                '<p>Creating great concepts, design and build digital products. Andrian is a firm believer in rapid prototyping, collaboration between disciplines, and thoughtful, creative solutions.</p>' +
                '<ul class="services-list" ng-repeat="skill in $ctrl.skills">' +
                    '<li>HTML: {{skill.HTML}}</li>' +
                    '<li>CSS: {{skill.CSS}}</li>' +
                    '<li>Javascript: {{skill.Javascript}}</li>' +
                    '<li>JQuery: {{skill.JQuery}}</li>' +
                    '<li>MongoDB: {{skill.MongoDB}}</li>' +
                    '<li>Express: {{skill.Express}}</li>' +
                    '<li>Angular: {{skill.AngularJS}}</li>' +
                    '<li>Node: {{skill.NodeJS}}</li>' +
                    '<li>Ruby on Rails: {{skill.Ruby}}</li>' +
                '</ul>' +
            '</div>' +
        '</div>',
    controller: function AboutMeController ($http) {
      var self = this

      $http.get('https://andrianapi.herokuapp.com/skills')
      .then(function (response) {
        self.skills = response.data
      })
    }
  })
