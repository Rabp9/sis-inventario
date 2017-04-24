'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:TiposEditCtrl
 * @description
 * # TiposEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('TiposEditCtrl', function ($scope, tipo, $uibModalInstance, TiposService) {
    $scope.tipo = tipo;
    
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
});