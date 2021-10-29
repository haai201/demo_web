$(document).ready(function () {
    $('#datepickerKTND').datetimepicker({ format: 'DD/MM/YYYY' });
    $('.js-example-basic-single').select2();
    var d = new Date();
    var m = d.getMonth();
    m++;
    if (m < 8) {
        $("#cmbNamHoc").val(d.getFullYear() - 1).change();
    }
    else {
        $("#cmbNamHoc").val(d.getFullYear()).change();
    }
    
    if (m >= 8 && m <= 12) {
        $("#cmbHocKy").val("1").change();
    }
    else if (m >= 1 && m <= 5) {
        $("#cmbHocKy").val("2").change();
    }
    else {
        $("#cmbHocKy").val("3").change();
    }
});

function OnSuccCreateLopHocPhan(data) {
    if (data.status == 200) {
        $("#LHP-modal-lg").modal("hide");
        toastThanhCong(data.msg)
        getListLHP();
    }
    else {
        toastThatBai(data.msg)
    }
}

function OnFailCreateLopHocPhan() {
    toastThatBai("Đã có lỗi xảy ra vui lòng thử lại hoặc liên hệ với hỗ trợ viên để được hỗ trợ");
}