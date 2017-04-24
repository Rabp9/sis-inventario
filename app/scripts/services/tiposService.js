'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.tiposService
 * @description
 * # tiposService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('TiposService', function ($resource) {
    return $resource(angular.module("sisInventarioFrontendApp").path_location + "tipos/:id.json");
});