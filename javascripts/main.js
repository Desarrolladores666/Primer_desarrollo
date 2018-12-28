$(document).ready(()=>{
    $('#btnResponsive').on('click',()=>{
        $('#menu').slideToggle();
    })
///////////////////////////////////////
//GALERIA
///////////////////////////////////////
let n = 0;
const arrayOfImages = $('.images');
for(let i=1;i<arrayOfImages.length;i++){
    arrayOfImages[i].style.display = 'none';
}
$('.control-angle').on('mouseenter',event=>{
    $(event.currentTarget).addClass('animated pulse infinite');
})
$('.control-angle').on('mouseleave',event=>{
    $(event.currentTarget).removeClass('animated pulse infinite');
})
$('#next').on('click',()=>{
    $('.images:eq('+n+')').hide();
    n++
    if(n>=arrayOfImages.length){n=0};
    $('.images:eq('+n+')').show();
});
$('#back').on('click',()=>{
    $('.images:eq('+n+')').hide();
    n--
    if(n<0){n=arrayOfImages.length-1};
    $('.images:eq('+n+')').show();
});
})
///////////////////////////////////////
//GO TO TOP
///////////////////////////////////////
let go2Top = $('#go2Top');
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        go2Top.fadeIn();
    } else {
        go2Top.fadeOut();
    }
});
go2Top.click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;
});