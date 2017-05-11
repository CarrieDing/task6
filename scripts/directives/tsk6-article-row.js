'use strict';

/**
 * @ngdoc directive
 * @name pttengApp.directive:tsk6ArticleRow
 * @description
 * # tsk6ArticleRow
 */
angular.module('pttengApp')
  .directive('tsk6ArticleRow', function () {
    return {
      restrict: 'A',
      require:'^stkArticleTable',
      scope:{

        article:'='
      },
      link: function ($scope, articleTableCtrl) {
        articleTableCtrl.addRow($scope);

      }
    };
  });
