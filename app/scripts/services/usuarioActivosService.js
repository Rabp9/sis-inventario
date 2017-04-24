'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.usuarioActivosService
 * @description
 * # usuarioActivosService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
  .factory('usuarioActivosService', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
