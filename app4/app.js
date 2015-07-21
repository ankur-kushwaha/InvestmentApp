'use strict';

// Declare app level module which depends on views, and components
angular.module('investmentApp', [
    'ngRoute',
    'investmentApp.view1',
    'investmentApp.view2',
    'investmentApp.common',
    'rzModule',
    'ngRadialGauge',
    'ui.bootstrap'
]).

config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/view2'
    });
}]);
