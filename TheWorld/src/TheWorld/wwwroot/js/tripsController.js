﻿
(function () {

    "use strict";

    angular.module("app-trips")
        .controller("tripsController", tripsController);

    function tripsController() {
        
        var vm = this;

        vm.name = "Tai";

        vm.trips = [{
            name: "US Trip",
            created: new Date()
        },
        {
            name: "World Trip",
            created: new Date()
        }]

    }
})();