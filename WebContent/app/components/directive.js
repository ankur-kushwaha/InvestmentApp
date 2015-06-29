'use strict';

angular.module('investmentApp.common.directive', [])

.directive('mySlider', [function() {
    return {
        scope: {

        },
        compile: function(elem, attrs) {
            console.log(attrs);

            var s2 = $(elem).freshslider({
                step: 1,
                value: 10
            });

            return function(scope, ele, atts) {

            }
        }
    }
}])

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
