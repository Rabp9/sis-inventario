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
    'ui.sortable',
    'scrollable-table',
    'angularValidator'
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
    
    var bienesState = {
        name: 'bienes',
        url: '/bienes',
        templateUrl: 'views/bienes.html',
        controller: 'BienesCtrl',
        controllerAs: 'bienes',
        title: 'Bienes'
    };
    
    var registrarLoteState = {
        name: 'registrar-lote',
        url: '/registrarLote',
        templateUrl: 'views/registrar-lote.html',
        controller: 'RegistrarLoteCtrl',
        controllerAs: 'registrarLote',
        title: 'Registrar Lote'
    };
    
    var movimientosState = {
        name: 'movimientos',
        url: '/movimientos',
        templateUrl: 'views/movimientos.html',
        controller: 'MovimientosCtrl',
        controllerAs: 'movimientos',
        title: 'Movimientos'
    };
    
    var busquedaState = {
        name: 'busqueda',
        url: '/busqueda',
        templateUrl: 'views/busqueda.html',
        controller: 'BusquedaCtrl',
        controllerAs: 'busqueda',
        title: 'Búsqueda'
    };
    
    $stateProvider.state(mainState);
    $stateProvider.state(credencialesState);
    $stateProvider.state(marcasState);
    $stateProvider.state(tiposState);
    $stateProvider.state(bienesState);
    $stateProvider.state(registrarLoteState);
    $stateProvider.state(movimientosState);
    $stateProvider.state(busquedaState);
    $urlRouterProvider.when('', '/');
})
.path_location = 'http://localhost:8000/sis-inventario-backend/';