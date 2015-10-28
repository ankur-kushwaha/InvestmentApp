'use strict';

angular.module('investmentApp.common.directive', ['ui.bootstrap-slider'])

.directive('sliderWithImage', [function() {
    return {
        templateUrl: 'partials/slider-with-image.html',
        scope: {
            slider: "=sliderWithImage",
            onStopSlide:"&",
            onSlide:"&",
            onStartSlide:"&",
            onChange:'&'
        },
        link: function(scope, ele, attrs) {
            scope.initialValue = 6;
            var slider=scope.slider;
           /* scope.imgsrc = function(){
                var imgsrc=slider.img[0];
                for(var i in slider.img){
                    if(slider.value>i)
                        imgsrc=slider.img[i];
                }
                return imgsrc;
            }*/

            scope.imgsrc=function(){
                if(scope.slider.changed){
                    return scope.slider.modifiedImage;
                }else{
                    return scope.slider.image;
                }
            }

            scope.translate = function(value) {
                return value;
            };

            scope.delegateEvent = null;

            scope.slideDelegate = function (value, event) {
                    scope.onStopSlider();
            }

        }
    }
}])

.directive('coverFlow',function(){
    return {
        templateUrl: 'partials/cover-flow.html',
        compile:function(elem,attrs){
             $(elem).coverflow();
        }
    }
})
