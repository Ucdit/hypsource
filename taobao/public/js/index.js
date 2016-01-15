/*
*index----------表示当前页面
* next页面
* scrollWidth滚动多长
* 先默认宽度为屏幕宽度
* 2016.1.5添加新功能----自动播放
*/
var ele=document.getElementById("myhead");
ele.addEventListener('touchstart',function(e){
    alert(e.touches.length);
});
var slide=new Slider({direction:'left',loop:false});
    slide.init();
function Slider(opt){
    this.option={};
    this.option.element=document.getElementById(this.option.element||'slider');
    this.option.direction=opt.direction||'left';
    this.option.loop=opt.loop||false;//默认不循环;
    this.option.autoPlay=opt.autoPlay||true;
    this.option.spaceTime=opt.spaceTime||3000;//毫秒为单位,间隔时间;
    this.option.speed=opt.speed||200;
    this.autoClear=null;
    /*this.init();*/
    this.init=function(){
        var element=this.option.element,
            direction=this.option.direction,
            scrollWidth,
            autoPlay=this.option.autoPlay;
        /*获得移动宽度*/
        this.scrollWidth=document.body.clientWidth;
        /*获得li的个数，banner个数*/
        this.size=this.option.element.children[1].children[0].children.length;
        this.dotLi=this.option.element.children[0].children[0].children;
        this.index=0;
        this.addEle(this.option.loop);
        this.slideBlock=this.option.element.children[1];
        this.slideBlock.style.width=this.scrollWidth*this.slideBlock.children[0].children.length+'px';
        if(this.option.loop){
            this.move(-this.scrollWidth,0,this.slideBlock);
        }
        this.doTouch(this.slideBlock);
        if(this.option.autoPlay){
            this.autoGo();
        }
    };
    /*循环添加前后li项*/
    this.addEle=function(isLoop){
        var ul=this.option.element.children[1].children[0];
        var li=ul.children;
        if(isLoop){
            ul.insertBefore(li[this.size-1].cloneNode(true),li[0]);
            ul.appendChild(li[1].cloneNode(true));
        }
    };
    /*事件处理*/
    this.doTouch=function(ele){
        var _this=this;
        ele.addEventListener('touchstart',function(e){
            e.preventDefault();
            var point= e.touches[0];
            _this.startX=point.pageX;
            _this.startY=point.pageY;
        });
        ele.addEventListener('touchmove',function(e){
            clearInterval(_this.autoClear);
            e.preventDefault();
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
                    if(!_this.option.loop&&(_this.index==0&&_this.distX>0||_this.index==_this.size-1&&_this.distX<0))
                    {
                        _this.option.loop?_this.move(-_this.scrollWidth*(_this.index+1)+_this.distX*0.4,0,this):_this.move(-_this.scrollWidth*_this.index+_this.distX*0.4,0,this);
                    }
                    else{
                       _this.option.loop? _this.move(-_this.scrollWidth*(_this.index+1)+_this.distX,0,this):_this.move(-_this.scrollWidth*_this.index+_this.distX,0,this);
                    }
                }
            }
        });
        ele.addEventListener('touchend',function(e){
            var me=this;
            e.preventDefault();
            _this.play(me);
            _this.autoGo();
        });
    };
    this.play=function(me){
        console.log(this.index);
        var _this=this;
        if(Math.abs(_this.distX)>0){
            if(Math.abs(_this.distX)>_this.scrollWidth/10&&_this.distX>0){
                if(_this.option.loop){
                    _this.index=_this.index==0?_this.size-1:_this.index-1;
                    //_this.index=_this.index==0?_this.index:_this.index-1;
                    //_this.index==_this.size-1?setTimeout(function(){_this.move(-_this.scrollWidth*_this.size,0,me)},_this.option.speed):_this.move(-_this.scrollWidth*(_this.index+1),_this.option.speed,this);
                    if(_this.index==_this.size-1){
                        _this.move(0,_this.option.speed,me);
                        setTimeout(function(){_this.move(-_this.scrollWidth*_this.size,0,me)},_this.option.speed);
                    }else{
                        _this.move(-_this.scrollWidth*(_this.index+1),_this.option.speed,me)
                    }
                    /*doted*/
                    _this.dotted(_this.dotLi,_this.index);
                }
                else{
                    _this.index=_this.index==0?_this.index:_this.index-1;
                    _this.move(-_this.scrollWidth*_this.index,_this.option.speed,me);
                    /*doted*/
                    _this.dotted(_this.dotLi,_this.index);
                }
            }
            if(Math.abs(_this.distX)>_this.scrollWidth/10&&_this.distX<0){
                if(_this.option.loop){
                    _this.index=_this.index==_this.size-1?0:_this.index+1;
                    //_this.move(-_this.scrollWidth*(_this.index+1),_this.option.speed,this)
                    //_this.index==0?setTimeout(function(){_this.move(-_this.scrollWidth,0,me)},_this.option.speed):'';
                    if(_this.index==0){
                        _this.move(-_this.scrollWidth*(_this.size+1),_this.option.speed,me);
                        setTimeout(function(){_this.move(-_this.scrollWidth,0,me)},_this.option.speed);
                    }else{
                        _this.move(-_this.scrollWidth*(_this.index+1),_this.option.speed,me)
                    }
                    /*doted*/
                    _this.dotted(_this.dotLi,_this.index);
                }
                else{
                    _this.index=_this.index==_this.size-1?_this.index:_this.index+1;
                    _this.move(-_this.scrollWidth*_this.index,_this.option.speed,me);
                    /*doted*/
                    _this.dotted(_this.dotLi,_this.index);
                }
            }
        }
    };
    this.autoGo=function(){
        var _this=this;
        this.autoClear=setInterval(function(){
            /*判断是不是循环播放，，根据index*/
            _this.distX=-_this.scrollWidth/4;
            _this.play(_this.slideBlock);
        },this.option.spaceTime);
    };
    this.move=function (width,speed,ele){
        ele.style.transition='transform '+speed+'ms';
        ele.style.transform='translate('+width+'px,0)';

    };
    this.dotted=function(lis,index){
        var name_id;
        /*把当前active的元素的active去掉*/
        for(var i=0;i<lis.length;i++){
            name_id=this.hasClass(lis[i],'active');
            if(name_id===false){
                continue;
            }
            else{
                this.removeClass(lis[i],name_id,'active');
            }
        }
        /*为当前index加上active*/
        lis[index].className+=' active';

    };
    this.hasClass=function(ele,classname){
        var name=ele.className.split(' ');
        if(name.length==1){
            return name[0]==classname?0:false;
        }
        else{
            for(var i=0;i<name.length;i++){
                if(name[i]==classname){
                    return i;
                }
            }
            return false;
        }
    }
    this.removeClass=function(ele,i,className){
        var name=ele.className.split(' ');
        name[i]='';
        name=name.join(" ");
        ele.className=name;
    }
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
