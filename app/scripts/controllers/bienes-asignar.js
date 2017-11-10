'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:BienesAsignarCtrl
 * @description
 * # BienesAsignarCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('BienesAsignarCtrl', function ($scope, bien_id, BienesService, MovimientosService,
    $uibModalInstance, AreasService, PersonasService) {
        
    $scope.init = function() {
        $scope.loading = true;
        BienesService.get({id: bien_id}, function(data) {
            $scope.bien = data.bien;
            MovimientosService.getByBien({bien_id: bien_id}, function(data) {
                $scope.loading = false;
                $scope.movimientos = data.movimientos;
            });
        });
    };
    
    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    
    $scope.refreshAreas = function(area) {
        if (area !== '') {
            AreasService.search({search: area}, function(data) {
                $scope.areas = data.areas;
            });
        }
    };
  
    $scope.setSelectAreaFocus = function() {
        $scope.$broadcast('UiSelectArea');
    };
    
    $scope.refreshPersonas = function(persona) {
        if (persona !== '') {
            PersonasService.search({search: persona}, function(data) {
                $scope.personas = data.personas;
            });
        }
    };
  
    $scope.setSelectResponsableFocus = function() {
        $scope.$broadcast('UiSelectResponsable');
    };
  
    $scope.init();
});