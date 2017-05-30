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
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
        
        TiposService.save(tipo, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
    
    $scope.addDato = function(dato_nuevo_descripcion) {
        $scope.tipo.datos.push({
            descripcion: dato_nuevo_descripcion,
            estado_id: 1
        });
        $scope.dato_nuevo_descripcion = '';
    };
    
    $scope.setDetailDato = function(dato, event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/dato-detail.html',
            controller: 'DatoDetailCtrl',
            backdrop: false,
            size: 'sm'
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function (data) {
        });
    };
    
    $scope.removeDato = function(dato) {
        var index = $scope.tipo.datos.indexOf(dato);
        $scope.tipo.datos.splice(index, 1);
    };
});