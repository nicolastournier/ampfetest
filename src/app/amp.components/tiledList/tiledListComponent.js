(function () {
    'use strict';

    angular.module('amp.components').component('tiledList', {
        templateUrl: 'app/amp.components/tiledList/tiledListComponent.html',
        controller: TiledListController,
        controllerAs: 'tiledListVm',
        bindings: {
            listInputModel: '<'
        }
    });

    function TiledListController() {
        var tiledListVm = this;
    }
})();
