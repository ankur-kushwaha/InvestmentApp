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
            var slider=scope.slider;
            scope.imgsrc = function(){
                var imgsrc=slider.img[0];
                for(var i in slider.img){
                    if(slider.value>i)
                        imgsrc=slider.img[i];
                }
                return imgsrc+".png";
            }
            scope.translate = function(value) {
                return '$' + value;
            };
        }
    }
}])
