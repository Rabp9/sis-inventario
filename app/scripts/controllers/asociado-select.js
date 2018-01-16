'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:AsociadoSelectCtrl
 * @description
 * # AsociadoSelectCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('AsociadoSelectCtrl', function ($scope, $uibModalInstance, dato, $utilsViewService,
    TiposService) {
    
    $scope.dato = dato;
    $scope.loading_tipos = 'Cargando...';
    
    $scope.init = function() {
        TiposService.get(function(data) {
            $scope.tipos = data.tipos;
            $scope.loading_tipos = 'Selecciona un Tipo';
        });
    };
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    
    $scope.saveDatoAsociado = function(dato, btn) {
        $utilsViewService.disable('#' + btn);
        $uibModalInstance.close(dato);
    };
    
    $scope.init();
});