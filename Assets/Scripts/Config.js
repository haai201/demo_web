
function toastCanhbao(mess) {
    $.toast({
        text: mess,
        showHideTransition: 'plain',
        icon: 'warning'
    })
}
function toastThanhCong(mess) {
    $.toast({
        text: mess,
        showHideTransition: 'slide',
        icon: 'success'
    })
}
function toastThatBai(mess) {
    $.toast({
        text: mess,
        showHideTransition: 'fade',
        icon: 'error'
    })
}