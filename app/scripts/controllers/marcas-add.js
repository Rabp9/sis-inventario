'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:MarcasAddCtrl
 * @description
 * # MarcasAddCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MarcasAddCtrl', function ($scope, $uibModalInstance, MarcasService) {
    $scope.marca = {};
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveMarca = function(marca, boton) {
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
        
        MarcasService.save(marca, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
});