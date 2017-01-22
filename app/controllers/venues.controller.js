(function() {
    'use strict';

    angular
        .module('urbanistaApp')
        .controller('venuesCtrl', venuesCtrl);

    venuesCtrl.$inject = ['venueExplorerService', '$filter', '$geolocation', '$scope'];

    function venuesCtrl(venueExplorerService, $filter, $geolocation, $scope) {
        /*jshint validthis: true*/
        var vm = this;
        vm.myPosition = null;

        vm.exploreNearby = "Monterrey, NL";
        vm.exploreQuery = "";
        vm.filterValue = "";
        vm.distanceQuery = "5";

        vm.places = [];
        vm.filteredPlaces = [];
        vm.filteredPlacesCount = 0;

        //paging
        vm.totalRecordsCount = 0;
        vm.pageSize = 10;
        vm.currentPage = 1;

        init();

        function init() {

            createWatche(vm);
            $geolocation.getCurrentPosition({
                timeout: 60000
            }).then(function (position) {
                var myPosition = position;
                vm.myPosition = myPosition.coords.latitude + ',' + myPosition.coords.longitude;
                getPlacesCoords();
            }).catch(function (position) {
                getPlaces();
                console.error(position.error.message);
            });
        }

        function getPlaces() {
            var offset = (vm.pageSize) * (vm.currentPage - 1);
            venueExplorerService.get({
                near: vm.exploreNearby,
                query: vm.exploreQuery,
                limit: vm.pageSize,
                radius: vm.distanceQuery * 1000,
                offset: offset
            }, function (results){
                if (results.response.groups) {
                    vm.places = results.response.groups[0].items;
                    vm.totalRecordsCount = results.response.totalResults;
                    filterPlaces('');
                }
                else {
                    vm.places = [];
                    vm.totalRecordsCount = 0;
                }
            });
        }

        function getPlacesCoords() {
            var offset = (vm.pageSize) * (vm.currentPage - 1);
            venueExplorerService.get({
                query: vm.exploreQuery,
                limit: vm.pageSize,
                radius: vm.distanceQuery * 1000,
                ll: vm.myPosition,
                offset: offset
            }, function (results){
                if (results.response.groups) {
                    vm.places = results.response.groups[0].items;
                    vm.totalRecordsCount = results.response.totalResults;
                    filterPlaces('');
                }
                else {
                    vm.places = [];
                    vm.totalRecordsCount = 0;
                }
            });
        }

        function handleResults(results){
            if (results.response.groups) {
                vm.places = results.response.groups[0].items;
                vm.totalRecordsCount = results.response.totalResults;
                filterPlaces('');
            }
            else {
                vm.places = [];
                vm.totalRecordsCount = 0;
            }
        }


        function filterPlaces(filterInput) {
            vm.filteredPlaces = $filter("resultNameCategoryFilter")(vm.places, filterInput);
            vm.filteredPlacesCount = vm.filteredPlaces.length;
        }

        function createWatche() {

            $scope.$watch("filterValue", function (filterInput) {
                filterPlaces(filterInput);
            });
        }

        vm.doSearch = function () {

            vm.currentPage = 1;
            getPlacesCoords();
        };

        vm.pageChanged = function (page) {

            vm.currentPage = page;
            getPlaces();
        };

        vm.buildCategoryIcon = function (icon, size) {

            return icon.prefix + size + icon.suffix;
        };

        vm.buildVenueThumbnail = function (photo) {

            return photo.items[0].prefix + '128x128' + photo.items[0].suffix;
        };

    }
})();