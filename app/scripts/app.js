'use strict';

/**
 * @ngdoc overview
 * @name infoApp
 * @description
 * # infoApp
 *
 * Main module of the application.
 */
// angular
//   .module('infoApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//
//     //启用html5路由模式
//     $locationProvider.html5Mode(true);
//
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/about.html', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl',
//         controllerAs: 'about'
//       })
//       .when('/login.html', {
//         templateUrl: 'views/login.html',
//         controller: 'LoginCtrl',
//         controllerAs: 'login'
//       })
//       .when('/register.html', {
//         templateUrl: 'views/register.html',
//         controller: 'RegisterCtrl',
//         controllerAs: 'register'
//       })
//       .when('/layout.html', {
//         templateUrl: 'views/layout.html',
//         controller: 'LayoutCtrl',
//         controllerAs: 'layout'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   }]);


angular
  .module('infoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    //解决session跨域
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.defaults.withCredentials = true;

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about.html',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('login', {
        url: '/login.html',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register.html',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .state('layout', {
        url: '/layout',
        templateUrl: 'views/layout.html',
        controller: 'LayoutCtrl'
      })
      .state('layout.myinfo', {
        url: '/myinfo.html',
        templateUrl: 'views/myinfo.html',
        controller: 'MyinfoCtrl'
      })
      .state('layout.maintain', {
        url: '/maintain.html',
        templateUrl: 'views/maintain.html',
        controller: 'MaintainCtrl'
      })
      .state('layout.tasklist', {
        url: '/tasklist.html',
        templateUrl: 'views/tasklist.html',
        controller: 'TasklistCtrl'
      })
    $urlRouterProvider.otherwise('/');
    //启用html5路由模式
    // $locationProvider.html5Mode(true);


  }]);
