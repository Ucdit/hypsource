function lazy(ele,opt){
	this.ele=ele;
    this.distance=50;
    this.tag='data-src'
}
lazy.prototype.init= function () {

}
lazy.prototype.countDis= function (ele) {
    var W = window.innerWidth || document.documentElement.clientWidth;//IE不支持innerWidth，支持clientWidth
    var H = window.innerHeight || document.documentElement.clientHeight;
    var rect=ele.getBoundingClientRect();
    if((rect.top>=H&&rect.top-H<=this.distance&&rect.left>=W&&rect.left-W<=this.distance)
        ||(rect.top<0&&-rect.top-H<=this.distance&&rect.left<0&&-rect.left-W<=this.distance)
    ){
        this.setImg(ele);
    }
}
lazy.prototype.setImg= function (ele) {
    var src=ele.getAttribute(this.tag);
    if(src){
        ele.setAttribute('src',src);
    }
}
lazy.prototype.getElement= function(query) {
    var res=[];
	if(document.querySelectorAll()){
        res=document.querySelectorAll(query);
    }
    else{

    }
};