angular
  .module('pastProject')
  .component('pastProject', {
    template:
        '<div id="work">' +
          '<p id="workprojects"> Projects</p>' +
          '<div class="projectcontent">' +
            '<div class="thumbnails" ="project" ng-repeat="project in $ctrl.projects" >' +
              '<a href="{{project.link}}" class="item"><img src="{{project.image}}"></a>' +
              '<p>{{project.title}} : <br> <span' + 'class="overlay">{{project.description}}</span>' +
            '</div>' +
          '<div>' +
        '</div>',
    controller: function PastProjectController ($http) {
      var self = this

      $http.get('https://andrianapi.herokuapp.com/projects')
      .then(function (response) {
        self.projects = response.data
      })
    }
  })
