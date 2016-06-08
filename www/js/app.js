// Ionic Test App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])
// .run(function($ionicPlatform) {
//     $ionicPlatform.ready(function() {
//         if(window.cordova && window.cordova.plugins.Keyboard) {
//             cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//         }
//         if(window.StatusBar) {
//             StatusBar.styleDefault();
//         }
//     });
// })
.controller('MyCtrl', function($scope) {
    $scope.groups = [];
    for (var i=0; i<5; i++) {
      $scope.groups[i] = {
        name: i,
        items: []
      };
      for (var j=0; j<3; j++) {
        $scope.groups[i].items.push(i + '-' + j);
      }
    }
     /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };
})
.controller("MyCalendar", function($ionicPlatform, $scope, $cordovaCalendar) {
  $ionicPlatform.ready(function() {
    $scope.createEvent = function() {
        $cordovaCalendar.createEvent({
            title: 'Space Race',
            location: 'The Moon',
            notes: 'Bring sandwiches',
            startDate: new Date(2016, 5, 8, 18, 30, 0, 0, 0),
            endDate: new Date(2016, 5, 8, 20, 0, 0, 0, 0)
        }).then(function (result) {
            console.log("Event created successfully");
        }, function (err) {
            console.error("There was an error: " + err);
        });
    };
  });
});
