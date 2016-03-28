var chairApp = angular.module('chairApp', []);

chairApp.controller('ChairController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.chairs=[];

  function num(numChair) {

    for (var i = 1; i <= numChair; i++) {
     $scope.chairs.push(i);
    }

    var currentIndex = 0;
    var skip = 0;
    
    function remove(chairs, currentIndex, skip) {
      if (chairs.length > 1) {
        $scope.chairs.splice(currentIndex, 1);
        skip += 1;
        currentIndex += skip;
        currentIndex %= $scope.chairs.length;
        $timeout(function() {
          remove(chairs, currentIndex, skip);
        }, 200);
      }
    }

    remove($scope.chairs, currentIndex, skip);
  }

  num(100)
}]);
