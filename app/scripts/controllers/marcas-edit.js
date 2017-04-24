'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:MarcasEditCtrl
 * @description
 * # MarcasEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MarcasEditCtrl', function ($scope, marca, $uibModalInstance, MarcasService) {
    $scope.marca = marca;
    
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