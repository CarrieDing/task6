'use strict';

/**
 * @ngdoc function
 * @name pttengApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the pttengApp
 */
angular.module('pttengApp')
  .controller('DashboardCtrl', function ($scope,$location,UserService) {

    $scope.user=UserService;
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
