/**
 * Created by HYP on 2015/12/16.
 */
$(function(){
    /*header*/
    $('.menu').on('touchstart',function(){
        $(this).siblings('.drop-down').show();
        $('.body-cover').show();
    });
    $('.body-cover').on('touchstart',function () {
        $('.ui-header .drop-down').hide();
        $(this).hide();
    })
    /*+收缩*/
    $('.info').on('touchstart',function(){
        var isplus=$(this).children('.plus').text();
        if(isplus=='+') {
            $(this).children('.plus').text('-');
            $(this).siblings('.form-block').show();
        }
        else{
            $(this).children('.plus').text('+');
            $(this).siblings('.form-block').hide();
        }
    });
    /*tab切换*/
    $('.tab-block .tab').on('touchstart',function(){
        var tab=$(this).hasClass('tab1');
        $(this).addClass('active').siblings('.tab').removeClass('active');
        if(tab){
            $('form[name=personal]').show();
            $('form[name=company]').hide();
        }
        else{
            $('form[name=company]').show();
            $('form[name=personal]').hide();
        }
    });
});
