'use strict';

/**
 * @ngdoc function
 * @name sisInventarioApp.controller:BienesCtrl
 * @description
 * # BienesCtrl
 * Controller of the sisInventarioApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesCtrl', function ($scope, BienesService, $uibModal) {
    BienesService.get(function(data) {
        $scope.bienes = data.bienes;
    });
        
    $scope.showBienesAdd = function(event) {
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/bienes-add.html',
            controller: 'BienesAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.marcas.push(data.bien);
            $scope.message = data.message;
        });
    };
    
    
    $scope.showMarcasEdit = function(bien, event) {
        var modalInstanceEdit = $uibModal.open({
            templateUrl: 'views/bienes-edit.html',
            controller: 'BienesEditCtrl',
            backdrop: false,
            resolve: {
                bien: function() {
                    return bien;
                }
            }
        });
           
        modalInstanceEdit.result.then(function (data) {
            $scope.message = data.message;
        });
    };
});