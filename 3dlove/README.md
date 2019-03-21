## 3d爱心旋转特效

### 1. 给最外层盒子设置3D,并设置动画
```css
transform-style:preserve-3d; /*使被转换的子元素保留其 3D 转换*/
animation:rot 10s linear infinite;/*css3自定义动画:名称  时间 匀速  无限重复*/
@keyframes rot{
    to{
        transform:rotateX(360deg) rotateY(360deg); /*围绕x,y轴旋转*/
       }
}
```
### 2. 画半个心形
        border-radius:50% 50% 0/40% 50% 0;/* 斜杠前面是水平边 后面是竖直边 顺序都是顺时针从左上角开始*/  
### 3. 正方体盒子
        1. transform:translateX(25px) translateY(54px) translateZ(25px); /*设置看它的角度*/  
        2. 以第一个为例
```css
                left:0;
                top:-50px;
                transform-origin:bottom; /*transform-origin:50% 50% 0;   旋转基点x,y,z*/
                transform:rotateX(90deg);/*css3变换:X轴旋转90deg*/
```
### 4. 制作一个立体心
    用for循环创建36个心,分别旋转,组合为立体
        oDiv.style.transform = "rotateY("+i*10+"deg) rotateZ(45deg) translateX(30px)";