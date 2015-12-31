/**
 * Created by HYP on 2015/12/16.
 */
$(function(){
    var isdrop= 0,date='全部',state='全部';
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
    $('.choose-date ul li').on('touchstart',function(){
        $('.search-date').children('.triangle-up').removeClass('triangle-up').addClass('triangle-down');
        date=$(this).text();
        $('.choose-date').hide();
        $('.result-block .cover').hide();
        $('.body-cover').hide();
        $('.item-head ul').each(function(index,el){
            //console.log($(this).text().substring(0,7));
            if(date!='全部'&&date!=$(this).find('.date-li').text().substring(0,7)){
                $(this).parents('.item').hide();
            }
            else if(state!='全部'&&state!=$(this).find('li').last().text().substring(0,7)){
                $(this).parents('.item').hide();
            }
            else{
                $(this).parents('.item').show();
            }
        });
    });
    $('.choose-state ul li').on('touchstart',function(){
        $('.search-state').children('.triangle-up').removeClass('triangle-up').addClass('triangle-down');
        state=$(this).text();
        $('.choose-state').hide();
        $('.result-block .cover').hide();
        $('.body-cover').hide();
        $('.item-head ul').each(function(index,el){
            //console.log($(this).text().substring(0,7));
            if(date!='全部'&&date!=$(this).find('.date-li').text().substring(0,7)){
                $(this).parents('.item').hide();
            }
            else if(state!='全部'&&state!=$(this).find('li').last().text().substring(0,7)){
                $(this).parents('.item').hide();
            }
            else{
                $(this).parents('.item').show();
            }
        });
    });
    /*记录下拉*/
    $('.item .item-head ul li:last-child').on('touchstart',function(){
        var item=$(this).parents('.item').children('.item-body');
        if(item.hasClass('hide'))
        {
            item.removeClass('hide');
        }
        else{
            item.addClass('hide');
        }
    });
});
