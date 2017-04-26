'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:CredencialesAddCtrl
 * @description
 * # CredencialesAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('CredencialesAddCtrl', function ($scope, $uibModalInstance, CredencialesService) {
    $scope.credencial = {};
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveCredencial = function(credencial, boton) {
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
        
        CredencialesService.save(credencial, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
});