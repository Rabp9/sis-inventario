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
});