'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:ClavesAddCtrl
 * @description
 * # ClavesAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('ClavesAddCtrl', function ($scope, $uibModalInstance, ClavesService) {
    $scope.clave = {};
    
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