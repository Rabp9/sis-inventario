'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.movimientosService
 * @description
 * # movimientosService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('MovimientosService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'movimientos/:id.json', {}, {
        getByBien: {
            method: 'GET',
            url: EnvService.getHost() + 'movimientos/getByBien/:bien_id.json'
        }
    });
});