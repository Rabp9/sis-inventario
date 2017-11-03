'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:TiposAddCtrl
 * @description
 * # TiposAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('TiposAddCtrl', function ($scope, $uibModalInstance, TiposService, 
    $uibModal, $utilsViewService) {
        
    $scope.tipo = {};
    $scope.tipo.datos = [];
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveTipo = function(tipo, boton) {
        $utilsViewService.disable('#' + boton);

        TiposService.save(tipo, function(data) {
            $uibModalInstance.close(data);
        });
    };
    
    $scope.addDato = function(dato_nuevo_descripcion) {
        if (dato_nuevo_descripcion !== undefined && dato_nuevo_descripcion !== '') {
            $scope.tipo.datos.push({
                descripcion: dato_nuevo_descripcion,
                estado_id: 1,
                alternativas: [],
                tipo_dato: '',
                unico: false
            });
            $scope.dato_nuevo_descripcion = '';
        }
    };
    
    $scope.setDetailDato = function(dato, event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/dato-detail.html',
            controller: 'DatoDetailCtrl',
            backdrop: false,
            size: 'sm',
            resolve: {
                dato: function() {
                    return dato;
                }
            }
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function (dato_detailed) {
            dato = dato_detailed;
        });
    };
    
    $scope.removeDato = function(dato) {
        var index = $scope.tipo.datos.indexOf(dato);
        $scope.tipo.datos.splice(index, 1);
    };
});