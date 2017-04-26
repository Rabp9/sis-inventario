'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.credencialesService
 * @description
 * # credencialesService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('CredencialesService', function ($resource) {
    return $resource(angular.module("sisInventarioFrontendApp").path_location + "credenciales/:id.json");
});