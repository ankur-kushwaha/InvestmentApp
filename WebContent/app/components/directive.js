'use strict';

angular.module('investmentApp.common.directive', [])

.directive('sliderWithImage', [function() {
    return {
        templateUrl: 'partials/slider-with-image.html',
        scope: {
            slider: "=sliderWithImage"
        },
        link: function(scope, ele, attrs) {
            scope.initialValue = 6;
            scope.imgsrc = "images/test.png";
            scope.translate = function(value) {
                return '$' + value;
            };
        }
    }
}])
