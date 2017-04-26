'use strict';

/**
 * @ngdoc overview
 * @name sisInventarioApp
 * @description
 * # sisInventarioApp
 *
 * Main module of the application.
 */
angular
.module('sisInventarioFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ui.sortable'
])
.config(function($stateProvider, $urlRouterProvider) {
    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        title: 'Inicio'
    };
    
    var credencialesState = {
        name: 'credenciales',
        url: '/credenciales',
        templateUrl: 'views/credenciales.html',
        controller: 'CredencialesCtrl',
        controllerAs: 'credenciales',
        title: 'Credenciales'
    };
    
    var marcasState = {
        name: 'marcas',
        url: '/marcas',
        templateUrl: 'views/marcas.html',
        controller: 'MarcasCtrl',
        controllerAs: 'marcas',
        title: 'Marcas'
    };
    
    var tiposState = {
        name: 'tipos',
        url: '/tipos',
        templateUrl: 'views/tipos.html',
        controller: 'TiposCtrl',
        controllerAs: 'tipos',
        title: 'Tipos'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(credencialesState);
    $stateProvider.state(marcasState);
    $stateProvider.state(tiposState);
})
.path_location = 'http://localhost:8000/sis-inventario-backend/';