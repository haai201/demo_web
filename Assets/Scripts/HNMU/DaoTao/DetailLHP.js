$(document).ready(function () {
    $('#datepickerBD').datetimepicker({ format: 'DD/MM/YYYY' });
    $('#datepickerKT').datetimepicker({ format: 'DD/MM/YYYY' });
    $('.js-example-basic-single').select2();
    $("#btnSaveLHPType").on("click", function () {
        $('#editLopHocPhanForm').submit()
        changeTypeHP()
    })
});

function changeTypeHP() {
    if ($('input[name=IsHocPhanThucHanh]:checked').val() == 0) {
        $("#MoTaType").text('*Học phần tiêu chuẩn sẽ có 2 điểm thành phần: Chuyên cần(10%) - kiểm tra(30%).')
        $("#div_tableLoaiThanhPhan").load("../Diem/tableThanhPhanHPBT?id=" + lhpId)
    }
    else {
        $("#MoTaType").text('*Học phần thực hành: Học phần này sẽ có các bài kiểm tra thực hành, điểm cuối cùng sẽ là TBC của các bài kiểm tra.')
        $("#div_tableLoaiThanhPhan").load("../Diem/tableThanhPhanHPTH?id=" + lhpId)
    }
}

function OnSuccTKB(data) {

    if (data.status == 200) {
        toastThanhCong(data.msg)
        getTKB()
    }
    else {
        toastThatBai(data.msg)
    }
}

function OnFailTKB() {
    toastThatBai("Đã có lỗi xảy ra vui lòng thử lại hoặc liên hệ với hỗ trợ viên để được hỗ trợ");
}

function getTKB() {
    $("#table-tkb").load("../DaoTao/ListTKB?id=" + lhpId)
}

$('input[name=IsHocPhanThucHanh]').change(function () {
    changeTypeHP()
});

function DelTKB(id) {
    $.ajax({
        type: "POST",
        url: "../DaoTao/DeleteTKB",
        data: { id: id },
        dataType: "json",
        success: function (data, status, xhr) {
            if (data.status == 200) {
                toastThanhCong(data.msg)
                getTKB()
            }
            else {
                toastThatBai(data.msg)
            }
        },
        error: function () {
            toastThatBai("Đã có lỗi xảy ra vui lòng thử lại hoặc liên hệ với hỗ trợ viên để được hỗ trợ");
        }
    });
}