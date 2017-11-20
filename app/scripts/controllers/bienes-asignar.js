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
    $uibModalInstance, AreasService, PersonasService, $utilsViewService) {
    
    $scope.movimiento = {};
    $scope.page = 1;
    $scope.maxSize = 10;
    
    $scope.init = function() {
        $scope.loading = true;
        BienesService.get({id: bien_id}, function(data) {
            $scope.bien = data.bien
            $scope.loading = false;
            $scope.getMovimientos();
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
  
    $scope.$watch('maxSize', function(newValue, oldValue) {
        $scope.page = 1;
        $scope.getMovimientos();
    });
    
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
    
    $scope.saveAsignacion = function(movimiento, boton, fecha_pre, bien) {
        $utilsViewService.disable('#' + boton);
        
        if ($scope.fecha_pre !== null) {
            movimiento.fecha_inicio = formatDate($scope.fecha_pre);
        }
        movimiento.bien_id = bien.id;
        movimiento.user_id = 1;
        movimiento.estado_id = 1;
        MovimientosService.save(movimiento, function (data) {
            $uibModalInstance.close(data);
        }, function (err) {
            $uibModalInstance.close(err.data);
        });
    };
  
    $scope.getMovimientos = function() {
        $scope.movimientos = [];
        $scope.loading_movimientos = true;
        MovimientosService.getByBien({
            bien_id: bien_id,
            maxSize: $scope.maxSize,
            page: $scope.page,
        }, function (data) {
            $scope.movimientos = data.movimientos;
            $scope.pagination = data.pagination;
            $scope.loading_movimientos = false;
        });
    };
    
    $scope.init();
    
    $scope.pageChanged = function() {
        $scope.getMovimientos();
    };
    
    function formatDate(fecha) {
        if (fecha === undefined) {
            return undefined;
        }
        return fecha.getFullYear() + '-' + str_pad((fecha.getMonth() + 1), '00') + '-' + str_pad(fecha.getDate(), '00');
    }
    
    function str_pad(str, pad) {
        return pad.substring(0, (pad.length - str.toString().length)) + str;
    }
});