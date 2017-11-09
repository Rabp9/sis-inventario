'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:BienesAsignarCtrl
 * @description
 * # BienesAsignarCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesAsignarCtrl', function ($scope, bien_id, BienesService, MovimientosService,
    $uibModalInstance) {
        
    $scope.init = function() {
        BienesService.get({id: bien_id}, function(data) {
            $scope.bien = data.bien;
            MovimientosService.getByBien({bien_id: bien_id}, function(data) {
                $scope.movimientos = data.movimientos;
            });
        });
    };
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    
    $scope.init();
});