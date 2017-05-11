'use strict';

/**
 * @ngdoc overview
 * @name task6App
 * @description
 * # task6App
 *
 * Main module of the application.
 */
angular
  .module('pttengApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mgcrea.ngStrap',
    'ngTable',
    'angularFileUpload'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.html5Mode({
      enabled:true,
      requireBase:false
    });
    // 去掉Url 中的#
    $routeProvider
      .when('/articlelist', {
        templateUrl: 'views/articlelist.html',
        controller: 'ArticlelistCtrl',
        controllerAs: 'articlelist'
      })
      .when('/addarticle', {
        templateUrl: 'views/addarticle.html',
        controller: 'AddarticleCtrl',
        controllerAs: 'addarticle'
      })
      .when('/welcomepage', {
        templateUrl: 'views/welcomepage.html',
        controller: 'WelcomepageCtrl',
        controllerAs: 'welcomepage'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
