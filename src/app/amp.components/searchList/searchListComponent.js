(function () {
    'use strict';

    angular.module('amp.components').component('searchList', {
        templateUrl: 'app/amp.components/searchList/searchListComponent.html',
        controller: SearchListController,
        controllerAs: 'searchListVm'
    });

    SearchListController.$inject = ['$scope', '$filter', 'peopleListService'];

    function SearchListController($scope, $filter, peopleListService) {

        var searchListVm = this;
        var searchFilter = $filter('filter');

        var listPromise = peopleListService.getPeopleList('SUPER_PEOPLE_LIST_URL')
        
        .then(function(iterableList){
            searchListVm.filteredDisplayList = searchListVm.displayList = iterableList;
        }, function(failResponse){
           searchListVm.filteredDisplayList = [];
        });

        searchListVm.applyFilter = function(newSearch){
            searchListVm.filteredDisplayList = searchFilter(searchListVm.displayList, newSearch);
        };

        $scope.$on('onTextSearchInputChange', function(ev, data){
            searchListVm.applyFilter(data.newText);
        })

    }
})();
