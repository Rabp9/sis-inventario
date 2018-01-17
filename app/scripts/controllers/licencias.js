'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:LicenciasCtrl
 * @description
 * # LicenciasCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('LicenciasCtrl', function ($scope, LicenciasService, $uibModal) {
    $scope.loading = true;
    
    $scope.getLicencias = function() {
        $scope.loading = true;
        LicenciasService.get(function(data) {
            $scope.licencias = data.licencias;
            $scope.loading = false;
        });
    };
    
    $scope.init = function () {
        $scope.getLicencias();
    };
        
    $scope.showLicenciasAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/licencias-add.html',
            controller: 'LicenciasAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.getLicencias();
            $scope.message = data;
        });
    };
    
    
    $scope.showLicenciasEdit = function(licencia_id) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/licencias-edit.html',
            controller: 'LicenciasEditCtrl',
            backdrop: false,
            resolve: {
                licencia_id: function() {
                    return licencia_id;
                }
            }
        });
           
        modalInstanceEdit.result.then(function (data) {
            $scope.getLicencias();
            $scope.message = data;
        });
    };
    
    $scope.init();
});