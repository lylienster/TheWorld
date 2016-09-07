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

        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        }
        else {
            $(this).text("Hide Sidebar");
        }

    });

})();