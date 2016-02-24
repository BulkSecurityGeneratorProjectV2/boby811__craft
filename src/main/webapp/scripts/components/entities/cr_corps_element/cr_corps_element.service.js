'use strict';

angular.module('craftApp')
    .factory('Cr_corps_element', function ($resource, DateUtils) {
        return $resource('api/cr_corps_elements/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
