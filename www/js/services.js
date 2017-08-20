angular.module('starter.services', [])

.factory('Chats', function($http) {

  return {
    getAllPages: function () {
      return $http.get('https://callie-7c9e0.firebaseio.com/appmenu/Pages.json');
    }
  };
});
