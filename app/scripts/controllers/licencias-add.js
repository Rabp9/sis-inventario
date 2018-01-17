'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:LicenciasAddCtrl
 * @description
 * # LicenciasAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('LicenciasAddCtrl', function ($scope, $uibModalInstance, LicenciasService, $utilsViewService) {
    $scope.licencia = {};
    $scope.icon = 'glyphicon-eye-open';
    $scope.type_input = 'password';
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveLicencia = function(licencia, boton) {
        $utilsViewService.disable('#' + boton);
        
        LicenciasService.save(licencia, function(data) {
            $uibModalInstance.close(data);
        }, function (err) {
            $uibModalInstance.close(err.data);            
        });
    };
    
    $scope.showSerial = function() {
        if ($scope.icon === 'glyphicon-eye-open') {
            $scope.icon = 'glyphicon-eye-close';
            $scope.type_input = 'text';
        } else {
            $scope.icon = 'glyphicon-eye-open';
            $scope.type_input = 'password';
        }
    };
});