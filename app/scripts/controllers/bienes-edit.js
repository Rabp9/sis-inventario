'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:BienesEditCtrl
 * @description
 * # BienesEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesEditCtrl', function ($scope, bien_id, $uibModalInstance, 
    BienesService, TiposService, MarcasService, $q, $utilsViewService) {
    
    $scope.bien = {};
    function getBien(bien_id) {
        return $q(function(resolve, reject) {
            var bien = BienesService.get({id: bien_id}, function() {
                $scope.bien = bien.bien;
                resolve(bien.bien.tipo_id);
            });
        });
    }
    
    function getTipo(tipo_id) {
        return $q(function(resolve, reject) {
            var data = TiposService.get({id: tipo_id}, function() {
                resolve(data.tipo.datos);
            });
        });
    }
    
    function setDatos(datos) {
        angular.forEach(datos, function (dato, k_dato) {
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
    }
    
    getBien(bien_id).then(function(tipo_id) {
        getTipo(tipo_id).then(function(datos) {
            setDatos(datos);
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
        $utilsViewService.disable(boton);
        
        BienesService.save(bien, function(data) {
            $utilsViewService.enable(boton);
        
            $uibModalInstance.close(data);
        });
    };
});