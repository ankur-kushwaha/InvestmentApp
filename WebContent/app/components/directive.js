'use strict';

angular.module('investmentApp.common.directive', [])

.directive('mySlider', [function() {
    return function(scope, elm, attrs) {
        console.log(scope);
        elm.slider({
            tooltip: 'always'
        });
    };
}]);
