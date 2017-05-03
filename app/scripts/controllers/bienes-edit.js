'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:BienesEditCtrl
 * @description
 * # BienesEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesEditCtrl', function ($scope, bien, $uibModalInstance, BienesService, TiposService, MarcasService) {
    BienesService.get({id: bien.id}, function(data) {
        $scope.bien = data.bien;
        TiposService.get({id: bien.tipo_id}, function(data) {
            var tipo = data.tipo;
            angular.forEach(tipo.datos, function (dato, k_dato) {
                var asignado = false;
                angular.forEach($scope.bien.bien_datos, function (bien_dato, k_bien_dato) {
                    if (dato.id === bien_dato.dato_id) {
                        asignado = true;
                    }
                });
                if (!asignado) {
                    $scope.bien.bien_datos.push({
                        dato: dato,
                        dato_id: dato.id
                    });
                }
            });
        });
    });
    
    TiposService.get(function(data) {
        $scope.tipos = data.tipos;
    });
    
    MarcasService.get(function(data) {
        $scope.marcas = data.marcas;
    });
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.selectTipo = function(tipo_id) {
        if (tipo_id !== undefined) {
            $scope.bien.bien_datos = [];
            TiposService.get({id: tipo_id}, function(data) {
                var tipo = data.tipo;
                
                angular.forEach(tipo.datos, function(value, key) {
                    $scope.bien.bien_datos.push({
                        dato: value,
                        dato_id: value.id
                    });
                });
            });
        }
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