'use strict';

/**
 * @ngdoc directive
 * @name pttengApp.directive:tsk6ArticleTable
 * @description
 * # tsk6ArticleTable
 */
angular.module('pttengApp')
  .directive('tsk6ArticleTable', function () {
    return {
      templateUrl: 'views/templates/article-table.html',
      restrict: 'E',
  /*     scope:{
        articlelist:'='
      },
      controller:function ($scope) {
        var rows=[];

      this.addRow=function (row) {
      rows.push(row);
      };
    }, */
      link: function ($scope) {

      }
    };
  });
