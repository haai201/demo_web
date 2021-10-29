$(document).ready(function () {
    $('.datepicker').datetimepicker({ format: 'DD/MM/YYYY' });
    $('.js-example-basic-single').select2();

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
})
$(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    if (windowTop) {
        $('#header').addClass('header-sticky')
        //$('#sidebar').addClass('sidebar-sticky')
    }
    else {
        $('#header').removeClass('header-sticky');
        //$('#sidebar').addClass('sidebar-sticky')
    }
    windowTop > 500 ? $('.scroll-up').addClass('show') : $('.scroll-up').removeClass('show');
    // windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
});
function loading(status) {
    if (status) {
        $("#loading-page").attr("class", "loading-page")
    } else {
        $("#loading-page").attr("class", "div-hidden")
    }
}
function showModalConfirm(action, title, content) {
    //$("#modal-confirm .modal-title").text(title)
    //$("#modal-confirm .modal-body>p").text(content)
    $("#modal-confirm .modal-footer #btn-xacnhan").attr("onclick", action)
    $("#modal-confirm").modal('show');
}
function showModalNoti(title, content) {
    $("#modal-noti .modal-title").text(title)
    $("#modal-noti .modal-body>p").text(content)
    $("#modal-noti").modal('show');
}
function showModalLoading(status, content) {
    if (status == true) {
        $(".loader .modal-body>p").text(content)
        $("#loadMe-modal").modal({
            backdrop: "static", //remove ability to close modal with click
            keyboard: false, //remove option to close with keyboard
            show: true //Display loader!
        });
    }
    else {
        $('#loadMe-modal').modal('hide');
    }

}
