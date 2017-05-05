'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:RegistrarLoteCtrl
 * @description
 * # RegistrarLoteCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('RegistrarLoteCtrl', function ($scope, TiposService, MarcasService) {
    $scope.bienes = [];
    
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
    
    $scope.selectTipo = function(tipo_id) {
        if (tipo_id !== undefined) {
            TiposService.get({id: tipo_id}, function(data) {
                
            });
        }
    };
});