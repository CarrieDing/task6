'use strict';

/**
 * @ngdoc directive
 * @name pttengApp.directive:tsk6DashboardPanel
 * @description
 * # tsk6DashboardPanel
 */
angular.module('pttengApp')
  .directive('tsk6DashboardPanel', function ($scope) {
    return {
      templateUrl: 'views/templates/dashboard.html',
      restrict: 'E',
      scope:{},
      link:function ($scope) {

      }
    };
  });
