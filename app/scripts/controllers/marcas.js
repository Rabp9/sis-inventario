'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:MarcasCtrl
 * @description
 * # MarcasCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('MarcasCtrl', function ($scope, MarcasService, $uibModal, $utilsViewService) {
    $scope.loading = true;
    
    function getMarcas () {
        MarcasService.get(function(data) {
            $scope.marcas = data.marcas;
            $scope.loading = false;
        });
    }
    
    getMarcas();
        
    $scope.showMarcasAdd = function(event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/marcas-add.html',
            controller: 'MarcasAddCtrl',
            backdrop: false
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function (data) {
            getMarcas();
            $scope.message = data;
        });
    };
    
    $scope.showMarcasEdit = function(marca_id, event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/marcas-edit.html',
            controller: 'MarcasEditCtrl',
            backdrop: false,
            resolve: {
                marca_id: function() {
                    return marca_id;
                }
            }
        });
           
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceEdit.result.then(function (data) {
            getMarcas();
            $scope.message = data;
        });
    };
});