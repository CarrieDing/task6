'use strict';

/**
 * @ngdoc function
 * @name pttengApp.controller:AddarticleCtrl
 * @description
 * # AddarticleCtrl
 * Controller of the pttengApp
 */
angular.module('pttengApp')
  .controller('AddarticleCtrl', function ($scope,$location,fileReader,ArticleService,$http,FileUploader) {

$scope.uploadImages={};


    // $scope.addArticle2panel=function () {
    //   $scope.article.status="上线";
    //   $scope.article.publisher=$scope.username;
    //   ArticleService.save($scope.article);
    //   $scope.article={};
    //   $location.path('/articlelist');
    // }
    $scope.addArticle2panel=function () {
      //save httpPromise for chaining
      // var httpPromise = $http({
      //   method: 'POST',
      //   params:{title:'test',type:'行业大图',status:'using',img:'http://carrots.ks3-cn-beijing.ksyun.com/3/4df226f2-65fb-4910-9320-2fb39bc8bc92.jpg',url:'http://baidu.com'},
      //   url: '/carrots-admin-ajax/a/u/article'
      // }).then(function onFulfilledHandler(response) {
      //   $scope.tempObject = response
      //   console.log("Temp Object in successCallback ", $scope.tempObject);
      //   if($scope.tempObject.data.message==="success")
      //   {
      //     // UserService.login($scope.username,$scope.password);
      //     // $location.path('/dashboard');
      //   }
      //
      //   //return object for chaining
      //   return $scope.tempObject;
      // });

      $location.path('/articlelist');
    }


    $scope.back2Panel=function () {
      $location.path('/articlelist');
    }
$scope.myForm=function (isValid) {
  if(!isValid){
    alert('验证失败');
  }
};


    $scope.getFile= function () {
      fileReader.readAsDataUrl($scope.myFile,$scope)
        .then(function (result) {
          $scope.imageSrc=result;
          $scope.uploadImages.imageName=$scope.myFile.name;
          $scope.uploadImages.imageSize=changeFileSize($scope.myFile.size);
        });
      };
    var uploader=$scope.uploader=new FileUploader();
    uploader.url='/carrots-admin-ajax/a/u/img/task';
    uploader.queue=[];
    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
      console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
      console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
      console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      // alert(response)
      console.info('onSuccessItem', response.data.url);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
      console.info('onCompleteAll');
    };
    $scope.uploadImage=function () {


      // var form=document.forms.namedItem('myForm');
      // var fd=new FormData();
      // fd.append('d',$('input[type=file]')[0].files[0]);
// var tmp=$('input[type=file]')[0].files[0];
//       fd.append('myFile',tmp);
      // fd.append('filesize','3028');
      // var httpPromise1 = $http({
      //   method: 'POST',
      //   url: '/carrots-admin-ajax/a/u/img/task',
      //   params:{file:fd},
      //   // data:fd,
      //   headers:{'Content-Type': undefined},
      //   transformRequest: angular.identity
      // }).then(function onFulfilledHandler(response) {
      //   $scope.tempObject = response
      //   console.log("Temp Object in successCallback ", $scope.tempObject);
      //   if($scope.tempObject.data.message==="success")
      //   {
      //     alert("ok")
      //   }
      //
      //   //return object for chaining
      //   return $scope.tempObject;
      // });
      //

    }

    function changeFileSize(file_size) {
      if(file_size>=1024){
        var k=(file_size-file_size%1024)/1024;
        var show_size=k + "KB";
      }else{
        show_size=file_size+"Byte";
      }
      return show_size;
    }
  });
