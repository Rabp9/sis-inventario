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
        $scope.message = err.data;
    });
    
    var marcas = MarcasService.get(function () {
        $scope.marcas = marcas.marcas;
        $scope.loading_marcas = 'Selecciona una Marca';
    }, function (err) {
        $scope.loading_marcas = 'Selecciona una Mcarca';
        $scope.message = err.data;
    });
    
    $scope.selectTipo = function(tipo_id) {
        if (tipo_id !== undefined) {
            $scope.datos = [];
            TiposService.get({id: tipo_id}, function(data) {
                $scope.datos = data.tipo.datos;
            });
        }
    };
});