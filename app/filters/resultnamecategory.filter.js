/**
* Created by Mario on 1/8/17.
*/
angular.module('urbanistaApp')
    .filter("resultNameCategoryFilter", function () {
        return function (results, filterValue) {
            if (!filterValue) return results;

            var matches = [];
            filterValue = filterValue.toLowerCase();
            for (var i = 0; i < results.length; i++) {
                var result = results[i];

                if (result.venue.name.toLowerCase().indexOf(filterValue) > -1 ||
                    result.venue.categories[0].shortName.toLowerCase().indexOf(filterValue) > -1) {
                    matches.push(result);
                }
            }
            return matches;
        };
    });
