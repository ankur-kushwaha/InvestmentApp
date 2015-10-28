'use strict';

// Declare app level module which depends on views, and components
angular.module('investmentApp', [
    'ngRoute',
    'investmentApp.view1',
    'investmentApp.view2',
    'investmentApp.common',
    'ngRadialGauge',
    'ui.bootstrap','ngFx', 'ngAnimate'
]).

config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/view2'
    });
}]);
