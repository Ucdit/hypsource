/**
 * Created by HYP on 2016/1/11.
 */
/*
var scroll=document.getElementById('scroll');
var width=scroll.offsetWidth+350;
console.log(width);
scroll.style.transform='translate('+(-width)+'px,0)';
scroll.style.transition='transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0s';
scroll.addEventListener('webkitTransitionEnd',function(){
    console.log('yes');
    scroll.style.transform='translate('+(200)+'px,0)';
    scroll.style.transition='transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0s';
})*/
(function(){
    function Face(opt){
        this.option={
            wall:opt.wall,
            holes:opt.holes,
            imgs:opt.imgs,
            widthCell:opt.widthCell,
            rows:opt.rows,
            column:opt.column
        };
    };
    Face.prototype.init=function(){

    };
    Face.prototype.creatHole=function(){
        var _this=this;
        var faceWall=_this.option.rows*_this.option.column;
        for(var i=0;i<faceWall;i++){
            _this.option.wall.appendChild()
        }
    };
    var faceBook=new Face();
    faceBook.init();
})();
