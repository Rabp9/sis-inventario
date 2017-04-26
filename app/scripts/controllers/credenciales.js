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
    CredencialesService.get(function(data) {
        $scope.credenciales = data.credenciales;
    });
    
    $scope.showCredencialesAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/credenciales-add.html',
            controller: 'CredencialesAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.credenciales.push(data.credencial);
            $scope.message = data.message;
        });
    };
    
    
    $scope.showCredencialesEdit = function(credencial) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/credenciales-edit.html',
            controller: 'CredencialesEditCtrl',
            backdrop: false,
            resolve: {
                credencial: function() {
                    return credencial;
                }
            }
        });
           
        modalInstanceEdit.result.then(function (data) { 
            CredencialesService.get(function(data) {
                $scope.credenciales = data.credenciales;
            });
            $scope.message = data.message;
        });
    };
});