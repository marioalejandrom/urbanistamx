/**
 * Created by Mario on 1/11/17.
 */
(function(){
    'use strict';
    angular.module('urbanistaApp')
        .controller('dtPickerCtrl', dtPickerCtrl);
        dtPickerCtrl.$inject = ['$scope'];
        function dtPickerCtrl($scope){
            var vm = this;
            vm.todayStartDate = new Date();
            vm.todayEndDate = new Date();
            vm.todayEndDate.setHours(vm.todayStartDate.getHours()+1);
        }
})();