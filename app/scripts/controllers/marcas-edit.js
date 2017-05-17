'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:MarcasEditCtrl
 * @description
 * # MarcasEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MarcasEditCtrl', function ($scope, marca_id, $uibModalInstance, MarcasService, $utilsViewService) {
    var marca = MarcasService.get({
        id: marca_id
    }, function() {
        $scope.marca = marca.marca;
    }, function(err) {
        $uibModalInstance.close(err.data);
    });
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveMarca = function(marca, boton) {
        $utilsViewService.disable('#' + boton);
        
        MarcasService.save(marca, function(data) {
            $uibModalInstance.close(data);
        }, function(err) {
            $uibModalInstance.close(err.data);            
        });
    };
});