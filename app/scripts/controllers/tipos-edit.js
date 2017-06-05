'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:TiposEditCtrl
 * @description
 * # TiposEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('TiposEditCtrl', function ($scope, tipo_id, $uibModalInstance, TiposService, $utilsViewService, $uibModal) {
    var tipo = TiposService.get({
        id: tipo_id
    }, function() {
        $scope.tipo = tipo.tipo;
    }, function(err) {
        $uibModalInstance.close(err.data);
    });
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveTipo = function(tipo, boton) {
        $utilsViewService.disable('#' + boton);
        
        TiposService.save(tipo, function (data) {
            $uibModalInstance.close(data);
        }, function (err) {
            $uibModalInstance.close(err.data);
        });
    };
    
    $scope.addDato = function(dato_nuevo_descripcion) {
        $scope.tipo.datos.push({
            descripcion: dato_nuevo_descripcion,
            estado_id: 1,
            alternativas: []
        });
        $scope.dato_nuevo_descripcion = '';
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
        if (!dato.id) {
            var index = $scope.tipo.datos.indexOf(dato);
            $scope.tipo.datos.splice(index, 1);
        } else {
            dato.estado_id = 2;
        }
    };
});