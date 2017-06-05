'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:DatoDetailCtrl
 * @description
 * # DatoDetailCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('DatoDetailCtrl', function ($scope, $uibModalInstance, dato, $utilsViewService) {
    $scope.dato = dato;
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    
    $scope.saveDatoDetail = function(dato, btn) {
        $utilsViewService.disable('#' + btn);
        $uibModalInstance.close(dato);
    };
    
    $scope.addAlternativa = function(alternativa_nuevo_descripcion) {
        $scope.dato.alternativas.push({
            descripcion: alternativa_nuevo_descripcion,
            estado_id: 1
        });
        $scope.alternativa_nuevo_descripcion = '';
    };
    
    $scope.removeAlternativa = function(alternativa) {
        if (!alternativa.id) {
            var index = $scope.dato.alternativas.indexOf(alternativa);
            $scope.dato.alternativas.splice(index, 1);
        } else {
            alternativa.estado_id = 2;
        }
    };
});