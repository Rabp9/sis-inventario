'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.movimientosService
 * @description
 * # movimientosService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
  .factory('movimientosService', function () {
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
