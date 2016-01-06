/*
*index----------表示当前页面
* next页面
* scrollWidth滚动多长
*/
var ele=document.getElementById("myhead");
ele.addEventListener('touchstart',function(e){
    alert(e.touches.length);
});
function slider(opt){
    this.option={};
    this.option.element=document.getElementById(this.option.element||'#slider');
    this.option.direction=opt.direction||'left';
    this.option.loop=opt.loop||'false';默认不循环;
    this.option.autoPlay=opt.autoPlay||'true';
    this.option.spaceTime=opt.spaceTime||3000;毫秒为单位,间隔时间;
    this.option.speed=opt.speed||1;
    this.init();
}
slider.prototype.init=function(){
    var element=this.option.element,
        direction=this.option.direction,
        scrollWidth,
        autoPlay=option.autoPlay;
    if(autoPlay){
        /*自动播放*/
    }
    else{
        /*事件触发*/
    }
}
slider.prototype.doTouch=function(){

}
slider.prototype.move=function (width,speed,ele){
    ele.style.transition='transform '+speed+'s';
    ele.style.transform='translate('+width+'px,0)';

}
