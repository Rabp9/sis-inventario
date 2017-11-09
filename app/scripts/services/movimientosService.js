'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.movimientosService
 * @description
 * # movimientosService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('MovimientosService', function ($resource) {
    return $resource(angular.module('sisInventarioFrontendApp').path_location + 'movimientos/:id.json', {}, {
        getByBien: {
            method: 'GET',
            url: angular.module('sisInventarioFrontendApp').path_location + 'movimientos/getByBien/:bien_id.json'
        }
    });
});