(function () {


    $(document).ready(function () {

        var link = $("#selectedMenuItem").val();

        var linkItem = $("a[href='"+link+"']").next();
        linkItem.parents(".list-group.collapse").collapse("show");

        $('#sidebar .collapse').on('show.bs.collapse', function (event) {

            var id = $(event.currentTarget).attr("id");
            $(event.currentTarget).parent().children(".in").not("#" + id).collapse("hide");
        });

        $('#sidebar .collapse').on('hidden.bs.collapse', function (event) {
            $(event.currentTarget).find(".in").collapse("hide");
        });

        $("#sidebar-mini a[href]").click(function () {
            toggleSidebar("default")
        });
        $("#sidebar-toggle").click(function () {
            toggleSidebar("mini")
        });


    });

    function toggleSidebar(which) {
        if (which) localStorage.setItem("sidebar", which);

        var sideBar = $("#sidebar").parent();
        var sideBarMini = $("#sidebar-mini").parent();

        if (localStorage.getItem("sidebar") === "default") {
            sideBar.attr("style", "");
            sideBarMini.attr("style", "");
        }
        else {
            sideBar.attr("style", "display: none !important");
            sideBarMini.attr("style", "display:inherit !important");
        }
    }

}());
