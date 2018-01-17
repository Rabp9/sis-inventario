'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:LicenciasEditCtrl
 * @description
 * # LicenciasEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('LicenciasEditCtrl', function ($scope, licencia_id, $uibModalInstance, LicenciasService, $utilsViewService) {
    $scope.icon = 'glyphicon-eye-open';
    $scope.type_input = 'password';
    
    $scope.init = function() {
        $scope.getLicencias();
    };
    
    $scope.getLicencias = function() {
        LicenciasService.get({id: licencia_id}, function(data) {
            $scope.licencia = data.licencia;
        });
    };
    
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
    
    $scope.init();
});