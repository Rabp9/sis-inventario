'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:MarcasCtrl
 * @description
 * # MarcasCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MarcasCtrl', function ($scope, MarcasService, $uibModal) {
    MarcasService.get(function(data) {
        $scope.marcas = data.marcas;
    });
        
    $scope.showMarcasAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/marcas-add.html',
            controller: 'MarcasAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.marcas.push(data.marca);
            $scope.message = data.message;
        });
    };
    
    $scope.showMarcasEdit = function(marca) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/marcas-edit.html',
            controller: 'MarcasEditCtrl',
            backdrop: false,
            resolve: {
                marca: function() {
                    return marca;
                }
            }
        });
           
        modalInstanceEdit.result.then(function (data) {
            $scope.message = data.message;
        });
    };
});