'use strict';

/**
 * @ngdoc service
 * @name sisInventarioFrontendApp.EnvService
 * @description
 * # EnvService
 * Factory in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.factory('EnvService', function () {
    return {
        getHost: function() {
            switch (window.location.hostname) {
                case 'localhost':
                    return 'http://localhost:8000/sis-inventario-backend/';
                case '172.20.1.2':
                    return 'http://172.20.1.2:8989/sis-inventario/api/';
            }
        }
    };
});