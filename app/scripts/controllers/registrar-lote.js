'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:RegistrarLoteCtrl
 * @description
 * # RegistrarLoteCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('RegistrarLoteCtrl', function ($scope, TiposService, MarcasService, BienesService, $utilsViewService) {
    $scope.bienes = [];
    $scope.message = {};
    
    TiposService.get(function(data) {
        $scope.tipos = data.tipos;
    });
    
    MarcasService.get(function(data) {
        $scope.marcas = data.marcas;
    });
    
    $scope.addBien = function() {
        var bien = {};
        $scope.bienes.push(bien);
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
            $scope.marca_id = "";
            $scope.tipo_id = "";
            $scope.modelo = "";
            $utilsViewService.enable('#' + boton);
        }, function(err) {
            $scope.message = data;
        });
    };
});