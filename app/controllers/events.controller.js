(function (){
    'use strict';

    angular
        .module('urbanistaApp')
        .controller('eventsCtrl', eventsCtrl);

    eventsCtrl.$inject = ['$scope'];

    function eventsCtrl($scope) {
        /*jshint validthis: true*/
        var vm = this;
        vm.myPosition = null;

        vm.exploreNearby = "Monterrey, NL";
        vm.exploreQuery = "";
        vm.filterValue = "";
        vm.distanceQuery = "5";

        vm.events = [];
        vm.filteredPlaces = [];
        vm.filteredPlacesCount = 0;

        //paging
        vm.totalRecordsCount = 0;
        vm.pageSize = 10;
        vm.currentPage = 1;

        vm.startDate = '';
        vm.endDate = '' ;

        vm.eventName = 'Test2';

        init();

        function init() {

        }



    }
})();