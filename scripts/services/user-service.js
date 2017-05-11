'use strict';

/**
 * @ngdoc service
 * @name pttengApp.UserService
 * @description
 * # UserService
 * Service in the pttengApp.
 */
angular.module('pttengApp')
  .service('UserService', function ($location) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var user={
      loggedIn:false
    };
    user.login=function (username,password) {
      user.loggedIn=true;
       user.name=username;
    }
    user.logout=function () {
      user.loggedIn=false;
      user.name=undefined;
      $location.path('/login');
    }
    return user;
  });
