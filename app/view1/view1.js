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

    $scope.setSelected=function(journey){
        for(var i in $scope.journeys){
            $scope.journeys[i].selected=false;    
        }
        $scope.journeys[this.$index].selected=true;
    }

    $scope.journeys = [{},{},{},{}];

    var data = [{
        floor: 50,
        ceil: 500,
        value: 250,
        img: {
            0: 'image1.jpg',
            100: 'image2.jpg',
            200: 'image3.jpg',
            500: 'image4.jpg'
        }
    }, {
        floor: 50,
        ceil: 1000,
        value: 100,
        img: {
             0: 'image1.jpg',
            100: 'image2.jpg',
            200: 'image3.jpg',
            500: 'image4.jpg'
        }
    }, {
        floor: 50,
        ceil: 500,
        value: 100,
        img: {
             0: 'image1.jpg',
            100: 'image2.jpg',
            200: 'image3.jpg',
            500: 'image4.jpg'
        }
    }, {
        floor: 50,
        ceil: 600,
        value: 100,
        img: {
            0: 'image1.jpg',
            100: 'image2.jpg',
            200: 'image3.jpg',
            500: 'image4.jpg'
        }
    }]

    $scope.sliders = data;

    $scope.total = function() {
        var total = 0;
        for (var i in $scope.sliders) {
            total += $scope.sliders[i].value;
        }
        return total;
    };

    $scope.gauzeTotal = function() {
        var total = 0;
        var ceil = 0;
        for (var i in $scope.sliders) {
            total += $scope.sliders[i].value;
            ceil += $scope.sliders[i].ceil;
        }
        return total / ceil * 100;
    }

    $scope.value = 1.5;
    $scope.upperLimit = 100;
    $scope.lowerLimit = 0;
    $scope.unit = "%";
    $scope.precision = 1;
    $scope.ranges = [{
        min: 0,
        max: 15,
        color: '#DEDEDE'
    }, {
        min: 15,
        max: 25,
        color: '#8DCA2F'
    }, {
        min: 25,
        max: 35,
        color: '#FDC702'
    }, {
        min: 35,
        max: 45,
        color: '#FF7700'
    }, {
        min: 45,
        max: 100,
        color: '#C50200'
    }];
})
