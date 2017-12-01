'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:BienesCtrl
 * @description
 * # BienesCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesCtrl', function ($scope, BienesService, $uibModal, $utilsViewService) {
    
    $scope.search = {};
    $scope.search.text = '';
    $scope.search.estado_1 = true;
    $scope.search.estado_2 = false;
    $scope.search.estado_3 = false;
    $scope.page = 1;
    $scope.maxSize = 10;
    
    $scope.getBienes = function() {
        $scope.bienes = [];
        $scope.loading = true;
        BienesService.getBienesMovimientos({
            maxSize: $scope.maxSize,
            page: $scope.page,
            search: $scope.search.text,
            estado_1: $scope.search.estado_1,
            estado_2: $scope.search.estado_2,
            estado_3: $scope.search.estado_3
        }, function (data) {
            $scope.bienes = data.bienes;
            $scope.pagination = data.pagination;
            $scope.loading = false;
        });
    };
    
    $scope.getBienes();
    
    $scope.$watch('search.text', function(oldValue, newValue) {
        $scope.page = 1;
        $scope.getBienes();
    });

    $scope.check_change = function() {
        $scope.page = 1;
        $scope.getBienes();        
    };
    
    $scope.$watch('maxSize', function(newValue, oldValue) {
        $scope.page = 1;
        $scope.getBienes();
    });
    
    $scope.showBienesAsignar = function(bien_id, event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAsignar = $uibModal.open({
            templateUrl: 'views/bienes-asignar.html',
            controller: 'BienesAsignarCtrl',
            backdrop: false,
            size: 'lg',
            resolve: {
                bien_id: function() {
                    return bien_id;
                }
            }
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAsignar.result.then(function (data) {
            $scope.getBienes();
            $scope.message = data;
        });
    };
    
    $scope.showBienesAdd = function(event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/bienes-add.html',
            controller: 'BienesAddCtrl',
            backdrop: false
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function (data) {
            $scope.getBienes();
            $scope.message = data;
        });
    };
    
    $scope.showBienesEdit = function(bien_id, event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/bienes-edit.html',
            controller: 'BienesEditCtrl',
            backdrop: false,
            resolve: {
                bien_id: function() {
                    return bien_id;
                }
            }
        });
        
        $utilsViewService.enable(event.currentTarget);
           
        modalInstanceEdit.result.then(function (data) {
            $scope.getBienes();
            $scope.message = data;
        });
    };
    
    $scope.showBienesDarBaja = function(bien_id, event) {
        $utilsViewService.disable(event.currentTarget);
        
        if (confirm('¿Está seguro de dar de baja este bien?')) {
            BienesService.darBaja({id: bien_id}, function(data) {
                $scope.getBienes();
                $scope.message = data;
            });
        }
        $utilsViewService.enable(event.currentTarget);
    };
    
    
    $scope.pageChanged = function() {
        $scope.getBienes();
    };
    
    $scope.check_all_list_event = function() {
        if ($scope.search.check_all) {
            $scope.search.estado_1 = true;
            $scope.search.estado_2 = true;
            $scope.search.estado_3 = true;
            $scope.getBienes();
        } else {
            $scope.search.estado_1 = true;
            $scope.search.estado_2 = false;
            $scope.search.estado_3 = false;
            $scope.getBienes();
        }
    };
});