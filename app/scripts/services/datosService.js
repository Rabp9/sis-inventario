'use strict';

/**
 * @ngdoc service
 * @name sisInventarioFrontendApp.datosService
 * @description
 * # datosService
 * Factory in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('DatosService', function ($resource) {
    return $resource(angular.module('sisInventarioFrontendApp').path_location + 'datos/:id.json');
});