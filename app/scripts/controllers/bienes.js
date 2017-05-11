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
    $scope.maxSize = 10;
    $scope.page = 1;
    $scope.loading = false;
    
    function getBienes() {
        $scope.loading = true;
        var data = BienesService.get({
            maxSize: $scope.maxSize,
            page: $scope.page
        }, function () {
            $scope.bienes = data.bienes;
            $scope.pagination = data.pagination;
            $scope.loading = false;
        }, function (err) {
            $scope.message = err.data;
            $scope.loading = false;
        });
    }
    
    getBienes();
    
    $scope.$watch('maxSize', function(newValue, oldValue) {
        $scope.page = 1;
        getBienes();
    });
    
    $scope.showBienesAdd = function(event) {
        $utilsViewService.disable(event.currentTarget);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/bienes-add.html',
            controller: 'BienesAddCtrl',
            backdrop: false
        });
        
        $utilsViewService.enable(event.currentTarget);
        
        modalInstanceAdd.result.then(function (data) {
            getBienes();
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
            $scope.message = data;
        });
    };
    
    $scope.pageChanged = function() {
        getBienes();
    };
});