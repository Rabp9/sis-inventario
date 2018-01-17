'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:CredencialesAddCtrl
 * @description
 * # CredencialesAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('CredencialesAddCtrl', function ($scope, $uibModalInstance, CredencialesService, $utilsViewService) {
    $scope.credencial = {};
    $scope.icon = 'glyphicon-eye-open';
    $scope.type_input = 'password';
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveCredencial = function(credencial, boton) {
        $utilsViewService.disable('#' + boton);
        
        CredencialesService.save(credencial, function(data) {
            $uibModalInstance.close(data);
        }, function (err) {
            $uibModalInstance.close(err.data);            
        });
    };
    
    $scope.showPassword = function() {
        if ($scope.icon === 'glyphicon-eye-open') {
            $scope.icon = 'glyphicon-eye-close';
            $scope.type_input = 'text';
        } else {
            $scope.icon = 'glyphicon-eye-open';
            $scope.type_input = 'password';
        }
    };
});