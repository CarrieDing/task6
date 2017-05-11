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
    var loadArticle =function () {
      var article={
        articles:localStorage['Ptteng.articles']?JSON.parse(localStorage['Ptteng.articles']):[],
        nextId:localStorage['Ptteng.nextId']?parseInt(localStorage['Ptteng.nextId']):0
      };
      return article;
    } ;

    var saveArticle=function () {
      localStorage['Ptteng.articles']=JSON.stringify(Article.articles);
      localStorage['Ptteng.nextId']=Article.nextId;
    }


    var findById=function (listId) {
      return _.find(Article.articles,function (article) {
        return article.id===parseInt(listId);
      });
    };

    this.query=function (listId) {
      if(listId){
        return findById(listId);
      }else{
        return Article.articles;
      }
    }

    this.save=function (article) {
      article.id=Article.nextId++;
      Article.articles.push(article);
      saveArticle();
    };



    var Article=loadArticle();
  });
