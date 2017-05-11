'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:MarcasEditCtrl
 * @description
 * # MarcasEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MarcasEditCtrl', function ($scope, marca_id, $uibModalInstance, MarcasService) {
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
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
        
        MarcasService.save(marca, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        }, function(err) {
            $uibModalInstance.close(err.data);            
        });
    };
});