'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.tiposService
 * @description
 * # tiposService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('TiposService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'tipos/:id.json');
});