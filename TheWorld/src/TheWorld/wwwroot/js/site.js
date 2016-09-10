(function () {
    //var ele = $("#username");
    //ele.innerHTML = "Tyler Le";

    //var main = document.getElementById("main");
    //main.onmouseenter = function () {
    //    main.style.background = "#888";
    //}

    //main.onmouseleave = function () {
    //    main.style.background = "";
    //}

    var $sidebarAndWrapper = $("#sidebar,#wrapper");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        var $icon = $("#sidebarToggle i.fa");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        }
        else {
            $icon.removeClass("fa-angle-right");
            $icon.addClass("fa-angle-left");
        }

    });

})();