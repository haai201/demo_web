function shopLHPdetail(maHocPhan) {
    $("#infolhp").load("../ChuongTrinhDaoTao/GetDetailLopHocPhan?maHocPhan=" + maHocPhan, function (response, status, xhr) {
        var statusCode = xhr.getResponseHeader("statusCode");
        if (statusCode == '401') {
            window.location.replace("/account/login");
        }
        else if (xhr.status == 403) {

        } else {
            $("#modalInfoLHP").modal('show');
        }
    });
}

$('.hortree-wrapper').bind('wheel mousewheel', function (e) {
    var delta;

    if (e.originalEvent.wheelDelta !== undefined)
        delta = e.originalEvent.wheelDelta;
    else
        delta = e.originalEvent.deltaY * -1;

    if (delta > 0) {
        $("#main").css("width", "+=10");
    }
    else {
        $("#main").css("width", "-=10");
    }
});
