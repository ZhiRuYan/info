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
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider,$locationProvider) {

    //启用html5路由模式
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

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
        url: '/layout.html',
        templateUrl: 'views/layout.html',
        controller: 'LayoutCtrl'
      })











  }]);
