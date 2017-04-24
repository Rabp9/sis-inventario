'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.clavesService
 * @description
 * # clavesService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('ClavesService', function ($resource) {
    return $resource(angular.module("sisInventarioFrontendApp").path_location + "claves/:id.json");
});