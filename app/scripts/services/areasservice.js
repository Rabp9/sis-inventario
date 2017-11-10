'use strict';

/**
 * @ngdoc service
 * @name sisInventarioFrontendApp.AreasService
 * @description
 * # AreasService
 * Factory in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('AreasService', function ($resource) {
    return $resource(angular.module('sisInventarioFrontendApp').path_location + 'areas/:id.json', {}, {
        search: {
            method: 'GET',
            url: angular.module('sisInventarioFrontendApp').path_location + 'areas/search/:search.json'
        }
    });
});