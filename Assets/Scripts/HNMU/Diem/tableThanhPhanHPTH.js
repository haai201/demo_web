function checkConditions(obj) {

    var chb = $(".BKT")
    if (obj == 1) {
        if (!chb[0].checked && chb[1].checked) {
            chb[0].checked = true;
            toastCanhbao( "Để bỏ chọn thành phần kiểm tra 1 vui lòng bỏ chọn kiểm tra 2 trước");
        }
    }
    else if (obj == 2) {
        if (chb[1].checked && !chb[0].checked) {
            chb[1].checked = false;
            toastCanhbao("Để chọn thành phần kiểm tra 2 vui lòng chọn kiểm tra 1 trước");
        }
        else if (!chb[1].checked && chb[2].checked) {
            chb[1].checked = true;
            toastCanhbao("Để bỏ chọn thành phần kiểm tra 2 vui lòng bỏ chọn kiểm tra 3 trước");
        }
    }
    else if (obj == 3) {
        if (chb[2].checked && !chb[1].checked) {
            chb[2].checked = false;
            toastCanhbao( "Để chọn thành phần kiểm tra 3 vui lòng chọn kiểm tra 2 trước");
        }
        else if (!chb[2].checked && chb[3].checked) {
            chb[2].checked = true;
            toastCanhbao("Để bỏ chọn thành phần kiểm tra 3 vui lòng bỏ chọn kiểm tra 4 trước");
        }
    }
    else if (obj == 4) {
        if (chb[3].checked && !chb[2].checked) {
            chb[3].checked = false;
            toastCanhbao("Để chọn thành phần kiểm tra 4 vui lòng chọn kiểm tra 3 trước");
        }
        else if (!chb[3].checked && chb[4].checked) {
            chb[3].checked = true;
            toastCanhbao("Để bỏ chọn thành phần kiểm tra 4 vui lòng bỏ chọn kiểm tra 5 trước");
        }
    }
    else if (obj == 5) {
        if (chb[4].checked && !chb[3].checked) {
            chb[4].checked = false;
            toastCanhbao("Để chọn thành phần kiểm tra 5 vui lòng chọn kiểm tra 4 trước");
        }
    }
}

function OnSucctableThanhPhanHPTH(data) {
    if (data.status == 200) {
        /*$("#DiemThanhPhan-modal").modal('toggle');
        $('#table-DiemThanhPhan').load('../Diem/ListDiemThanhPhan?id=@Model.Id')*/
        toastThanhCong(data.msg)
    }
    else {
        toastThatBai(data.msg)
    }
}

function OnFailtableThanhPhanHPTH() {
    toastThatBai("Đã có lỗi xảy ra vui lòng thử lại hoặc liên hệ với hỗ trợ viên để được hỗ trợ");
}

(function ($) {
    $.fn.inputFilter = function (inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            } else {
                this.value = "";
            }
        });
    };
}(jQuery));
$(".currencyTextBox").inputFilter(function (value) {
    return /^-?\d*[,]?\d{0,2}$/.test(value);
});