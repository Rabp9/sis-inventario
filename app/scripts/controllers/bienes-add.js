'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:BienesAddCtrl
 * @description
 * # BienesAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesAddCtrl', function ($scope, $uibModalInstance, $uibModal, BienesService, TiposService, MarcasService, $utilsViewService) {
    $scope.bien = {};
    $scope.bien.bien_datos = [];
    $scope.loading_tipos = 'Cargando...';
    $scope.loading_marcas = 'Cargando...';
    $scope.message = {};
    
    TiposService.get(function (data) {
        $scope.tipos = data.tipos;
        $scope.loading_tipos = 'Selecciona un Tipo';
    }, function (err) {
        $uibModalInstance.close(err.data);
        $scope.loading_tipos = 'Selecciona un Tipo';
    });
    
    MarcasService.get(function (data) {
        $scope.marcas = data.marcas;
        $scope.loading_marcas = 'Selecciona una Marca';
    }, function (err) {
        $uibModalInstance.close(err.data);
        $scope.loading_marcas = 'Selecciona una Mcarca';
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

    $scope.showTiposAdd = function(event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/tipos-add.html',
            controller: 'TiposAddCtrl',
            backdrop: false
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function (data) {
            $scope.tipos.push(data.tipo);
            $scope.bien.tipo_id = data.tipo.id;
            $scope.selectTipo(data.tipo.id);
            $scope.message = data.message;
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
            $scope.marcas.push(data.marca);
            $scope.bien.marca_id = data.marca.id;
            $scope.message = data.message;
        });
    };
    
    $scope.saveBien = function(bien, boton) {
        $utilsViewService.disable('#' + boton);
        
        BienesService.save(bien, function(data) {
            $utilsViewService.enable('#' + boton);
            
            $uibModalInstance.close(data);
        }, function(err) {
            $uibModalInstance.close(err.data);    
        });
    };
});