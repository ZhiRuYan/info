"use strict";angular.module("infoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about.html",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/login.html",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"login"}).when("/register.html",{templateUrl:"views/register.html",controller:"RegisterCtrl",controllerAs:"register"}).when("/layout.html",{templateUrl:"views/layout.html",controller:"LayoutCtrl",controllerAs:"layout"}).otherwise({redirectTo:"/"})}]),angular.module("infoApp").controller("MainCtrl",["$scope","config","dataservice",function(a,b,c){c.testApi().then(function(b){a.test=b.data.testData})}]),angular.module("infoApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("infoApp").service("dataservice",["$http","config",function(a,b){var c=function(a){return b.apiRoot+"api/"+a};this.testApi=function(){return a.post(c("main"))},this.register=function(b){return a.post(c("register"),b)},this.tryLogin=function(b){return a.post(c("tryLogin"),b)}}]),angular.module("infoApp").constant("config",function(){var a="dev",b={dev:{apiRoot:"http://127.0.0.1:3000/"},prod:{apiRoot:""}};return b[a]}()),angular.module("infoApp").controller("LoginCtrl",["$scope","dataservice","$location",function(a,b,c){a.loginInfo={user:"",password:""},a.passCheck=!1,a.loginState="登录",a.wrongInfo="";a.loginInfo;a.tryLogin=function(){$(".loginForm").removeClass("shake zoomInDown"),b.tryLogin(a.loginInfo).then(function(b){a.wrongInfo=b.data.result,"登录成功"==b.data.result?(alert("登录成功"),c.path("layout.html")):(a.passCheck=!0,$(".loginForm").addClass("shake"))})["catch"](function(a){console.log(a)})},a.toRegister=function(){c.path("register.html")}}]),angular.module("infoApp").controller("RegisterCtrl",["$scope","dataservice","$location",function(a,b,c){a.user={username:"",email:"",pass:"",passRepeat:""},a.addUser=function(){$(".sign-up").removeClass("shake zoomInUp"),b.register(a.user).then(function(a){"用户已存在"==a.data.result?(alert("用户已存在"),$(".sign-up").addClass("shake")):"操作成功"==a.data.result?(alert("操作成功"),c.path("login.html")):alert("系统错误")})["catch"](function(a){console.log(a)})},a.toLogin=function(){c.path("login.html")},a.isExist=!1}]),angular.module("infoApp").controller("LayoutCtrl",["$scope","dataservice","$location",function(a,b,c){a.loginOut=function(){}}]),angular.module("infoApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/layout.html",'<section class="layout-main"> <div class="user-info"> <div class="userInfo-basic"> <p class="userInfoBasic-p">欢迎回来 {}</p> </div> <div class="userInfoBasic-button"> <button class="btn btn-primary" ng-click="loginOut()">退出登录</button> </div> </div> <div style="width: 100%;height: 65px"></div> <div class="layout-nav"> <ul class="layoutNav-ul"> <li class="layoutNav-li"> <a href="">个人信息</a> </li> <li class="layoutNav-li"> <a href="">发起采集</a> </li> <li class="layoutNav-li"> <a href="">我已提交</a> </li> <li class="layoutNav-li"> <a href="">我所发起</a> </li> </ul> </div> <div class="layout-content"> 11111111111111111111111111111111 </div> </section>'),a.put("views/login.html",'<section class="login-section"> <form name="loginForm" class="loginForm animated zoomInDown" novalidate> <div class="form-group"> <label for="user">用户名</label> <input type="text" name="user" id="user" class="form-control" ng-model="loginInfo.user" placeholder="请输入您的用户名" required> </div> <div class="form-group"> <label for="password">密码</label> <input type="password" name="password" id="password" class="form-control" ng-model="loginInfo.password" placeholder="请输入您的密码" required> </div> <button type="submit" class="btn btn-primary loginForm-button" ng-click="tryLogin()" ng-disabled="loginForm.$invalid">{{loginState}}</button> <button class="btn btn-success signIn-button" ng-click="toRegister()">注册</button> <span ng-show="passCheck" class="help-block loginForm-warning">{{wrongInfo}}</span> </form> </section>'),a.put("views/main.html",'<section class="html-main"> 首页 <ul> <li><a href="register.html">注册</a></li> <li><a href="login.html">登录</a></li> <li>关于</li> </ul> {{test}} {{con}} </section>'),a.put("views/register.html",'<section class="register-section"> <div class="sign-up animated zoomInUp"> <form name="signUp" novalidate> <div class="form-group" ng-class="{ \'has-error\' : signUp.username.$invalid && !signUp.username.$pristine }"> <label for="username">用户名</label> <input type="text" name="username" id="username" class="form-control" ng-model="user.username" ng-minlength="3" ng-maxlength="15" placeholder="请输入您的用户名" required> <span ng-show="signUp.username.$dirty&&signUp.username.$error.required" class="help-block">*必填</span> <span ng-show="signUp.username.$error.minlength" class="help-block">*用户名太短</span> <span ng-show="signUp.username.$error.maxlength" class="help-block">*用户名太长</span> <span ng-show="signUp.username.isExist" class="help-block">*该用户已存在</span> </div> <div class="form-group" ng-class="{ \'has-error\' : signUp.email.$invalid && !signUp.email.$pristine }"> <label for="email">邮箱</label> <input type="email" name="email" id="email" class="form-control" ng-model="user.email" placeholder="请输入您的邮箱" required> <span ng-show="signUp.email.$dirty&&signUp.email.$error.required" class="help-block">*请输入合法的邮箱</span> </div> <div class="form-group" ng-class="{\'has-error\' : signUp.pass.$invalid && !signUp.pass.$pristine}"> <label for="pass">密码</label> <input type="password" name="pass" id="pass" class="form-control" ng-model="user.pass" placeholder="请设置您的密码" ng-minlength="6" ng-maxlength="20" required> <span ng-show="signUp.pass.$invalid&&signUp.pass.$error.minlength" class="help-block">*密码长度过短</span> <span ng-show="signUp.pass.$invalid&&signUp.pass.$error.maxlength" class="help-block">*密码长度过长</span> </div> <div class="form-group" ng-class="{\'has-error\' : (user.pass!=user.passRepeat) && !signUp.passRepeat.$pristine}"> <label for="pass">再次输入密码</label> <input type="password" name="passRepeat" id="passRepeat" class="form-control" ng-model="user.passRepeat" placeholder="请再输一遍密码" required> <span ng-show="(user.pass!=user.passRepeat)&&!signUp.passRepeat.$pristine" class="help-block">*两次输入密码不一致</span> </div> <button type="submit" class="btn btn-primary signUp-submit" ng-disabled="signUp.$invalid||(user.pass!=user.passRepeat)" ng-click="addUser()">注册</button> <button class="btn btn-success signUp-login" ng-click="toLogin()">登录</button> </form> </div> </section>')}]);