## 自实现的拖拽相册上传功能

ondragenter(进入防止目标) ondragleave(移除放置目标) ondragover(拖动到放置目标时,在放置目标内移动)  
拖动到放置目标时要阻止默认事件 e.preventDefault();  
当图片被拖放(ondrop)执行函数  
    1. 阻止默认事件 e.preventDefault();  
    2. 保存拖拽进来的数据 var fs = e.dataTransfer.files  
    3. 
```js
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
```