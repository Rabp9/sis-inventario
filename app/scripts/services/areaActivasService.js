'use strict';

/**
 * @ngdoc service
 * @name sisInventarioApp.areaActivasService
 * @description
 * # areaActivasService
 * Factory in the sisInventarioApp.
 */
angular.module('sisInventarioFrontendApp')
  .factory('areaActivasService', function () {
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
