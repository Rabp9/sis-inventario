'use strict';

/**
 * @ngdoc function
 * @name sisInventarioFrontendApp.controller:PrintQrCtrl
 * @description
 * # PrintQrCtrl
 * Controller of the sisInventarioFrontendApp
 */
angular.module('sisInventarioFrontendApp')
.controller('PrintQrCtrl', function ($scope, BienesService, AreasService, PersonasService,
    TiposService, MarcasService) {
    
    $scope.search = {};
    $scope.search.text = '';
    $scope.search.estado_1 = true;
    $scope.search.estado_2 = false;
    $scope.search.estado_3 = false;
    $scope.bienes_selected = [];
    $scope.check_all_bienes_list = {
        value: false
    };
    
    TiposService.get(function (data) {
        $scope.tipos = data.tipos;
        $scope.loading_tipos = 'Selecciona un Tipo';
    });
    
    MarcasService.get(function (data) {
        $scope.marcas = data.marcas;
        $scope.loading_marcas = 'Selecciona una Marca';
    });
    
    $scope.showBienes = function() {
        $scope.bienes = [];
        $scope.loading = true;
        $scope.check_all_bienes_list.value = false;
        BienesService.getBienesQr({
            descripcion: $scope.search.descripcion,
            tipo_id: $scope.search.tipo_id,
            marca_id: $scope.search.marca_id,
            modelo: $scope.search.modelo,
            serie: $scope.search.serie,
            codigo_patrimonial: $scope.search.codigo_patrimonial,
            area_id: $scope.search.area,
            responsable: $scope.search.responsable,
            estado_1: $scope.search.estado_1,
            estado_2: $scope.search.estado_2,
            estado_3: $scope.search.estado_3
        }, function (data) {
            $scope.bienes = data.bienes;
            $scope.loading = false;
        });
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
    
    $scope.check_all_list_event = function() {
        if ($scope.search.check_all) {
            $scope.search.estado_1 = true;
            $scope.search.estado_2 = true;
            $scope.search.estado_3 = true;
        } else {
            $scope.search.estado_1 = true;
            $scope.search.estado_2 = false;
            $scope.search.estado_3 = false;
        }
    };
    
    $scope.check_all_bienes_list_event = function() {
        if ($scope.check_all_bienes_list.value) {
            angular.forEach($scope.bienes, function(value, key) {
                if ($scope.bienes_selected.indexOf(value.id) === -1) {
                    $scope.bienes_selected.push(value.id);
                }
            });
        } else {
            $scope.bienes_selected.length = 0;
        }
    };
   
    $scope.showBienesPrint = function() {
        $('#dvQr').css('display', 'block'); 
        window.print();
    };
});