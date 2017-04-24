'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.tiposService
 * @description
 * # tiposService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
  .factory('tiposService', function () {
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
