/**
* Created by Mario on 1/8/17.
*/
(function() {
    'use strict';

    angular.module('urbanistaApp')
        .factory('eventExplorerService', eventExplorerService);

    eventExplorerService.$inject = ['$resource'];

    function eventExplorerService($resource) {
        var requestUri = 'data/events.json';
        return $resource(requestUri);
    }

    function getVersion() {
        var d = new Date.now(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('');
    }
})();