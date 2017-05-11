'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:BusquedaCtrl
 * @description
 * # BusquedaCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BusquedaCtrl', function ($scope, TiposService, MarcasService) {
    $scope.maxSize = 10;    
    $scope.loading_tipos = 'Cargando...';
    $scope.loading_marcas = 'Cargando...';
    $scope.message = {};
    
    var tipos = TiposService.get(function () {
        $scope.tipos = tipos.tipos;
        $scope.loading_tipos = 'Selecciona un Tipo';
    }, function (err) {
        $scope.loading_tipos = 'Selecciona un Tipo';
    });
    
    var marcas = MarcasService.get(function () {
        $scope.marcas = marcas.marcas;
        $scope.loading_marcas = 'Selecciona una Marca';
    }, function (err) {
        $scope.loading_marcas = 'Selecciona una Mcarca';
    });
    
});