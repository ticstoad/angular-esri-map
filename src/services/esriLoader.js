(function(angular) {
    'use strict';

    angular.module('esri.map', []);

    angular.module('esri.map').factory('esriLoader', function ($q) {
        return function(moduleName){
            var deferred = $q.defer();
            if (angular.isString(moduleName)) {
                require([moduleName], function (obj) {
                    deferred.resolve(obj);
                });
            }
            else if (angular.isArray(moduleName)) {
                require(moduleName, function (obj) {
                    deferred.resolve(arguments);
                });
            }
            else {
                deferred.reject('An Array<String> or String is required to load modules.')
            }
            return deferred.promise;

        };
    });

})(angular);
