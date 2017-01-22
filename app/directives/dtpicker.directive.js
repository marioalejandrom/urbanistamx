/**
 * Created by Mario on 1/11/17.
 */
(function() {
    'use strict';

    angular.module('urbanistaApp')
       .directive('dtPicker', dtPicker);

    function dtPicker(){
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/dtpicker.html',
            controller: 'dtPickerCtrl',
            controllerAs: 'dtPickerCtrl',
            require: '?^eventsCtrl',
            scope: {
                startDate: '@',
                endDate: '@'
            },
            link: function (scope, element, attrs) {/* inline link function */
                /*element.datetimepicker();

                element.on("dp.change", function (e) {
                    $('#datetimepickerEnd').data("DateTimePicker").minDate(e.date);
                });*/
            }
        };
    }

})();
