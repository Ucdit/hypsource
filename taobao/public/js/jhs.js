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

function Face(opt){
    this.option={
        wall:opt.wall,
        holes:opt.holes,
        imgs:opt.imgs,
        widthCell:opt.widthCell,
        rows:opt.rows,
        column:opt.column
    };
}
Face.prototype.init=function(){
    this.creatHole();
    this.play();

};
Face.prototype.creatHole=function(){
    var _this=this;
    var faceWall=_this.option.rows*_this.option.column;
    for(var i=0;i<faceWall;i++){
        _this.option.wall.append('<span><img/><i></i></span>');
    }
    _this.option.holesEle=_this.option.wall.find('span');
    _this.option.wall.css({'width':_this.option.column*_this.option.widthCell+2*_this.option.column+'px'});
    _this.option.wall.find('span').css({'width':_this.option.widthCell+'px','height':_this.option.widthCell+'px','border':'1px solid transparent'});
};
Face.prototype.play=function(){
    /*开始是设置颜色，变淡，然后出现图片，每次出现图片顺序都不一样*/
    var _this=this,
        holesArr=this.option.holes,//span的下标
        holesLength=holesArr.length,
        holesEle=this.option.holesEle,//span
        imgsArr=this.option.imgs,//图片数组
        imgItem,//随机获得数组中的图片
        imgIndex,
        arrLength,
        arrIndex,
        arrItem;
    $.each(holesArr,function(index,item){
        arrLength=holesArr.length;
        arrIndex=Math.floor(Math.random()*arrLength);
        arrItem=holesArr[arrIndex];
        (
            function(arrItem){
                setTimeout(function(){
                    $(holesEle[arrItem]).css({
                        'background':'#ff5f3e'
                    });
                },index*30);
            }
        )(arrItem);
        /*取过的删除*/
        holesArr.splice(arrIndex,1);
        /*随机获得图片*/
        imgIndex=Math.floor(Math.random()*imgsArr.length);
        imgItem=imgsArr[imgIndex];
        (
            function(arrItem){
                setTimeout(function(){
                    $(holesEle[arrItem]).css('background','#fff').find('img').attr('src',imgItem).fadeIn('slow');
                },(holesLength*2-index)*30);
            }
        )(arrItem);
        /*取过的删除*/
        imgsArr.splice(imgIndex,1);
    });
};
/*wall:opt.wall,
 holes:opt.holes,
 imgs:opt.imgs,
 widthCell:opt.widthCell,
 rows:opt.rows,
 column:opt.column
*/
var faceBook=new Face({
    'wall':$('#face'),
    'holes':[20, 21, 22, 23, 38, 56, 74, 92, 57, 58, 25, 26, 27, 28, 43, 61, 79, 97, 98, 99, 100, 62, 63, 59, 30, 48, 66, 84, 102, 31, 32, 103, 104, 51, 69, 87, 64],
    'imgs':[
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg',
        '1.jpg'
    ],
    'widthCell':38,
    'rows':7,
    'column':18
});
faceBook.init();

