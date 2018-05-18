(function ($) {

    $.fn.simpleModal = function (options) {

        var settings = $.extend({
            title: "simpleModal",
            content: "Content",
            footer: "Footer",
            radiusBorder: true,
            fontSize: "20px"
        }, options);

        $("body").append('<div id="simpleModal" class="modal"><div class="modal-container"><div class="modal-header"><div id="header" class="w90">Header - Title</div><div class="w10"><span class="close">&times;</span></div></div><div id="content" class="modal-content"><div>Simple Content</div></div><div id="footer" class="modal-footer"><div>Footer - Notes</div></div></div></div>');

        this.click(function () {

            $("#header").html(settings.title);
            $("#content").html(settings.content);
            $("#footer").html(settings.footer);

            if (settings.radiusBorder == true) {
                $(".modal-container").css("border-radius", "25px");
            } else {
                $(".modal-container").css("border-radius", "0px");
            }

            if (settings.fontSize == "" || settings.fontSize == null) {
                $(".modal-container").css("font-size", "12px");
            } else {
                $(".modal-container").css("font-size", "" + settings.fontSize + "");
            }

            $("#simpleModal").fadeIn();

            $("body").css("position", "fixed");

        });

        $(".close").click(function () {
            $("#simpleModal").fadeOut();
            $("body").css("position", "");
        });

    };

}(jQuery));

var dw = document || window;

dw.onclick = function (event) {

    var modal = document.getElementById("simpleModal");

    if (event.target == modal) {

        $("#simpleModal").fadeOut();
        $("body").css("position", "");

    }

}