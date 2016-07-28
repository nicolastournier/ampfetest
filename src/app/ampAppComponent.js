(function () {
    'use strict';

    angular.module('ampapp').component('ampAppMain', {
        templateUrl: 'app/ampAppMain.html',
        controller: AmpAppMainController,
        controllerAs: 'ampAppMainVm'
    });


    function AmpAppMainController() {

        var ampAppMainVm = this;
    }
})();