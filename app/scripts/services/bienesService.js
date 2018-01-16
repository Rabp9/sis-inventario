'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.bienesService
 * @description
 * # bienesService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('BienesService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'bienes/:id.json', {}, {
        registrarLote: {
            method: 'POST',
            url: EnvService.getHost() + 'bienes/registrarLote/.json'
        },
        getBienesMovimientos: {
            method: 'GET',
            url: EnvService.getHost() + 'bienes/getBienesMovimientos/.json'
        },
        darBaja: {
            method: 'POST',
            url: EnvService.getHost() + 'bienes/darBaja/.json'
        },
        getByTipo: {
            method: 'GET',
            url: EnvService.getHost() + 'bienes/getByTipo/:tipo_id.json'
        }
    });
});