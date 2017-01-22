/**
* Created by Mario on 1/8/17.
*/
'use strict';
angular.module('urbanistaApp')
.config(function($routeProvider){
    $routeProvider
        .when('/', {
            redirectTo: '/events'
        })
        .when('/venues', {
            templateUrl: 'views/venues/index.html',
            controller: 'venuesCtrl',
            controllerAs: 'vm'
        })
        .when('/events', {
            templateUrl: 'views/events/index.html',
            controller: 'eventsCtrl',
            controllerAs: 'vm'
        })
        .when('/events/new', {
            templateUrl: 'views/events/new.html',
            controller: 'eventsCtrl',
            controllerAs: 'vm'
        });
});
