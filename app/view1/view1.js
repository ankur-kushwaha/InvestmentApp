'use strict';

angular.module('investmentApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', function($scope, $log) {

    $scope.demo = "sdf";



    $scope.journeys = [1, 1, 1, 1];

    var data = [{
        floor: 50,
        ceil: 5000,
        value: 100
    }, {
        floor: 50,
        ceil: 1000,
        value: 100
    }, {
        floor: 50,
        ceil: 500,
        value: 100
    }, {
        floor: 50,
        ceil: 600,
        value: 100
    }]

    $scope.sliders = data;

    $scope.value = 1.5;
        $scope.upperLimit = 100;
        $scope.lowerLimit = 0;
        $scope.unit = "$";
        $scope.precision = 1;
        $scope.ranges = [
            {
                min: 0,
                max: 15,
                color: '#DEDEDE'
            },
            {
                min: 15,
                max: 25,
                color: '#8DCA2F'
            },
            {
                min: 25,
                max: 35,
                color: '#FDC702'
            },
            {
                min: 35,
                max: 45,
                color: '#FF7700'
            },
            {
                min: 45,
                max: 100,
                color: '#C50200'
            }
        ];
})
