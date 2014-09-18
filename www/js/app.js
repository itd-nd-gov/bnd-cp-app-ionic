(function() {
  "use strict";

  var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      // if(window.cordova && window.cordova.plugins.Keyboard) {
      //   cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider

    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
    })

    .state('calendar', {
      url: '/calendar',
      templateUrl: 'templates/calendar.html',
      controller: 'CalendarCtrl',
      resolve: {
        events: function(Data) {
          return Data.readGoogleCalendar();
        }
      }
    })

    .state('calendar-detail', {
      url: '/detail/:id',
      templateUrl: 'templates/calendar-detail.html',
      controller: 'CalendarDetailCtrl'
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'templates/contact.html',
    })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/main');

  });

})();
