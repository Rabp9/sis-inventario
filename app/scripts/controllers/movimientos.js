'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:MovimientosCtrl
 * @description
 * # MovimientosCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MovimientosCtrl', function ($scope, BienesService) {
    
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
    
    $scope.getBienes();
});