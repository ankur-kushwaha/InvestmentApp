'use strict';

angular.module('investmentApp.common.directive', [])

.directive('mySlider', [function() {
    return function(scope, elm, attrs) {
        console.log(scope);
        elm.slider({
            tooltip: 'always'
        });
    };
}])

.directive('sliderWithImage',[function(){
	return {
		scope:{
			test:"=sliderWithImage"
		},
		templateUrl: 'partials/slider-with-image.html',
		link:function(scope,ele,attrs){
			scope.test=1;
		}
	}
}])

