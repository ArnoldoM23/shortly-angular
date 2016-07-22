angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.banana = '';
  $scope.addLink = function(){
    Links.add($scope.banana).then(function(token){
      $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      console.log('token++++++++++', token)
    })
    .catch(function (error) {
      console.error(error);
    });
  }
});
