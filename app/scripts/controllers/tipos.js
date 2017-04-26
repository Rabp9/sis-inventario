'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:TiposCtrl
 * @description
 * # TiposCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('TiposCtrl', function ($scope, TiposService, $uibModal) {
    TiposService.get(function(data) {
        $scope.tipos = data.tipos;
    });
    
    $scope.showTiposAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/tipos-add.html',
            controller: 'TiposAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.tipos.push(data.tipo);
            $scope.message = data.message;
        });
    };
    
    
    $scope.showTiposEdit = function(tipo) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/tipos-edit.html',
            controller: 'TiposEditCtrl',
            backdrop: false,
            resolve: {
                tipo: function() {
                    return tipo;
                }
            }
        });
           
        modalInstanceEdit.result.then(function (data) {  
            TiposService.get(function(data) {
                $scope.tipos = data.tipos;
            });
            $scope.message = data.message;
        });
    };
});