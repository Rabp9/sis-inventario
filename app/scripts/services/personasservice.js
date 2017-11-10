'use strict';

/**
 * @ngdoc service
 * @name sisInventarioFrontendApp.PersonasService
 * @description
 * # PersonasService
 * Factory in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('PersonasService', function ($resource) {
    return $resource(angular.module('sisInventarioFrontendApp').path_location + 'personas/:id.json', {}, {
        search: {
            method: 'GET',
            url: angular.module('sisInventarioFrontendApp').path_location + 'personas/search/:search.json'
        }
    });
});