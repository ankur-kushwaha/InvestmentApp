'use strict';

angular.module('investmentApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$location',function($scope,$location) {
  $scope.person={};
  $scope.person.age=30;
  $scope.person.gender = 'Male';

  $scope.redirect=function(){
    if($scope.form.$valid)
     $location.path('view1').search('age',$scope.person.age); // path not hash
  }
}]);