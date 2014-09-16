var googleCalURL = "https://www.google.com/calendar/feeds/ejb2vbgf9le25fd1rpm5tmqmn8@group.calendar.google.com/public/full?orderby=starttime&sortorder=ascending&max-results=30&futureevents=true&alt=json";

angular.module('starter.services', ['ngResource'])

.factory('Data', function($q, $http) {

  var events = {};

  return {
    readGoogleCalendar: function () {
        var deferred = $q.defer();
        $http({ method: "GET", url: googleCalURL })
          .success(function (data, status, headers, config) {
              deferred.resolve(data);
              events = data;
          }).error(function (data, status, headers, config) {
              deferred.reject(data);
          });
        return deferred.promise;
    },
    setEvents: function (data) {
      events = data;
    },
    getEventDetails: function (id) {
      var entry;
      for (var k in events.feed.entry) {
        entry = events.feed.entry[k];
        if (id == entry.gCal$uid.value) {
          return entry;
        }
      }
    }

  };

});
