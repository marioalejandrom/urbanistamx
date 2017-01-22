/**
 * Created by Mario on 1/12/17.
 */
(function() {
    'use strict';
    angular.module('urbanistaApp')
        .directive('dtPickerEnd', dtPickerEnd);

        dtPickerEnd.$inject = ['$parse'];

        function dtPickerEnd(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                templateUrl: 'templates/dtpickerEnd.html',
                //require: 'ngModel',
                require: '^dtPicker',
                link: function (scope, element, attrs, dtPickerCtrl) {/* inline link function */
                    element.datetimepicker({
                        useCurrent: false
                    });

                    element.on("dp.change", function (e) {
                        $('#datetimepickerStart').data("DateTimePicker").maxDate(e.date);
                    });

                }
            };
        }

})();