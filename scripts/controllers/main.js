'use strict';

/**
 * @ngdoc function
 * @name pttengApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pttengApp
 */
angular.module('pttengApp')
  .controller('MainCtrl', function ($scope,$location) {
   $scope.$watch(function () {
     return $location.path();
   },function (path) {
     if(_.includes(path,'articlelist')){
       $scope.activeView='articlelist';
     }else{
       $scope.activeView='dashboard';
     }
   });
  });
