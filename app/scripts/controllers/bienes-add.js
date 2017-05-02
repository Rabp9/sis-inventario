'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:BienesAddCtrl
 * @description
 * # BienesAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesAddCtrl', function ($scope, $uibModalInstance, $uibModal, BienesService, TiposService, MarcasService) {
    $scope.bien = {};
    $scope.bien.bien_datos = [];
    
    TiposService.get(function(data) {
        $scope.tipos = data.tipos;
    });
    
    MarcasService.get(function(data) {
        $scope.marcas = data.marcas;
    });
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    
    $scope.selectTipo = function(tipo_selected) {
        if (tipo_selected !== undefined) {
            $scope.bien.bien_datos = [];
            $scope.bien.tipo_id = tipo_selected.id;
            angular.forEach(tipo_selected.datos, function(value, key) {
                $scope.bien.bien_datos.push({
                    dato: value,
                    dato_id: value.id
                });
            });
        }
    };

    $scope.showTiposAdd = function(event) {
        $(event.currentTarget).addClass('disabled');
        $(event.currentTarget).prop('disabled', true);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/tipos-add.html',
            controller: 'TiposAddCtrl',
            backdrop: false,
            size: 'sm'
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.tipos.push(data.tipo);
            $scope.tipo_selected = data.tipo;
            $scope.selectTipo(data.tipo);
        });        
        
        $(event.currentTarget).removeClass('disabled');
        $(event.currentTarget).prop('disabled', false);
    };
    
    $scope.showMarcasAdd = function(event) {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/marcas-add.html',
            controller: 'MarcasAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.marcas.push(data.marca);
            $scope.message = data.message;
        });
    };
    
    $scope.saveBien = function(bien, boton) {
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);

        BienesService.save(bien, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
});