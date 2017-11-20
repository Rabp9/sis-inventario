'use strict';

/**
 * @ngdoc service
 * @name sisInventarioFrontendApp.PersonasService
 * @description
 * # PersonasService
 * Factory in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('PersonasService', function ($resource, EnvService) {
    return $resource(EnvService.getHost() + 'personas/:id.json', {}, {
        search: {
            method: 'GET',
            url: EnvService.getHost() + 'personas/search/:search.json'
        }
    });
});