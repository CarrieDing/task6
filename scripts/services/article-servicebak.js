'use strict';

/**
 * @ngdoc service
 * @name pttengApp.ArticleService
 * @description
 * # ArticleService
 * Service in the pttengApp.
 */
angular.module('pttengApp')
  .service('ArticleService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var articles = [
      {
        "id": "1",
        "name": "行业动态",
        "type": "行业",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
      {
        "id": "2",
        "name": "JSON",
        "type": "语法",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
      {
        "id": "3",
        "name": "JQuery",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "4",
        "name": "test",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "5",
        "name": "test0",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      }
	  ,
	   {
        "id": "6",
        "name": "test9",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "7",
        "name": "test8",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "8",
        "name": "test7",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "9",
        "name": "test6",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "10",
        "name": "test5",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "11",
        "name": "test4",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "12",
        "name": "test3",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "13",
        "name": "test2",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      },
	   {
        "id": "14",
        "name": "test1",
        "type": "招聘性能工程师",
        "createtime": "2017-05-06",
        "lastmodifiedtime": "2017-05-06",
        "createuser": "admin",
        "status": "0",
        "operation": "delete"
      }
    ];

    return {
      getAll: function () {
        return articles;
      },
      getById: function () {
        for (var i = 0; i < articles.length; i++) {
          if (articles[i].id === id) {
            return articles[i];
          }
        }
        return null;
      }
    };

  });
