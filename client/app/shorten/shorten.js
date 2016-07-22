angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.banana = '';
  console.log('links+++++++++',Links)
  $scope.addLink = function(){
    Links.add($scope.banana).then(function(link){

      // $window.localStorage.setItem('com.shortly', token);
      Links.newLink;
        $location.path('/links');
      console.log('links++++++++++', Links)
    })
    .catch(function (error) {
      console.error(error);
    });
  }
});
