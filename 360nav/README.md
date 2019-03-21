## 360拖拽导航效果

### 1. 创建坐标位置对象,div定位值对象
### 2. each遍历
        1. 浮动布局改为定位布局,并调用拖拽功能  
            为每个元素添加index值 $(this).attr("index",i)
            left:this.box.offset().left,  
            top:this.box.offset().top  
        2. 拖拽功能  
            1. 初始化坐标对象,div定位值对象以及当前被拖拽的div,关闭拖拽功能  
            2. 鼠标按下  
                获取鼠标坐标位置与div定位值  
            3. 鼠标移动  
                获取移动后的鼠标坐标位置,并判断拖拽功能是否开启  if (!isDrag) return false;  
                将拖拽的图片透明度降低,并提高其z-index值  
                新的div定位值为鼠标移动值加上原来的定位值  
            4. 鼠标抬起  
                判断拖拽功能是否开启 if (!isDrag) return false;  
                关闭拖拽功能  
                调用移动事件,并将透明度与z-index改为正常值  
        3.移动事件  
            停止当前动画,将该图片返回原来位置  
        4. 碰撞检测  
            1. 存储当前拖拽的元素,声明碰撞方向  
            2. 遍历其兄弟元素,当鼠标x值大于兄弟元素的x值或小于兄弟元素的定位值加自身宽度或 y值大于兄弟元素y值或小于y值加自身高度即碰撞成功  
                如果拖拽元素的top值小于兄弟元素为往下碰撞  
                如果top值大于兄弟元素为网上碰撞  
                其余为左右碰撞  
                判断后调用交换位置方法  
        5. 交换位置  
            1. 左右碰撞  
                var saveBox = this.box;  /*被碰撞的*/  
                this.box = currentItem.box; /*碰撞的*/  
                currentItem.box = saveBox;  
                调用移动位置方法  
                交换index值  
                $(this).attr("index",this.box.index());  
                $(currentItem).attr("index",currentItem.box.index());  
            2. 下碰撞  
                获取拖拽盒子索引与碰撞盒子索引  
                for循环将两个盒子之间的index索引全部减1  
```js
 for (var i = endIndex; i > startIndex; i--) {
    //循环获取初始索引和结束索引间的每一个item
    var prevNode = $(".content .item[index="+(i-1)+"]")[0];
    //依次交换每个item的父元素
    node.box = prevNode.box;
    $(node).attr("index",node.box.index());
    node.move();//交换位置
    //更改每个item的index属性值
    node = prevNode;
}
    currentItem.box = box;
    $(currentItem).attr("index",box.index());

```
            3. 上碰撞  



