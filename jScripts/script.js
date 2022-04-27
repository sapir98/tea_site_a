var showCookiesManagement = false;

$('document').ready(function () {
    showCookiesManagement = false
    $("#cookies-management").hide("fast");
});

$(function () {
    $("#cookies-dialog").dialog({
        autoOpen: true,
        buttons: {
            "אשר": function () {
                $(this).dialog("close")
            },
            "ניהול קבצי עוגיות": function () {
                if (showCookiesManagement) {
                    $("#cookies-management").hide("fast");
                    showCookiesManagement = false;
                } else {
                    $("#cookies-management").show("fast");
                    showCookiesManagement = true;
                }
            }
        },
        hide: "puff",
        show: "slide",
        width: 600
    })
});