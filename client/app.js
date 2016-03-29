var chairApp = angular.module('chairApp', [
  'ngMaterial'
]);

chairApp.controller('ChairController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.chairs=[];
  $scope.disabled = true;
  $scope.lastone = "";

  $scope.num = function(numChair) {
    $scope.lastone = ""
    $scope.disabled = true;
    $scope.chairs=[];
    var radius = 150;
    var width = 400;
    var height = 400;
    var chairHeight = 10;
    var chairWidth = 10; 
    var angle = 0;
    var step = (2*Math.PI) / numChair;

    for (var i = 1; i <= numChair; i++) {
      var chair = { number: i };
      chair.x = Math.round(width/2 + radius * Math.cos(angle) - chairWidth/2);
      chair.y = Math.round(height/2 + radius * Math.sin(angle) - chairHeight/2);
      $scope.chairs.push(chair);
      angle += step;
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
        }, 50);
      } else {
        $scope.disabled = false;
        $scope.lastone="winner"
      }
    }

    remove($scope.chairs, currentIndex, skip);
  }

  $scope.num(100)
}]);
