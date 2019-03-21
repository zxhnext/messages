//测试jq是否引入成功
//alert($)
$('.pic').click(function(){
	$('.btn-box').slideToggle();//自动收缩或者展开
})
$('.tzimg').click(function(){
	$('.fimg').slideDown();//自动收缩或者展开
})
//找到要拖进去的目标元素
var ofimg = $('.fimg').get(0);//把jq对象转换为js对象
var op = $('.fimg p.ths');
//当进入
ofimg.ondragenter = function(){ //拖动到区域
	op.html('可以释放元素')
}
//当离开
ofimg.ondragleave = function(){
	op.html('请将图片拖拽到此区域')
}
//在内部移动
ofimg.ondragover = function(e){
	//阻止事件默认行为  a标签  点击是不是会跳转到新页面
	e.preventDefault();
}
//释放
ofimg.ondrop = function(e){
	e.preventDefault();
	//获取拖过来文件
	var fs = e.dataTransfer.files; //保存拖拽进来的数据
	var len = fs.length;
	for (var i= 0; i<len;i++ )
	{
		var _type = fs[i].type;
		if(_type.indexOf('image')!=-1){//判断是否是图片  没有是-1 不等于-1 就是有
			var fd = new FileReader();//新建一个可以异步读取的对象
			fd.readAsDataURL(fs[i]);//读取本地文件URL
			fd.onload =function(){  //读取到以后
				var oimg = $('<img src="" />');
				oimg.attr('src',this.result);
				//添加到ofimg
				$('.fimg').append(oimg);//jq方法
				op.hide();//隐藏
			}
		}else{
			alert('请上传图片文件')
		}
	}
}

