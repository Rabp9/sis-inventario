'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.marcasService
 * @description
 * # marcasService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('MarcasService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'marcas/:id.json');
});