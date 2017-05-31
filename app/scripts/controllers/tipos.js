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
    $scope.loading = true;
    
    function getTipos() {
        $scope.loading = true;
        TiposService.get(function(data) {
            $scope.tipos = data.tipos;
            $scope.loading = false;
        });
    }
    
    getTipos();
    
    $scope.showTiposAdd = function() {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/tipos-add.html',
            controller: 'TiposAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            getTipos();
            $scope.message = data;
        });
    };
    
    
    $scope.showTiposEdit = function(tipo_id) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/tipos-edit.html',
            controller: 'TiposEditCtrl',
            backdrop: false,
            resolve: {
                tipo_id: function() {
                    return tipo_id;
                }
            }
        });
           
        modalInstanceEdit.result.then(function (data) {  
            getTipos();
            $scope.message = data.message;
        });
    };
});