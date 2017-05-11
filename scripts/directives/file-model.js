'use strict';

/**
 * @ngdoc directive
 * @name pttengApp.directive:fileModel
 * @description
 * # fileModel
 */
angular.module('pttengApp')
  .directive('fileModel', function ($parse) {
    return {
      restrict: 'A',

      link: function (scope, element, attrs) {
        var model=$parse(attrs.fileModel);
        var modelSetter=model.assign;
        element.bind('change',function (event) {
          scope.$apply(function () {
            modelSetter(scope,element[0].files[0]);
          });
          scope.getFile();
        });
      }
    };
  });
