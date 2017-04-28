'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:BienesAddCtrl
 * @description
 * # BienesAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesAddCtrl', function ($scope, $uibModalInstance, BienesService, TiposService, MarcasService) {
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

    $scope.saveBien = function(bien, boton) {
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
        
        BienesService.save(bien, function(data) {
            console.log(data);
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
});