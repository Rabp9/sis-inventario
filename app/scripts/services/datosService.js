'use strict';

/**
 * @ngdoc service
 * @name sisInventarioFrontendApp.datosService
 * @description
 * # datosService
 * Factory in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('DatosService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'datos/:id.json');
});