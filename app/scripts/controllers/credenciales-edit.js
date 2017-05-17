'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:CredencialesEditCtrl
 * @description
 * # CredencialesEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('CredencialesEditCtrl', function ($scope, credencial_id, $uibModalInstance, CredencialesService, $utilsViewService) {
    var credencial = CredencialesService.get({
        id: credencial_id
    }, function() {
        $scope.credencial = credencial.credencial;
    }, function(err) {
        $uibModalInstance.close(err.data);
    });
    
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