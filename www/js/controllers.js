(function() {
  "use strict";

  angular.module('starter.controllers', [])

  .controller('MainCtrl', function($scope) {})

  .controller('CalendarCtrl', function($scope, $window, $http, $filter, $ionicLoading, Data, events) {

    $ionicLoading.show({
      content: 'Loading Data',
      animation: 'fade-in',
      showBackdrop: false,
      maxWidth: 200,
      showDelay: 250
    });

    //

    var entry;
    var results = [];
    var curDate;
    var prevDate;
    var dateGroup = [];

    for (var k in events.feed.entry) {

      entry = events.feed.entry[k];

      curDate = entry.gd$when[0].startTime.substring(0, 10);

      if (curDate != prevDate) {
        dateGroup = [curDate, [entry]];
        results.push(dateGroup);
        prevDate = curDate;
      } else {
        dateGroup[1].push(entry);
      }

    }

    $scope.results = results;

    $ionicLoading.hide();

  })


  .controller('CalendarDetailCtrl', function($scope, $window, $http, $filter, $ionicLoading, Data, $stateParams) {

    $scope.entry = Data.getEventDetails($stateParams.id);

  });

})();
