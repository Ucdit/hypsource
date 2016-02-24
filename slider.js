/*author hyp
* 2016.1.5添加新功能----自动播放
* 2016.2.15修改之后可以让滑块滑动，只要修改index就可以了,扩展功能思路清晰
* 2016.2.17
* 修改之后可以设置垂直滚动或者水平滚动
* 进入每一屏幕，如果有设置函数，就执行相应函数，完成相应操作
*/
function Slider(opt){
    this.option={};
    this.option.element=document.getElementById(this.option.element||'slider');
    this.option.direction=opt.direction||'horizon';//orientation,horizon
    this.option.loop=opt.loop||false;//默认不循环;
    this.option.autoPlay=opt.autoPlay||true;
    this.option.spaceTime=opt.spaceTime||3000;//毫秒为单位,间隔时间;
    this.option.speed=opt.speed||200;
    this.autoClear=null;
    this.option.prevCell=opt.prevCell ||"prev-btn"; // 前一页按钮,穿入的prevCell等穿.aaa,id选择器
    this.option.nextCell=opt.nextCell ||"next-btn"; // 后一页按钮
    this.option.startFun=opt.startFun;//startFun(index,num)
    /*this.init();*/
    this.init=function(){
        /*在开头声明变量，避免作用域提升*/
        var element=this.option.element,
            direction=this.option.direction,
            scrollWidth,
            autoPlay=this.option.autoPlay,
            eachLi,
            liNum;
        /*获得移动宽度*/
        this.width=this.option.element.clientWidth;
        this.height=this.option.element.clientHeight;
        this.scrollDist=direction=='horizon'?this.width:this.height;
        /*获得li的个数，banner个数*/
        this.size=this.option.element.children[1].children[0].children.length;
        this.dotLi=this.option.element.children[0].children[0].children;
        this.index=0;
        this.addEle(this.option.loop);
        this.slideBlock=this.option.element.children[1];
        eachLi=this.slideBlock.getElementsByTagName('li');
        liNum=eachLi.length;
        for(var i=0;i<liNum;i++)
        {
            if(direction=='horizon'){
                eachLi[i].style.width=this.width+'px';
            }
            else{
                eachLi[i].style.height=this.height+'px';
            }
        }
        /*根据滑动方向，设置宽度或高度*/
        if(direction=='horizon'){
            this.slideBlock.style.width=this.scrollDist*this.slideBlock.children[0].children.length+'px';
        }
        else{
            this.slideBlock.style.height=this.scrollDist*this.slideBlock.children[0].children.length+'px';
        }
        if(this.option.loop){
            this.move(-this.scrollDist,0,this.slideBlock);
        }
        this.doTouch(this.slideBlock);
        if(this.option.autoPlay){
            this.autoGo();
        }
        this.dotChange();
        this.prev();
        this.next();
        /*首屏startFun执行*/
        this.doStartFun();
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
                _this.dist=_this.option.direction=='horizon'?_this.distX:_this.distY;
                if(Math.abs(_this.dist)>0){
                    /*不是循环，第一屏和最后一屏，继续滑动，距离变化比较慢
                    *是循环第一屏和最后一屏正常速度滑动
                    */
                    if(!_this.option.loop&&(_this.index==0&&_this.dist>0||_this.index==_this.size-1&&_this.dist<0))
                    {
                        /*不是循环且首尾屏，移动过程速度减慢*/
                        _this.move(-_this.scrollDist*_this.index+_this.dist*0.4,0,this);
                    }
                    else{
                       _this.option.loop? _this.move(-_this.scrollDist*(_this.index+1)+_this.dist,0,this):_this.move(-_this.scrollDist*_this.index+_this.dist,0,this);
                    }
                }
            }
        });
        ele.addEventListener('touchend',function(e){
            var me=this;
            e.preventDefault();
            clearInterval(_this.autoClear);
            if(Math.abs(_this.dist)>_this.scrollDist/10){
                _this.dist>0?_this.index--:_this.index++;
            }
            _this.play(me,true);
            if(_this.option.autoPlay){
                _this.autoGo();
            }
        });
        /*ele.addEventListener('webkitTransitionEnd',function(e){
            _this.doStartFun();
        });*/
    };
    this.doStartFun=function(){
        if(this.option.startFun&&typeof this.option.startFun=='function'){
            this.option.startFun(this.index,this.size);
        }
    };
    /*isTouch：区分自动播放，或者人为滑动*/
    this.play=function(me,isTouch){
        var _this=this;
        console.log('play');
        /*-------------------------------*/
        switch(_this.option.loop){
            /*循环*/
            case true:
                /*改变index不放在外面的原因：index==0有两种情况，一种是1-->0,一种是_this.size-1--->0,最后一种特殊*/
                /*if(_this.index<0){
                 _this.index=_this.size-1;
                 }
                 else if(_this.index>=_this.size){
                 _this.index=0;
                 }*/
                if(_this.index==_this.size){
                    _this.index=0;
                    _this.move(-_this.scrollDist*(_this.size+1),_this.option.speed,me);
                    setTimeout(function(){_this.move(-_this.scrollDist,0,me)},_this.option.speed);
                }else if(_this.index==-1){
                    _this.index=_this.size-1;
                    _this.move(0,_this.option.speed,me);
                    setTimeout(function(){_this.move(-_this.scrollDist*_this.size,0,me)},_this.option.speed);
                }else{
                    _this.move(-_this.scrollDist*(_this.index+1),_this.option.speed,me)
                }
                break;
            /*不循环*/
            case false:
                if(_this.index<0){
                    _this.index=isTouch?0:_this.size-1;
                }
                else if(_this.index>=_this.size){
                    _this.index=isTouch?_this.size-1:0;
                }
                console.log(_this.index);
                _this.move(-_this.scrollDist*_this.index,_this.option.speed,me);
                break;
            default:
                break;
        }
        /*doted*/
        _this.dotted(_this.dotLi,_this.index);
        /*-------------------------------*/
        /*切屏之后马上执行相应函数*/
        setTimeout(_this.doStartFun.call(_this),_this.option.speed);
        //_this.doStartFun();
    };
    this.autoGo=function(){
        var _this=this;
        this.autoClear=setInterval(function(){
            /*判断是不是循环播放，根据index*/
            _this.index++;
            _this.play(_this.slideBlock,false);
        },this.option.spaceTime);
    };
    this.move=function (width,speed,ele){
        ele.style.transition='transform '+speed+'ms';
        if(this.option.direction=='horizon'){
            ele.style.transform='translate('+width+'px,0)';
        }
        else{
            ele.style.transform='translate(0,'+width+'px)';
        }

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
    };
    this.removeClass=function(ele,i,className){
        var name=ele.className.split(' ');
        name[i]='';
        name=name.join(" ");
        ele.className=name;
    };
    /*小点的点击事件*/
    this.dotChange=function(){
        var _this=this;
        for(var i= 0;i<this.size;i++){
            (function(i){
                _this.dotLi[i].addEventListener('click',function(e){
                    clearInterval(_this.autoClear);
                    _this.index=i;
                    /*if(_this.index>=i){
                        _this.index=i==_this.size-1?_this.size:i+1;
                    }
                    else if(_this.index<i){
                        _this.index=i==0?0:i-1;
                    }*/
                    /*需要重新写移动的距离move*/
                    _this.play(_this.slideBlock,false);
                    if(_this.option.autoPlay){
                        _this.autoGo();
                    }
                });
            })(i);
        }
    };
    /*上一个*/
    this.prev=function(){
        var _this=this;
        var prevBtn=document.getElementById(this.option.prevCell);
        prevBtn.addEventListener('touchstart',function(e){
            clearInterval(_this.autoClear);
            _this.index--;
            _this.play(_this.slideBlock,false);
            if(_this.option.autoPlay){
                _this.autoGo();
            }
        });
    };
    /*下一个*/
    this.next=function(){
        var _this=this;
        var nextBtn=document.getElementById(this.option.nextCell);
        nextBtn.addEventListener('touchstart',function(e){
            clearInterval(_this.autoClear);
            _this.index++;
            _this.play(_this.slideBlock,false);
            if(_this.option.autoPlay){
                _this.autoGo();
            }
        });
    };
}
