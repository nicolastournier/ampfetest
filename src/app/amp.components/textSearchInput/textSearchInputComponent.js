(function () {
    'use strict';

    angular.module('amp.components').component('textSearchInput', {
        templateUrl: 'app/amp.components/textSearchInput/textSearchInputComponent.html',
        controller: TextSearchInputController,
        controllerAs: 'textSearchInputVm'
    });

    TextSearchInputController.$inject = ['$scope'];

    function TextSearchInputController($scope) {

    	var textSearchInputVm = this;

        $scope.$watch('tiledListVm.searchText', function(newText, oldText){
            $scope.$emit('onTextSearchInputChange', {newText:newText});
        })
    }
})();
