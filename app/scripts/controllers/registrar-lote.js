'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:RegistrarLoteCtrl
 * @description
 * # RegistrarLoteCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('RegistrarLoteCtrl', function ($scope, TiposService, MarcasService, 
    BienesService, $utilsViewService, $uibModal) {
    
    $scope.bienes = [];
    $scope.message = {};
    $scope.loading_tipos = 'Cargando...';
    $scope.loading_marcas = 'Cargando...';
    
    function getTipos() {
        $scope.loading_tipos = 'Cargando...';
        TiposService.get(function(data) {
            $scope.tipos = data.tipos;
            $scope.loading_tipos = 'Selecciona uno';
        });
    }
    
    function getMarcas() {
        $scope.loading_marcas = 'Cargando...';
        MarcasService.get(function(data) {
            $scope.marcas = data.marcas;
            $scope.loading_marcas = 'Selecciona uno';
        });
    }
    
    getTipos();
    getMarcas();
    
    $scope.addBien = function() {
        var bien = {};
        $scope.bienes.push(bien);
    };
    
    $scope.showTiposAdd = function(event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/tipos-add.html',
            controller: 'TiposAddCtrl',
            backdrop: false,
            size: 'sm'
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function (data) {
            getTipos();
            $scope.message = data;
        });
    };
    
    $scope.showMarcasAdd = function(event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/marcas-add.html',
            controller: 'MarcasAddCtrl',
            backdrop: false,
            size: 'sm'
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function (data) {
            getMarcas();
            $scope.message = data;
        });
    };
    
    $scope.removeBien = function(bien) {
        $scope.bienes.splice($scope.bienes.indexOf(bien), 1);
    };
    
    $scope.saveRegistrarLote = function(bienes, marca_id, tipo_id, modelo, boton) {
        $utilsViewService.disable('#' + boton);
        $utilsViewService.setPropertyToAllItemsOfArrayObject(bienes, 'marca_id', marca_id);
        $utilsViewService.setPropertyToAllItemsOfArrayObject(bienes, 'tipo_id', tipo_id);
        $utilsViewService.setPropertyToAllItemsOfArrayObject(bienes, 'modelo', modelo);
        
        var data = BienesService.registrarLote({
            bienes: bienes
        }, function() {
            $scope.message = data;
            $scope.bienes = [];
            $scope.marca_id = '';
            $scope.tipo_id = '';
            $scope.modelo = '';
            $utilsViewService.enable('#' + boton);
        }, function(err) {
            $scope.message = err.data;
        });
    };
});