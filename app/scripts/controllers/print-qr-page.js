'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:PrintQrPageCtrl
 * @description
 * # PrintQrPageCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('PrintQrPageCtrl', function ($scope, $stateParams, BienesService, $window, $timeout) {
    $scope.getBienes = function() {
        BienesService.getByIds({ids: $stateParams.codigos}, function(data) {
            $scope.bienes = data.bienes;
            $timeout(function() {
                $window.print();
            }, 1);
            $timeout(function() {
                $window.close();
            }, 1);
        });
    };
    
    $scope.init = function() {
        $scope.getBienes();
    };
    
    $scope.init();
});