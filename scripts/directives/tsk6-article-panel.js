'use strict';

/**
 * @ngdoc directive
 * @name pttengApp.directive:tsk6ArticlePanel
 * @description
 * # tsk6ArticlePanel
 */
angular.module('pttengApp')
  .directive('tsk6ArticlePanel', function ($location,$routeParams,ArticleService) {
    return {
      templateUrl: 'views/templates/article-panel.html',
      restrict: 'E',
      scope:{},
      link: function ($scope) {

        $scope.showAddarticle=function () {
          $location.path('/addarticle');
        };
      }
    };
  });
