## 炫酷3d旋转相册特效

### 1. 排列图片
         Array.prototype.forEach  //forEach只支持数组,而oImg是集合,所以这里通过call找Array.prototype借用forEach方法  
            el.style.transform = "rotateY("+index*deg+"deg) translateZ(350px)"  
            el.style.transition = "1s "+(11-index)*0.1+"s"; //延迟几秒执行  
### 2. 拖拽事件
        1. 鼠标按下获取鼠标x,y值  
        2. 鼠标移动获取x,y值  
        3. 计算差值,把差值赋值给度数  
        4. 将最新的鼠标x,y值赋值给原来的x,y值  
        5. 鼠标抬起,清空移动事件  
                1. 创建定时器,将差值乘以一个惯性值  
                2. 赋值给度数  
                3. 当差值小于某一设定值时清空定时器




