'use strict';

angular.module('investmentApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', function($scope, $log, colorpicker) {

	$scope.demo="sdf";

    function refreshSwatch(ev, ui) {
        var red = $scope.colorpicker.red,
            green = $scope.colorpicker.green,
            blue = $scope.colorpicker.blue;
        colorpicker.refreshSwatch(red, green, blue);
    }

    // Slider options with event handlers
    $scope.slider = {
        'options': {
            start: function(event, ui) {
                $log.info('Event: Slider start - set with slider options', event);
            },
            stop: function(event, ui) {
                $log.info('Event: Slider stop - set with slider options', event);
            }
        }
    };

    $scope.demoVals = {
        sliderExample3: 14,
        sliderExample4: 14,
        sliderExample5: 50,
        sliderExample8: 0.34,
        sliderExample9: [-0.52, 0.54],
        sliderExample10: -0.37,
        sliderExample14a: 50,
        sliderExample14b: 50,
        sliderExample15: [30, 60]
    };
    $scope.colorpicker = {
        red: 255,
        green: 140,
        blue: 60,
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 255,
            range: 'min',
            change: refreshSwatch,
            slide: refreshSwatch
        }
    };
})

.factory('colorpicker', function() {
    function hexFromRGB(r, g, b) {
        var hex = [r.toString(16), g.toString(16), b.toString(16)];
        angular.forEach(hex, function(value, key) {
            if (value.length === 1) hex[key] = "0" + value;
        });
        return hex.join('').toUpperCase();
    }
    return {
        refreshSwatch: function(r, g, b) {
            var color = '#' + hexFromRGB(r, g, b);
            angular.element('#swatch').css('background-color', color);
        }
    };
});
