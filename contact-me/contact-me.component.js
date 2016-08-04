angular
  .module('contactMe')
  .component('contactMe', {
    template:
    '<div id="contact">' +
        '<div class="wrapper">' +
          '<h2>Let’s get in touch.</h2>' +
          '<p>Frankly, we have a hard time not talking digital. So if you\'ve a project in mind, would like to collaborate, or just plain want to say hello, give us a shout. I\'d love to meet you.</p>' +
          '<form novalidate name="fillForm" class="css-form">' +
            '<div class="form-row">' +
              '<input type="text" ng-model="fillForm.name" placeholder="name" required /><br />' +
            '</div>' +
            '<div class="form-row">' +
              '<input type="text" ng-model="fillForm.email" placeholder="email" required /><br />' +
            '</div>' +
            '<div class="form-row">' +
              '<input type="text" ng-model="fillForm.contact" placeholder="contact no" required /><br />' +
            '</div>' +
            '<div class="form-row">' +
              '<input type="text" ng-model="fillForm.subject" placeholder="What is it about?" required /><br />' +
            '</div>' +
            '<div class="form-row">' +
              '<textarea ng-model="fillForm.text" placeholder="Just a little more..." required /><br />' +
            '</div>' +
            '<input type="submit" ng-click="sendData()" value="Save" />' +
          '</form>' +
        '</div>' +
        '<p ng-show="message">' + '{{message}}' + '</p>' +
    '</div>',
    controller: function ContactMeController ($scope, $http, $route) {
      // var self = this
      $scope.sendData = function () {
        var data = {
          name: $scope.fillForm.name,
          email: $scope.fillForm.email,
          contact: $scope.fillForm.contact,
          subject: $scope.fillForm.subject,
          text: $scope.fillForm.text
        }
        // console.log(data)
        $http({
          method: 'POST',
          url: 'http://localhost:3000/postmsg',
          data: data
        })
        .success(function (data) {
          console.log(data)
          $scope.message = data.message
          $scope.fillForm = null;
        })
        .error(function (data, status, headers, config) {
          $scope.message = data.error
          console.log(data.error)
        })
      }
    }
  })
