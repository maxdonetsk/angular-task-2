(function () {
    'use strict';

    angular
            .module('app')
            .factory('Languages', function ($http) {
                var languages = [];
                function getLanguages() {
                    return $http.get('../data/languages.json').then(function (result) {
                        languages = result.data;
                        return languages;
                    });
                }

                return  {
                    getLanguages: getLanguages
                };
            });
})();