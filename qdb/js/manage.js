/**
 * Created by HYP on 2015/12/16.
 */
$(function(){
    var isdrop=0;
    /*header*/
    $('.menu').on('touchstart',function(){
        $(this).siblings('.drop-down').show();
        $('.body-cover').show();
    });
    $('.search-date').on('touchstart',function(){
        isdrop=1;
        $('.result-block .cover').show();
        $(this).children('.triangle-down').removeClass('triangle-down').addClass('triangle-up');
        $(this).children('.choose-date').show();
        $('.body-cover').show();
    });
    $('.search-state').on('touchstart',function(){
        isdrop=2;
        $('.result-block .cover').show();
        $(this).children('.triangle-down').removeClass('triangle-down').addClass('triangle-up');
        $(this).children('.choose-state').show();
        $('.body-cover').show();
    });
    $('.body-cover').on('touchstart',function () {
        if(isdrop==1){
            $('.search-date').children('.triangle-up').removeClass('triangle-up').addClass('triangle-down');
            $('.choose-date').hide();
            $('.result-block .cover').hide();
            isdrop=0;
        }
        else if(isdrop==2){
            $('.search-state').children('.triangle-up').removeClass('triangle-up').addClass('triangle-down');
            $('.choose-state').hide();
            $('.result-block .cover').hide();
            isdrop=0;
        }
        else{
            $('.ui-header .drop-down').hide();
        }
        $(this).hide();
    });
    /*日期*/
    alert($('.date-li').first().text());
    if($('.date-li').first().text().indexOf('2015.12')>0)
    {
        alert(1);
    }
});
