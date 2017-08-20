angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope, Chats, $ionicScrollDelegate, $ionicPopup) {

    $scope.story = {};
    $scope.page = {};
    $scope.stats = [];
    $scope.isFirstPage = true;
    $scope.pageHistory = [];

    Chats.getAllPages().success(
      function (data) {
        $scope.story = data;
        $scope.changePage("Page1");
      }
    );

    $scope.changePage = function (pageName) {
      $scope.isFirstPage = pageName == "Page1";
      $scope.page = $scope.story[pageName];
      $ionicScrollDelegate.scrollTop();
    };

    $scope.callme = function () {
      var alertPopup = $ionicPopup.alert({
        title: 'Mesaj',
        template: 'Talebiniz Alınmıştır.'
      });
      alertPopup.then(function () {
        $scope.changePage("Page1");
      });
    };

  })

  .controller('SearchCtrl', function ($scope, Chats, $ionicPopup) {

    $scope.search = {key: ''};
    $scope.allChoices = [];
    $scope.selectedContent = '';

    Chats.getAllPages().success(
      function (data) {
        angular.forEach(data, function (value, key) {
          angular.forEach(value.Choices, function (value, key) {
            $scope.allChoices.push(value);
          });
        });
      }
    );

    $scope.setSelected = function (content) {
      $scope.selectedContent = content;
    };

    $scope.callme = function () {
      var alertPopup = $ionicPopup.alert({
        title: 'Mesaj',
        template: 'Talebiniz Alınmıştır.'
      });
      alertPopup.then(function () {
        $scope.selectedContent = "";
        $scope.search = "";
      });
    };

  });
