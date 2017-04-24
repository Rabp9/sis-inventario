'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:TiposAddCtrl
 * @description
 * # TiposAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('TiposAddCtrl', function ($scope, $uibModalInstance, TiposService) {
    $scope.tipo = {};
    
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