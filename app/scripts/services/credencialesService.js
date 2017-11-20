'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.credencialesService
 * @description
 * # credencialesService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('CredencialesService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'credenciales/:id.json');
});