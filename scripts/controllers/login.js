'use strict';

/**
 * @ngdoc function
 * @name pttengApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pttengApp
 */
angular.module('pttengApp')
  .controller('LoginCtrl', function ($scope,$http,$location,UserService) {

    $scope.login=function () {
      //save httpPromise for chaining
      var httpPromise = $http({
        method: 'POST',
        params:{name:$scope.username,pwd:$scope.password},
        url: '/carrots-admin-ajax/a/login'
      }).then(function onFulfilledHandler(response) {
        $scope.tempObject = response
        console.log("Temp Object in successCallback ", $scope.tempObject);
        if($scope.tempObject.data.message==="success")
        {
          UserService.login($scope.username,$scope.password);
          $location.path('/dashboard');
        }

        //return object for chaining
        return $scope.tempObject;
      });


      // Simple GET request example:
      // $http({
      //   method: 'POST',
      //   url: '/carrots-admin-ajax/a/login'
      // }).then(function successCallback(response) {
      //
      //   $location.path('/dashboard');
        // this callback will be called asynchronously
        // when the response is available
      // }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      // });
    }
  });
