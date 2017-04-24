'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:ClavesCtrl
 * @description
 * # ClavesCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('ClavesCtrl', function ($scope, ClavesService, $uibModal) {
    ClavesService.get(function(data) {
        $scope.claves = data.claves;
    });
    
    $scope.showClavesAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/claves-add.html',
            controller: 'ClavesAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.claves.push(data.clave);
            $scope.message = data.message;
        });
    };
    
    
    $scope.showClavesEdit = function(clave) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/claves-edit.html',
            controller: 'ClavesEditCtrl',
            backdrop: false,
            resolve: {
                clave: function() {
                    return clave;
                }
            }
        });
           
        modalInstanceEdit.result.then(function (data) {
            $scope.message = data.message;
        });
    };
});