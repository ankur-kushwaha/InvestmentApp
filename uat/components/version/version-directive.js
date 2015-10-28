'use strict';

angular.module('myApp.version.version-directive', [])

.directive('mySlider', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
