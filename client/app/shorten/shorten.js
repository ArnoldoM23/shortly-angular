angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.banana = '';
  $scope.addLink = function(){
    Links.add($scope.banana).then(function(link){
      console.log('checking link in shorten', link)
      // $location.path('/links');
    })
    .catch(function (error) {
      console.error(error);
    });
  }
});
