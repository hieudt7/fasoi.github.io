$(function () {
    $('.Calltooltip').tooltip();
})
$(window).bind("load", function () {
    var left = $('.menu-left').height();
    var right = $('.content-right').height();
    if (left < right) {
        $('.menu-left').css('height', right);
    }
})
