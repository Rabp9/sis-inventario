'use strict';

/**
 * @ngdoc service
 * @name sisInventarioFrontendApp.LicenciasService
 * @description
 * # LicenciasService
 * Factory in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('LicenciasService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'licencias/:id.json');
});