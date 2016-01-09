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
var slide=new Slider({direction:'left'});
    slide.init();
function Slider(opt){
    this.option={};
    this.option.element=document.getElementById(this.option.element||'slider');
    this.option.direction=opt.direction||'left';
    this.option.loop=opt.loop||'false';//默认不循环;
    this.option.autoPlay=opt.autoPlay||'true';
    this.option.spaceTime=opt.spaceTime||3000;//毫秒为单位,间隔时间;
    this.option.speed=opt.speed||200;
    /*this.init();*/
    this.init=function(){
        var element=this.option.element,
            direction=this.option.direction,
            scrollWidth,
            autoPlay=this.option.autoPlay;
        /*获得移动宽度*/
        this.scrollWidth=document.body.clientWidth;
        /*获得li的个数，banner个数*/
        console.log(this.option.element);
        this.size=this.option.element.children[1].children[0].children.length;
        this.index=0;
        this.slideBlock=this.option.element.children[1];
        this.slideBlock.style.width=this.scrollWidth*this.size+'px';
        this.doTouch(this.slideBlock);
    };
    this.doTouch=function(ele){
        var _this=this;
        ele.addEventListener('touchstart',function(e){
            e.preventDefault();
            console.log('start');
            var point= e.touches[0];
            _this.startX=point.pageX;
            _this.startY=point.pageY;
        });
        ele.addEventListener('touchmove',function(e){
            e.preventDefault();
            console.log('move');
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
                    if(_this.index==0&&_this.distX>0||_this.index==_this.size-1&&_this.distX<0)
                    {
                        _this.move(-_this.scrollWidth*_this.index+_this.distX*0.4,0,this);
                    }
                    else{
                        console.log('in');
                        console.log(_this.distX);
                        _this.move(-_this.scrollWidth*_this.index+_this.distX,0,this);
                    }
                }
            }
        });
        ele.addEventListener('touchend',function(e){
            e.preventDefault();
            console.log('end');
            console.log(_this.distX);
            if(Math.abs(_this.distX)>0){
                if(Math.abs(_this.distX)>_this.scrollWidth/10&&_this.distX>0){
                    console.log('>0');
                    _this.index=_this.index==0?_this.index:_this.index-1;
                }
                if(Math.abs(_this.distX)>_this.scrollWidth/10&&_this.distX<0){
                    console.log('<0');
                    _this.index=_this.index==_this.size-1?_this.index:_this.index+1;
                    console.log(_this.index);
                }
                _this.move(-_this.scrollWidth*_this.index,_this.option.speed,this);
            }
        });
    };
    this.move=function (width,speed,ele){
        ele.style.transition='transform '+speed+'ms';
        ele.style.transform='translate('+width+'px,0)';

    };
}
/*Slider.prototype.init = function(){
    var element=this.option.element,
        direction=this.option.direction,
        scrollWidth,
        autoPlay=option.autoPlay;
    /!*获得移动宽度*!/
    this.scrollWidth=document.body.clientWidth;
    /!*获得li的个数，banner个数*!/
    this.size=this.option.element.children[1].children[0].children.length;
    this.index=0;
    this.slideBlock=this.option.element.children[1];
    this.slideBlock.style.width=this.scrollWidth*this.size+'px';
    this.doTouch(this.slideBlock);
};
Slider.prototype.doTouch=function(ele){
    var _this=this;
    ele.addEventListener('touchstart',function(e){
        console.log('start');
        var point= e.touches[0];
        _this.startX=point.pageX;
        _this.startY=point.pageY;
    });
    ele.addEventListener('touchMove',function(e){
        console.log('move');
        if(e.touches.length>1|| e.scale&& e.scale!==1){
            return;
        }
        else{
            var point= e.touches[0];
            _this.distX=point.pageX-_this.startX;
            _this.distY=point.pageY-_this.startY;
            /!*手指移动了距离*!/
            if(Math.abs(_this.distX)>0){
                /!*获得高度，先计算即将显示的内容的index*!/
                if(_this.index==0&&_this.distX>0||_this.index==_this.size-1&&_this.distX<0)
                {
                    _this.move(_this.scrollWidth*_this.index+_this.distX*0.4,_this.option.speed,this);
                }
                else{
                    _this.move(_this.scrollWidth*_this.index+_this.distX,_this.option.speed,this);
                }
            }
        }
    });
    ele.addEventListener('touchEnd',function(e){
        console.log('end');
        if(Math.abs(_this.distX)>0){
            if(Math.abs(_this.distX)>_this.scrollWidth/10&&_this.distX>0){
                index=index==0?index:index-1;
            }
            if(Math.abs(_this.distX)>_this.scrollWidth/10&&_this.distX<0){
                index=index==_this.size-1?index:index+1;
            }
            _this.move(_this.scrollWidth*_this.index+_this.distX,_this.option.speed,this);
        }
    });
}
Slider.prototype.move=function (width,speed,ele){
    ele.style.transition='transform '+speed+'s';
    ele.style.transform='translate('+width+'px,0)';

}*/
