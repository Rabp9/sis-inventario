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
        $(event.currentTarget).addClass('disabled');
        $(event.currentTarget).prop('disabled', true);
        
        var modalInstanceAdd = $uibModal.open({
            templateUrl: 'views/bienes-add.html',
            controller: 'BienesAddCtrl',
            backdrop: false
        });
        
        modalInstanceAdd.result.then(function (data) {
            $scope.bienes.push(data.bien);
            $scope.message = data.message;
        });
        
        $(event.currentTarget).removeClass('disabled');
        $(event.currentTarget).prop('disabled', false);
    };
    
    $scope.showBienesEdit = function(bien, event) {
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