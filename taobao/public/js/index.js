/*
*index----------表示当前页面
* next页面
* scrollWidth滚动多长
* 先默认宽度为屏幕宽度
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
    /*获得移动宽度*/
    this.scrollWidth=document.body.clientWidth;
    /*获得li的个数，banner个数*/
    this.size=this.option.element.children[1].children[0].children.length;
    this.index=0;
    if(autoPlay){
        /*自动播放*/
    }
    else{
        /*事件触发*/
    }
}
slider.prototype.doTouch=function(ele){
    var _this=this;
    ele.addEventListener('touchstart',function(e){
        var point= e.touches[0];
        _this.startX=point.pageX;
        _this.startY=point.pageY;
    });
    ele.addEventListener('touchMove',function(e){
        if(e.touches.length>1|| e.scale&& e.scale!==1){
            return;
        }
        else{
            var point= e.touches[0];
            _this.distX=point.pageX-_this.startX;
            _this.distY=point.pageY-_this.startY;
            /*手指移动了距离*/
            if(Math.abs(_this.distX)>0){
                /*获得高度，先计算即将显示的内容的index*/
                _this.move(_this.scrollWidth*_this.index+_this.distX,_this.option.speed,this);
            }
        }
    });
    ele.addEventListener('touchEnd',function(e){
        if(Math.abs(_this.distX)>0){
            if(Math.abs(_this.distX)>_this.scrollWidth/10&&_this.distX>0){
                index=index==0?index:index-1;
            }
            if(Math.abs(_this.distX)>_this.scrollWidth/10&&_this.distX<0){
                index=index==_this.size-1?index:index+1;
            }
        }
    });
}
slider.prototype.getIndex=function(dist){
    if(dist<0){
        this.index+=1;
    }
}
slider.prototype.play=function(){

}
slider.prototype.move=function (width,speed,ele){
    ele.style.transition='transform '+speed+'s';
    ele.style.transform='translate('+width+'px,0)';

}
