define(function(require, exports, module) {
	/*
	 * imgData : 加载的图片序列
	 * callback : 加载完成后的回调
	 * loading : 加载过程中的进度变化 { res : 数值 }
	 */
	function loadInt(imgData,callback,loading,center){
		'function' == typeof center && center();
		(function loadData(score,index){
			var imgData = config.imgResource;
			var len = imgData.length;
			var i = index ? index : 0;
			var s;
			if(i < len){
				var img = new Image();
				img.src = imgData[i].src;
				img.onload = function(){
					i++;
					s = score ? score : 0; 
					s += Math.round((1/len)*100);
					if(s>100) {
						s = 100;
					}
					'function' == typeof loading && loading(s);
					loadData(s,i);
				}
			}else{
				'function' == typeof callback && callback();
			}
		})();
	}
	exports.init = loadInt;
})