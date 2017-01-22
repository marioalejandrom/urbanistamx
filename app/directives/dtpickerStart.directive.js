/**
 * Created by Mario on 1/12/17.
 */
(function() {
    'use strict';
    angular.module('urbanistaApp')
        .directive('dtPickerStart', dtPickerStart);

        dtPickerStart.$inject = ['$parse'];

        function dtPickerStart(){
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                require: '^dtPicker',
                templateUrl: 'templates/dtpickerStart.html',
                scope: {
                    ngModel: '=',
                    placeHolder: '='
                },
                link: function (scope, element, attrs, dtPickerCtrl) {/* inline link function */
                    element.datetimepicker();

                    element.on("dp.change", function (e) {
                        $('#datetimepickerEnd').data("DateTimePicker").minDate(e.date);
                    });
                }
            };
        }

})();