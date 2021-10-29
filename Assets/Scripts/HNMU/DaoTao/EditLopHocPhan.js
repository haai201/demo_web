$(document).ready(function () {
    $('#datepickerKTND').datetimepicker({ format: 'DD/MM/YYYY' });
    $('.js-example-basic-single').select2();
});

function OnSuccEditLopHocPhan(data) {
    
    if (data.status == 200) {
        $("#LHP-modal-lg").modal("hide");
        toastThanhCong(data.msg)
        getListLHP();
    }
    else {
        toastThatBai(data.msg)
    }
}

function OnFailEditLopHocPhan() {
    toastThatBai("Đã có lỗi xảy ra vui lòng thử lại hoặc liên hệ với hỗ trợ viên để được hỗ trợ!");
}