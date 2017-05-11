'use strict';

/**
 * @ngdoc function
 * @name pttengApp.controller:ArticlelistCtrl
 * @description
 * # ArticlelistCtrl
 * Controller of the pttengApp
 */
angular.module('pttengApp')
  .controller('ArticlelistCtrl', function ($scope,$location,ArticleService,NgTableParams) {

    var self=this;
    $scope.articles=ArticleService.query();

    self.tableParams=new NgTableParams({ count: 5},{counts: [5, 10, 20],dataset:$scope.articles});
    self.selectedPageSizes=self.tableParams.settings().counts;
    self.availablePageSizes = [5, 10, 15, 20, 25, 30, 40, 50, 100];
    self.changePage = changePage;

    function changePage(nextPage){
      self.tableParams.page(nextPage);
    }
    function changePageSize(newSize){
      self.tableParams.count(newSize);
    }
    function changePageSizes(newSizes){
      // ensure that the current page size is one of the options
      if (newSizes.indexOf(self.tableParams.count()) === -1) {
        newSizes.push(self.tableParams.count());
        newSizes.sort();
      }
      self.tableParams.settings({ counts: newSizes});
    }
    $scope.showAddarticle=function () {
      $location.path('/addarticle');
    };

   // $http({
   //   url:'/carrots-admin-ajax/a/login',
   //   method:"GET",
   //   headers:{'Content-Type':'application/x-www.form-urlencoded'}
   // });


// $http.get('http://dev.admin.carrots.ptteng.com/carrots-admin-ajax/get/a/article').success(function (data) {
//
//   }).error(function (data) {
//
// });


    // for (var i = 0; i < $scope.articles.length; ++i) {
    //   $scope.articles[i].templateUrl =
    //     'views/templates/article-table.html';
    // };

  });
