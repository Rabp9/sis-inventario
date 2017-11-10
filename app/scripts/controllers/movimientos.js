'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:MovimientosCtrl
 * @description
 * # MovimientosCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MovimientosCtrl', function ($scope, BienesService, $utilsViewService,
    $uibModal) {
    
    $scope.getBienes = function() {
        $scope.loading = true;
        BienesService.getBienesMovimientos({
            maxSize: $scope.maxSize,
            page: $scope.page
        }, function (data) {
            $scope.bienes = data.bienes;
            $scope.pagination = data.pagination;
            $scope.loading = false;
        });
    };
    
    $scope.showBienesAsignar = function(bien_id, event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAsignar = $uibModal.open({
            templateUrl: 'views/bienes-asignar.html',
            controller: 'BienesAsignarCtrl',
            backdrop: false,
            size: 'lg',
            resolve: {
                bien_id: function() {
                    return bien_id;
                }
            }
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAsignar.result.then(function (data) {
            getBienes();
            $scope.message = data;
        });
    };
    
    $scope.getBienes();
});