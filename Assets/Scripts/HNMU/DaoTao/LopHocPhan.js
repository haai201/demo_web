
function sortAlpha(value) {
    if (value === 0) {
        $("#SortType").val(0);
        $("#btnSortAlpha").attr("onclick", "sortAlpha(1)")
        $("#btnSortAlpha").html('<i class="fas fa-sort-alpha-down-alt"></i>');
        getListLHP();
        
    }
    else {
        $("#SortType").val(1);
        $("#btnSortAlpha").attr("onclick", "sortAlpha(0)")
        $("#btnSortAlpha").html('<i class="fas fa-sort-alpha-up"></i>');
        getListLHP();
    }
}

function getListLHP() {
    //showModalLoading(true, "Đang tải dữ liệu, vui lòng đợi...")
    $("#loadMe-modal").modal({
        backdrop: "static", //remove ability to close modal with click
        keyboard: false, //remove option to close with keyboard
        show: true //Display loader!
    });
    /*var searchTenLHP = (encodeURI($("#searchTenLHP").val()) === "undefined") ? "" : encodeURI($("#searchTenLHP").val());
    var searchHocPhan = (encodeURI($("#searchHocPhan").val()) === "undefined") ? "" : encodeURI($("#searchHocPhan").val());
    var searchGiangVien = (encodeURI($("#searchGiangVien").val()) === "undefined") ? "" : encodeURI($("#searchGiangVien").val());
    var searchHocKy = (encodeURI($("#searchHocKy").val()) === "undefined") ? "" : encodeURI($("#searchHocKy").val());
    var searchNamHoc = (encodeURI($("#searchNamHoc").val()) === "undefined") ? "" : encodeURI($("#searchNamHoc").val());
    var searchMoTa = (encodeURI($("#searchMoTa").val()) === "undefined") ? "" : encodeURI($("#searchMoTa").val());
    var searchHanKetThucNhapDiem = (encodeURI($("#searchHanKetThucNhapDiem").val()) === "undefined") ? "" : encodeURI($("#searchHanKetThucNhapDiem").val());
    var searchCreateAt = (encodeURI($("#searchCreateAt").val()) === "undefined") ? "" : encodeURI($("#searchCreateAt").val());
    var searchUpdateAt = (encodeURI($("#searchUpdateAt").val()) === "undefined") ? "" : encodeURI($("#searchUpdateAt").val());
    $("#LHP-table").load("../DaoTao/ListLopHocPhan?isASC=" + $("#SortType").val() + "&sortBy=" + $('input[name=sortBy]:checked').val() + "&page=" + page + "&size=" + $("#size").val()
        + "&searchTenLHP=" + searchTenLHP + "&searchHocPhan=" + searchHocPhan + "&searchGiangVien=" + searchGiangVien + "&searchHocKy=" + searchHocKy
        + "&searchNamHoc=" + searchNamHoc + "&searchMoTa=" + searchMoTa + "&searchHanKetThucNhapDiem=" + searchHanKetThucNhapDiem + "&searchCreateAt=" + searchCreateAt + "&searchUpdateAt=" + searchUpdateAt + "&searchChanged=" + searchChanged,
        function (response, status, xhr) {
            //showModalLoading(false, "")
            $('#loadMe-modal').modal('hide');
        }
    );*/
    $("#LHP-table").load("/DaoTao/ListLopHocPhan", {
        "isASC": $("#SortType").val(), "sortBy": $('#sortBy').val(), "page": page, "size": $("#size").val()
        , "searchTenLHP": $("#searchTenLHP").val(), "searchHocPhan": $("#searchHocPhan").val(), "searchGiangVien": $("#searchGiangVien").val(), "searchHocKy": $("#searchHocKy").val()
        , "searchNamHoc": $("#searchNamHoc").val(), "searchMoTa": $("#searchMoTa").val()
        , "searchHanKetThucNhapDiemTu": $("#searchHanKetThucNhapDiemTu").val(), "searchHanKetThucNhapDiemDen": $("#searchHanKetThucNhapDiemDen").val()
        , "searchCreateAtTu": $("#searchCreateAtTu").val(), "searchCreateAtDen": $("#searchCreateAtDen").val()
        , "searchUpdateAtTu": $("#searchUpdateAtTu").val(), "searchUpdateAtDen": $("#searchUpdateAtDen").val(), "searchChanged": searchChanged
    }, function (response, status, xhr) {
        //showModalLoading(false, "")
        $('#loadMe-modal').modal('hide');
    });

}

function DatLaiTimKiem() {
    $("#searchTenLHP").val("").change()
    $("#searchHocPhan").val("").change()
    $("#searchGiangVien").val("").change()
    $("#searchHocKy").val("").change()
    $("#searchNamHoc").val("").change()
    $("#searchMoTa").val("")
    $("#searchHanKetThucNhapDiemTu").val("")
    $("#searchHanKetThucNhapDiemDen").val("")
    $("#searchCreateAtTu").val("")
    $("#searchCreateAtDen").val("")
    $("#searchUpdateAtTu").val("")
    $("#searchUpdateAtDen").val("")
    timKiem()
}

function CreateLopHocPhan() {
    $('#spinLoading').toggleClass("d-block")

    $("#LHP-modal-lg-content").load("../DaoTao/CreateLopHocPhan", function (response, status, xhr) {
        if (xhr.status != 200) {
            toastThatBai("Đã có lỗi xảy ra khi lấy dữ liệu!")
        }
        else {
            $("#LHP-modal-lg").modal({ backdrop: 'static', keyboard: false })
        }
        $('#spinLoading').toggleClass("d-block")
    })  
}

function EditLopHocPhan(id) {
    $('#spinLoading').toggleClass("d-block")
    
    $("#LHP-modal-lg-content").load("../DaoTao/EditLopHocPhan?id=" + id, function (response, status, xhr) {
        if (xhr.status != 200) {
            toastThatBai("Đã có lỗi xảy ra khi lấy dữ liệu!")
        }
        else {
            $("#LHP-modal-lg").modal({ backdrop: 'static', keyboard: false })
        }
        $('#spinLoading').toggleClass("d-block")
    })  
}

function getDetailLHP(id) {
    $('#spinLoading').toggleClass("d-block")

    $("#LHP-modal-lg-content").load("../DaoTao/DetailLHP?id=" + id, function (response, status, xhr) {
        if (xhr.status != 200) {
            toastThatBai("Đã có lỗi xảy ra khi lấy dữ liệu!")
        }
        else {
            $("#LHP-modal-lg").modal({ backdrop: 'static', keyboard: false })
        }
        $('#spinLoading').toggleClass("d-block")
    })
}

function DelLHP() {
    var data = new Array();

    $("input[name='listdel']:checked").each(function () {
        data.push($(this).val());
    });

    if (data.length < 1) {
        toastCanhbao("Không có lớp học phần nào được chọn!");
    }
    else {
        $.ajax({
            type: "POST",
            url: "../DaoTao/DeleteLopHocPhan",
            data: { id: data },
            dataType: "json",
            success: function (data, status, xhr) {
                if (data.status) {
                    toastThanhCong(data.msg)
                    getListLHP()
                }
                else {
                    toastThatBai(data.msg)
                }
                
            },
            error: function () {
                toastThatBai("Đã có lỗi xảy ra vui lòng thử lại hoặc liên hệ với hỗ trợ viên để được hỗ trợ!");
            }
        });
    }


}

function timKiem() {
    searchChanged = true;
    getListLHP()
}