"use strict";angular.module("pttengApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","mgcrea.ngStrap","ngTable","angularFileUpload"]).config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode({enabled:!0,requireBase:!1}),a.when("/articlelist",{templateUrl:"views/articlelist.html",controller:"ArticlelistCtrl",controllerAs:"articlelist"}).when("/addarticle",{templateUrl:"views/addarticle.html",controller:"AddarticleCtrl",controllerAs:"addarticle"}).when("/welcomepage",{templateUrl:"views/welcomepage.html",controller:"WelcomepageCtrl",controllerAs:"welcomepage"}).when("/dashboard",{templateUrl:"views/dashboard.html",controller:"DashboardCtrl",controllerAs:"dashboard"}).when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"login"}).otherwise({redirectTo:"/login"})}]),angular.module("pttengApp").directive("tsk6ArticlePanel",["$location","$routeParams","ArticleService",function(a,b,c){return{templateUrl:"views/templates/article-panel.html",restrict:"E",scope:{},link:function(b){b.showAddarticle=function(){a.path("/addarticle")}}}}]),angular.module("pttengApp").controller("ArticlelistCtrl",["$scope","$location","ArticleService","NgTableParams",function(a,b,c,d){function e(a){f.tableParams.page(a)}var f=this;a.articles=c.query(),f.tableParams=new d({count:5},{counts:[5,10,20],dataset:a.articles}),f.selectedPageSizes=f.tableParams.settings().counts,f.availablePageSizes=[5,10,15,20,25,30,40,50,100],f.changePage=e,a.showAddarticle=function(){b.path("/addarticle")}}]),angular.module("pttengApp").controller("AddarticleCtrl",["$scope","$location","fileReader","ArticleService","$http","FileUploader",function(a,b,c,d,e,f){function g(a){if(a>=1024)var b=(a-a%1024)/1024,c=b+"KB";else c=a+"Byte";return c}a.uploadImages={},a.addArticle2panel=function(){b.path("/articlelist")},a.back2Panel=function(){b.path("/articlelist")},a.myForm=function(a){a||alert("验证失败")},a.getFile=function(){c.readAsDataUrl(a.myFile,a).then(function(b){a.imageSrc=b,a.uploadImages.imageName=a.myFile.name,a.uploadImages.imageSize=g(a.myFile.size)})};var h=a.uploader=new f;h.url="/carrots-admin-ajax/a/u/img/task",h.queue=[],h.onWhenAddingFileFailed=function(a,b,c){console.info("onWhenAddingFileFailed",a,b,c)},h.onAfterAddingFile=function(a){console.info("onAfterAddingFile",a)},h.onAfterAddingAll=function(a){console.info("onAfterAddingAll",a)},h.onBeforeUploadItem=function(a){console.info("onBeforeUploadItem",a)},h.onProgressItem=function(a,b){console.info("onProgressItem",a,b)},h.onProgressAll=function(a){console.info("onProgressAll",a)},h.onSuccessItem=function(a,b,c,d){console.info("onSuccessItem",b.data.url)},h.onErrorItem=function(a,b,c,d){console.info("onErrorItem",a,b,c,d)},h.onCancelItem=function(a,b,c,d){console.info("onCancelItem",a,b,c,d)},h.onCompleteItem=function(a,b,c,d){console.info("onCompleteItem",a,b,c,d)},h.onCompleteAll=function(){console.info("onCompleteAll")},a.uploadImage=function(){}}]),angular.module("pttengApp").controller("WelcomepageCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("pttengApp").directive("tsk6ArticleTable",function(){return{templateUrl:"views/templates/article-table.html",restrict:"E",link:function(a){}}}),angular.module("pttengApp").directive("tsk6ArticleRow",function(){return{restrict:"A",require:"^stkArticleTable",scope:{article:"="},link:function(a,b){b.addRow(a)}}}),angular.module("pttengApp").service("ArticleService",function(){var a=function(){var a={articles:localStorage["Ptteng.articles"]?JSON.parse(localStorage["Ptteng.articles"]):[],nextId:localStorage["Ptteng.nextId"]?parseInt(localStorage["Ptteng.nextId"]):0};return a},b=function(){localStorage["Ptteng.articles"]=JSON.stringify(d.articles),localStorage["Ptteng.nextId"]=d.nextId},c=function(a){return _.find(d.articles,function(b){return b.id===parseInt(a)})};this.query=function(a){return a?c(a):d.articles},this.save=function(a){a.id=d.nextId++,d.articles.push(a),b()};var d=a()}),angular.module("pttengApp").controller("LoginCtrl",["$scope","$http","$location","UserService",function(a,b,c,d){a.login=function(){b({method:"POST",params:{name:a.username,pwd:a.password},url:"/carrots-admin-ajax/a/login"}).then(function(b){return a.tempObject=b,console.log("Temp Object in successCallback ",a.tempObject),"success"===a.tempObject.data.message&&(d.login(a.username,a.password),c.path("/dashboard")),a.tempObject})}}]),angular.module("pttengApp").directive("fileModel",["$parse",function(a){return{restrict:"A",link:function(b,c,d){var e=a(d.fileModel),f=e.assign;c.bind("change",function(a){b.$apply(function(){f(b,c[0].files[0])}),b.getFile()})}}}]),angular.module("pttengApp").service("fileReader",["$q",function(a){var b=function(a,b,c){return function(){c.$apply(function(){b.resolve(a.result)})}},c=function(a,b,c){return function(){c.$apply(function(){b.reject(a.result)})}},d=function(a,d){var e=new FileReader;return e.onload=b(e,a,d),e.onerror=c(e,a,d),e},e=function(b,c){var e=a.defer(),f=d(e,c);return f.readAsDataURL(b),e.promise};return{readAsDataUrl:e}}]),angular.module("pttengApp").service("ArticleTableService",function(){}),angular.module("pttengApp").controller("DashboardCtrl",["$scope","$location","UserService",function(a,b,c){a.user=c,a.$watch(function(){return b.path()},function(b){_.includes(b,"articlelist")?a.activeView="articlelist":a.activeView="dashboard"})}]),angular.module("pttengApp").controller("MainCtrl",["$scope","$location",function(a,b){a.$watch(function(){return b.path()},function(b){_.includes(b,"articlelist")?a.activeView="articlelist":a.activeView="dashboard"})}]),angular.module("pttengApp").directive("tsk6DashboardPanel",["$scope",function(a){return{templateUrl:"views/templates/dashboard.html",restrict:"E",scope:{},link:function(a){}}}]),angular.module("pttengApp").service("UserService",["$location",function(a){var b={loggedIn:!1};return b.login=function(a,c){b.loggedIn=!0,b.name=a},b.logout=function(){b.loggedIn=!1,b.name=void 0,a.path("/login")},b}]),angular.module("pttengApp").run(["$templateCache",function(a){a.put("views/addarticle.html",'<nav class="navbar ng-isolate-scope" role="navigation" ng-cloak ng-controller="DashboardCtrl"> <div class="container-fluid"> <div class="collapse navbar-collapse"> <div class="nav navbar-nav navbar-right"> <div> <h3 style="float: left">{{user.name}}</h3> <input type="button" ng-click="user.logout()" value="Log Out" style="float:left;margin: 1.5rem 1rem;background-color: #03a9f4"> </div> </div> </div> </div> </nav> <nav class="navbar" style="float:left;width:240px"> <div class="container-fluid" id="main-nav"> <div class=""> <ul class="nav nav-list"> <li class="nav-header">后台管理系统</li> <li ng-class="{active: activeView===\'dashboard\'}"><a href="/dashboard">列表管理</a> <ul ng-class="{active: activeView===\'articlelist\'}"> <a href="/articlelist">Article列表</a> </ul> </li> <li><a href="#">内容管理</a></li> </ul> </div> </div> </nav> <div style="float:left;width: 80%"> <div class="panel panel-info"> <div class="panel-heading"> 新增Article </div> <div class="panel-body" ng-controller="AddarticleCtrl"> <form role="form" name="myForm" id="myForm" ng-model="myForm" novalidate class="form-horizontal" enctype="multipart/form-data"><!--novalidate用于取消浏览器的默认验证--> <div class="form-group"> <label class="col-sm-2 control-label">标题名称</label> <div class="col-sm-10"> <input type="text" name="name" id="articlename" class="form-control" placeholder="请输入标题名称" required ng-model="article.name"> <span class="glyphicon glyphicon-ok form-control-feedback" ng-show="myForm.name.$valid"></span> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">类型</label> <div class="col-sm-10"> <select class="form-control" name="type" id="articletype" required> <option value="test" disabled selected>请务必选择一个</option> <option>首页</option> <option>找职位</option> <option>找精英</option> <option>行业大图</option> </select> <!--<span class="glyphicon glyphicon-ok form-control-feedback" ng-show="myForm.type.$valid"></span>--> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">说明</label> <div class="col-sm-10"> <input type="text" class="form-control" id="articledes" name="description" placeholder="" required ng-model="article.description"> <span class="glyphicon glyphicon-ok form-control-feedback" ng-show="myForm.description.$valid"></span> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">跳转链接</label> <div class="col-sm-10"> <input type="url" class="form-control" name="gotoLink" id="articlelink" placeholder="请输入URL" required ng-model="article.gotoLink"> <span class="glyphicon glyphicon-ok form-control-feedback" ng-show="myForm.gotoLink.$valid"></span> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">配图</label> <div class="col-sm-10"> <input type="file" file-model="myFile" nv-file-select uploader="uploader"> </div> <div class="col-sm-2"> <img alt="配图预览" ng-src="{{imageSrc}}" style="max-width:300px;max-height: 300px;margin:  0 auto;display: block" class="img-responsive"> </div> <div class="col-md-11"> <label class="col-sm-2 control-label"></label> <div class="table-responsive col-md-8 padding-0"> <table class="table"> <thead> <tr><th>图片名</th> <th>文件大小</th> <th>进度</th> <th>操作</th> <th>操作</th> </tr></thead> <tbody> <tr ng-repeat="item in uploader.queue"> <td>{{uploadImages.imageName}}</td> <td>{{uploadImages.imageSize}}</td> <td></td> <td nowrap> <button type="button" class="btn btn-success btn-xs" ng-click="item.upload()" ng-disabled="item.isReady || item.isUploading || item.isSuccess"> <span class="glyphicon glyphicon-upload"></span> Upload </button> <button type="button" class="btn btn-warning btn-xs" ng-click="item.cancel()" ng-disabled="!item.isUploading"> <span class="glyphicon glyphicon-ban-circle"></span> Cancel </button> <button type="button" class="btn btn-danger btn-xs" ng-click="item.remove()"> <span class="glyphicon glyphicon-trash"></span> Remove </button> </td> </tr> </tbody> </table> </div> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <button type="submit" class="btn btn-success" ng-disabled="myForm.$invalid" ng-click="addArticle2panel()">立即上线</button> <button type="submit" class="btn btn-success" ng-disabled="myForm.$invalid">存为草稿</button> <button type="submit" class="btn btn-default pull-right" ng-disabled="myForm.$valid" ng-click="back2Panel()">取消</button> </div> </div> </form> </div> </div> </div>'),a.put("views/articlelist.html",'<nav class="navbar ng-isolate-scope" role="navigation" ng-cloak ng-controller="DashboardCtrl"> <div class="container-fluid"> <div class="collapse navbar-collapse"> <div class="nav navbar-nav navbar-right"> <div> <h3 style="float: left">{{user.name}}</h3> <input type="button" ng-click="user.logout()" value="Log Out" style="float:left;margin: 1.5rem 1rem;background-color: #03a9f4"> </div> </div> </div> </div> </nav> <nav class="navbar" style="float:left;width:240px"> <div class="container-fluid" id="main-nav"> <div class=""> <ul class="nav nav-list"> <li class="nav-header">后台管理系统</li> <li ng-class="{active: activeView===\'dashboard\'}"><a href="/dashboard">列表管理</a> <ul ng-class="{active: activeView===\'articlelist\'}"> <a href="/articlelist">Article列表</a> </ul> </li> <li><a href="#">内容管理</a></li> </ul> </div> </div> </nav> <div style="float:left;width: 80%"> <div class="panel panel-info"> <div class="panel-body"> <form name="datepickerForm" class="form-inline" role="form"> <!-- Date range example --> <div class="col-md-8"> <div class="form-group"> <label class="">发布时间 </label><br> <div class="form-group col-xs-6"> <input type="text" class="form-control" ng-model="fromDate" data-max-date="{{untilDate}}" placeholder="From" bs-datepicker> </div> <div class="form-group col-xs-6"> <input type="text" class="form-control" ng-model="untilDate" data-min-date="{{fromDate}}" placeholder="Until" bs-datepicker> </div> </div> </div> </form> <div class="col-sm-2"> <div class="form-group">类型 <select class="form-control" name="type"> <option>全部</option> <option selected>首页</option> <option>找职位</option> <option>找精英</option> <option>行业大图</option> </select> </div> </div> <div class="col-sm-2"> <div class="form-group">状态 <select class="form-control" name="type"> <option>全部</option> <option selected>上线</option> <option>草稿</option> </select> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <button type="submit" class="btn btn-danger pull-right">清空</button> <button type="submit" class="btn btn-success pull-right">搜索</button> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <div class="panel panel-info"> <div class="panel-heading"> Article列表 <button type="button" class="btn btn-success btn-xs pull-right" ng-click="showAddarticle()">+新增</button> </div> <!--<tsk6-article-table ng-show="articles.length"></tsk6-article-table>--> <div class="row"> <div class="col-xs-12"> <table ng-table="articlelist.tableParams" show-filter="true" class="table table-hover"> <thead> <tr> <td>ID</td> <td>名称</td> <td>类型</td> <td>发布时间</td> <td>修改时间</td> <td>发布者</td> <td>状态</td> <td>操作 </td> </tr> </thead> <!--<tbody ng-repeat="article in articles">--> <tr ng-repeat="article in $data track by $index" style="align-data: center"> <td style="width:70px">{{article.id}}</td> <td style="width:130px">{{article.name}}</td> <td style="width:150px">{{article.type}}</td> <td style="width:150px">{{article.createtime}}</td> <td style="width:150px">{{article.lastmodifiedtime}}</td> <td style="width:150px">{{article.createuser}}</td> <td style="width:150px">{{article.status}}</td> <td style="width:150px"> <a class="remove" title="remove">下线</a> <a class="remove" title="remove">编辑</a> <a class="remove" title="remove">删除</a> </td> </tr> <!--</tbody>--> </table> </div> </div> <!--<div>--> <!--<div ng-repeat="article in articles" ng-include="article.templateUrl"></div>--> <!--</div>--> </div> </div> </div> </div>'),a.put("views/dashboard.html",'<nav class="navbar" role="navigation" ng-cloak ng-controller="DashboardCtrl"> <div class="container-fluid"> <div class="collapse navbar-collapse"> <div class="nav navbar-nav navbar-right"> <div> <h3 style="float: left">{{user.name}}</h3> <input type="button" ng-click="user.logout()" value="Log Out" style="float:left;margin: 1.5rem 1rem;background-color: #03a9f4"> </div> </div> </div> </div> </nav> <nav class="navbar" style="float:left;width:240px"> <div class="container-fluid" id="main-nav"> <div class=""> <ul class="nav nav-list"> <li class="nav-header">后台管理系统</li> <li ng-class="{active: activeView===\'dashboard\'}"><a href="/dashboard">列表管理</a> <ul ng-class="{active: activeView===\'articlelist\'}"> <a href="/articlelist">Article列表</a> </ul> </li> <li><a href="#">内容管理</a></li> </ul> </div> </div> </nav>'),a.put("views/login.html",'<div class="wrap" ng-controller="LoginCtrl"> <fieldset id="login"> <legend>后台登录系统</legend> <form> <p> <label>用户名 <input name="name" ng-model="username" class="name" type="text" id="name" value="" autofocus> </label> </p> <p> <label>密&#12288;码 <input name="password" ng-model="password" class="password" type="password" id="password" value=""> </label> </p> <p id="warning" class="warning"></p> <p> <input type="button" ng-click="login()" id="submitBtn" class="button" value="登录"> </p> </form> </fieldset> </div>'),a.put("views/templates/add-article.html",'<div class="panel panel-info"> <div class="panel-heading"> 新增Article </div> <div class="panel-body"> <form role="form" class="form-horizontal"> <div class="form-group"> <label class="col-sm-2 control-label">标题名称</label> <div class="col-sm-10"> <input type="text" class="form-control" placeholder="请输入标题名称"> </div> </div> <div class="form-group"> <label for="name" class="col-sm-2 control-label">类型</label> <div class="col-sm-10"> <select class="form-control"> <option>请选择</option> <option>首页</option> <option>找职位</option> <option>找精英</option> <option>行业大图</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">说明</label> <div class="col-sm-10"> <input type="text" class="form-control" placeholder=""> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label">跳转链接</label> <div class="col-sm-10"> <input type="text" class="form-control" placeholder=""> </div> </div> <div class="form-group"> <label for="inputfile" class="col-sm-2 control-label">配图</label> <div class="col-sm-10"> <button type="button" class="btn btn-primary">选择图片</button> <p class="help-block"></p> </div> <label for="inputfile" class="col-sm-2 control-label"></label> <div class="col-md-10"> <img alt="配图预览" class="img-responsive"> </div> <label for="inputfile" class="col-sm-2 control-label"></label> <div class="col-md-10"> <div class="table-responsive col-md-8 padding-0"> <table class="table"> <thead> <tr><th>图片名</th> <th>文件大小</th> <th>进度</th> <th>操作</th> <th>操作</th> </tr></thead> <tbody> <!-- ngRepeat: item in vm.uploader1.queue track by $index --> </tbody> </table> </div> </div> </div> <div class="form-group"> <div class="col-sm-offset-2 col-sm-10"> <button type="submit" class="btn btn-success" disabled>立即上线</button> <button type="submit" class="btn btn-success" disabled>存为草稿</button> <button type="submit" class="btn btn-default pull-right">取消</button> </div> </div> </form> </div> </div>'),a.put("views/templates/article-panel.html",'<div class="row"> <div class="col-md-3"> <div class="panel panel-info"> <div class="panel-heading"> <a>Article列表</a> </div> </div> </div> <div class="col-md-9"> <div class="panel panel-info"> <div class="panel-heading"> Article列表 <button type="button" class="btn btn-success btn-xs pull-right" ng-click="showAddarticle()">+新增</button> </div> <table class="table"> <thead> <tr> <td>ID</td> <td>名称</td> <td>类型</td> <td>发布时间</td> <td>修改时间</td> <td>发布者</td> <td>状态</td> <td>操作</td> </tr> </thead> </table> </div> </div> </div>'),a.put("views/templates/article-table.html",'<!--<table>--><!--<thead>--><!--<tr>--><!--<td>ID</td>--><!--<td>名称</td>--><!--<td>类型</td>--><!--<td>发布时间</td>--><!--<td>修改时间</td>--><!--<td>发布者</td>--><!--<td>状态</td>--><!--<td>操作</td>--><!--</tr>--><!--</thead>--><!--<tbody>--> <tr style="align-data: center"> <td style="width:70px">{{article.id}}</td> <td style="width:130px">{{article.name}}</td> <td style="width:150px">{{article.type}}</td> <td style="width:150px">{{article.createtime}}</td> <td style="width:150px">{{article.lastmodifiedtime}}</td> <td style="width:150px">{{article.createuser}}</td> <td style="width:150px">{{article.status}}</td> <td style="width:150px">{{article.operation}}</td> </tr> <!--</tbody>--> <!--</table>-->'),a.put("views/templates/dashboard.html",'<nav class="navbar ng-isolate-scope" role="navigation" ng-cloak ng-controller="DashboardCtrl"> <div class="container-fluid"> <div class="collapse navbar-collapse"> <div class="nav navbar-nav navbar-right"> <div> <h3 style="float: left">{{user.name}}</h3> <input type="button" ng-click="user.logout()" value="Log Out" style="float:left;margin: 1.5rem 1rem;background-color: #03a9f4"> </div> </div> </div> </div> </nav> <nav class="navbar" style="float:left;width:240px"> <div class="container-fluid" id="main-nav"> <div class=""> <ul class="nav nav-list"> <li class="nav-header">后台管理系统</li> <li ng-class="{active: activeView===\'welcomepage\'}"><a href="/welcomepage">列表管理</a> <ul ng-class="{active: activeView===\'articlelist\'}"> <a href="/articlelist">Article列表</a> </ul> </li> <li><a href="#">内容管理</a></li> </ul> </div> </div> </nav>'),a.put("views/test.html",'<table ng-table="articlelist.tableParams" show-filter="true" class="table table-hover"> <tr ng-repeat="article in $data"> <td>{{article.id}}</td> <td>{{article.name}}</td> <td>{{article.type}}</td> <td>{{article.createtime}}</td> <td>{{article.lastmodifiedtime}}</td> </tr> </table>'),a.put("views/welcomepage.html","<h3>Welcome</h3>")}]);