'use strict';

/**
 * @ngdoc service
 * @name sisInventarioFrontendApp.AreasService
 * @description
 * # AreasService
 * Factory in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('AreasService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'areas/:id.json', {}, {
        search: {
            method: 'GET',
            url: EnvService.getHost() + 'areas/search/:search.json'
        }
    });
});