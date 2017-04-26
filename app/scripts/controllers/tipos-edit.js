'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:TiposEditCtrl
 * @description
 * # TiposEditCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('TiposEditCtrl', function ($scope, tipo, $uibModalInstance, TiposService) {
    $scope.tipo = $.extend(true, {}, tipo);
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveTipo = function(tipo, boton) {
        $('#' + boton).addClass('disabled');
        $('#' + boton).prop('disabled', true);
        
        TiposService.save(tipo, function(data) {
            $('#' + boton).removeClass('disabled');
            $('#' + boton).prop('disabled', false);
            $uibModalInstance.close(data);
        });
    };
    
    $scope.addDato = function(dato_nuevo_descripcion) {
        $scope.tipo.datos.push({
            descripcion: dato_nuevo_descripcion,
            estado_id: 1
        });
        $scope.dato_nuevo_descripcion = '';
    }
    
    $scope.removeDato = function(dato) {
        if (!dato.id) {
            var index = $scope.tipo.datos.indexOf(dato);
            $scope.tipo.datos.splice(index, 1);
        } else {
            dato.estado_id = 2;
        }
    }
});