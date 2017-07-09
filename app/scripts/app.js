'use strict';

/**
 * @ngdoc overview
 * @name recordsureApp
 * @description
 * # recordsureApp
 *
 * Main module of the application.
 */
var app = angular
  .module('recordsureApp', [
    'ngRoute',
    'ngMessages'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/interviews', {
        templateUrl: 'views/interviews.html',
        controller: 'InterviewCtrl',
        controllerAs: 'interview'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
