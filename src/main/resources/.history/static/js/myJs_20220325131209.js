
/* ===========index/types/tags/blogs/=============== */

$('.ui.sidebar')
  .sidebar('toggle')
;

$('.m-toggle').click(function () {
    $('.m-hide-side').toggleClass('m-mobile-show')
})
// $('.m-x').click(function () {
//     $('.m-hide-side').toggleClass('m-mobile-show')
// })
$('#toTop-btn').click(function () {
    $(window).scrollTo(0, 500);
})

// 关于界面
$('.about-down').click(function () {
    $.scrollTo('.about-music', 500);
    ap.play();
})

$('.about-music-up').click(function () {
    $(window).scrollTo(0, 500);
})
$('.about-music-down').click(function () {
    $.scrollTo('.about-duu', 500);
})


$('.about-duu-up').click(function () {
    $.scrollTo('.about-music', 500);
})
$('.about-duu-down').click(function () {
    $.scrollTo('.about-duuyuu', 500);
})


$('.about-duuyuu-up').click(function () {
    $.scrollTo('.about-duu', 500);
})
$('.about-duuyuu-down').click(function () {
    $.scrollTo('.about-callme', 500);
})


$('.about-callme-up').click(function () {
    $.scrollTo('.about-duuyuu', 500);
})
$('.about-callme-down').click(function () {
    $.scrollTo(0, 500);
})


