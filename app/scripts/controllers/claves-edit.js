'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:ClavesEditCtrl
 * @description
 * # ClavesEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('ClavesEditCtrl', function ($scope, clave, $uibModalInstance, ClavesService) {
    $scope.clave = clave;
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveClave = function(clave, boton) {
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
        
        ClavesService.save(clave, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
});