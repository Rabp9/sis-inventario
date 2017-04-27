'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.bienesService
 * @description
 * # bienesService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('BienesService', function ($resource) {
    return $resource(angular.module("sisInventarioFrontendApp").path_location + "bienes/:id.json");
});