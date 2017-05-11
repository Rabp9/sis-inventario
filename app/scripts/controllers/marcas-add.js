'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:MarcasAddCtrl
 * @description
 * # MarcasAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MarcasAddCtrl', function ($scope, $uibModalInstance, MarcasService, $utilsViewService) {
    $scope.marca = {};
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveMarca = function(marca, boton) {
        $utilsViewService.disable('#' + boton);
        
        MarcasService.save(marca, function(data) {
            $utilsViewService.enable('#' + boton);
        
            $uibModalInstance.close(data);
        });
    };
});