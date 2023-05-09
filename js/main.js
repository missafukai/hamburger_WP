//メニューの表示・非表示
$(function(){
    $('#js-menu').click(function(){
        $('.l-menu').addClass('active');
        $('.u-bg--grey').fadeIn('fast');
    });
});

$(function(){
    $('#js-close, .u-bg--grey').click(function(){
        $('.l-menu').removeClass('active');
        $('.u-bg--grey').fadeOut('fast');
    });
});

//画面幅が変わったときにメニューをリセット
$(window).on('resize', function() {
    $('.l-menu').removeClass('active');
    $('.u-bg--grey').hide();
});
