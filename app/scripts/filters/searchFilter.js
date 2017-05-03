'use strict';

/**
 * @ngdoc filter
 * @name sisInventarioFrontendApp.filter:searchFilter
 * @function
 * @description
 * # searchFilter
 * Filter in the sisInventarioFrontendApp.
 */
angular.module('sisInventarioFrontendApp')
.filter('searchFilter', function () {
    return function(input, search) {
        if (!input) return input;
        if (!search) return input;
        var result = [];
        angular.forEach(search, function (v_search, k_search) {
            angular.forEach(input, function (v_input, k_input) {
                if (v_input.hasOwnProperty(k_search)) {
                    if (v_input[k_search].toLowerCase().indexOf(v_search.toLowerCase()) !== -1) {
                        result.push(v_input);
                    }
                }
            });
        });
        return result;
    }
});