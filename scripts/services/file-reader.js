'use strict';

/**
 * @ngdoc service
 * @name pttengApp.fileReader
 * @description
 * # fileReader
 * Service in the pttengApp.
 */
angular.module('pttengApp')
  .service('fileReader', function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var onLoad=function (reader,deferred,scope) {
      return function () {
        scope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };
    var onError=function (reader,deferred,scope) {
      return function () {
        scope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };

    var getReader=function (deferred,scope) {
      var reader=new FileReader();
      reader.onload=onLoad(reader,deferred,scope);
      reader.onerror=onError(reader,deferred,scope);
      return reader;
    }

    var readAsDataURL=function (file,scope) {
      var deferred=$q.defer();
      var reader=getReader(deferred,scope);
      reader.readAsDataURL(file);
      return deferred.promise;
    };

    return{
      readAsDataUrl:readAsDataURL
    };
  });
