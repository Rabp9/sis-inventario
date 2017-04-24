'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.bienesService
 * @description
 * # bienesService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
  .factory('bienesService', function () {
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
