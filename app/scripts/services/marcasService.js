'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.marcasService
 * @description
 * # marcasService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('MarcasService', function ($resource) {
    return $resource(angular.module('sisInventarioFrontendApp').path_location + 'marcas/:id.json');
});