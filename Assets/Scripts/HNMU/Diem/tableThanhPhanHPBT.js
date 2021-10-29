function OnSuccEditLHPBinhThuong(data) {
    if (data.status == 200) {
        //$("#DiemThanhPhan-modal").modal('toggle');
        toastThanhCong(data.msg)
        //$('#table-DiemThanhPhan').load('../Diem/ListDiemThanhPhan?id=' + lhpId)
    }
    else toastThatBai(data.msg)
}

function OnFailEditLHPBinhThuong() {
    toastThatBai("Đã có lỗi xảy ra vui lòng thử lại hoặc liên hệ với hỗ trợ viên để được hỗ trợ");
}