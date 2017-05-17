'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:CredencialesCtrl
 * @description
 * # CredencialesCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('CredencialesCtrl', function ($scope, CredencialesService, $uibModal) {
    $scope.loading = true;
    
    function getCredenciales() {
        $scope.loading = true;
        CredencialesService.get(function(data) {
            $scope.credenciales = data.credenciales;
            $scope.loading = false;
        });
    }
    
    getCredenciales();
        
    $scope.showCredencialesAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/credenciales-add.html',
            controller: 'CredencialesAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            getCredenciales();
            $scope.message = data;
        });
    };
    
    
    $scope.showCredencialesEdit = function(credencial_id) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/credenciales-edit.html',
            controller: 'CredencialesEditCtrl',
            backdrop: false,
            resolve: {
                credencial_id: function() {
                    return credencial_id;
                }
            }
        });
           
        modalInstanceEdit.result.then(function (data) { 
            getCredenciales();
            $scope.message = data;
        });
    };
});