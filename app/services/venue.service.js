/**
* Created by Mario on 1/8/17.
*/
(function() {
    'use strict';

    angular.module('urbanistaApp')
        .factory('venueExplorerService', venueExplorerService);

    var requestParams = {
        clientId: "3LYLFMUCV5DJ4UVSX2KPFI1IQ3B3XT4EGNEX0VHT5YSN2IIJ",
        clientSecret: "Y35COZY4QMONMFKNXCUUVMG330BFUEEMGBZSQU5DM1EERDEM",
        version: "20170108"
    };

    function venueExplorerService($resource) {
        var requestUri = 'https://api.foursquare.com/v2/venues/:action';
        return $resource(requestUri, {
            action: 'explore',
            client_id: requestParams.clientId,
            client_secret: requestParams.clientSecret,
            v: requestParams.version,
            venuePhotos: '1'
        });
    }
})();