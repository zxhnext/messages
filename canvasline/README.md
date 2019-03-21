## 背景鼠标滑动连线特效

### 1. 初始化 
        1. 使canvas宽高等于浏览器宽高  
        2. 清空粒子坐标数组与鼠标移动坐标对象  
        3. 确定粒子位置,并绘制粒子  
### 1. 绘制圆粒子 function Cricle(x, y)
```js
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'pink';
        ctx.arc(x, y, 0.5, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
```
### 2. 粒子运动与连线
        1. 清空画布  
        2. 粒子移动  
            data[i].x += data[i].cX;  
            data[i].y += data[i].cY;  
        3. 判断粒子到达边界时弹回  
        4. 调用Circle()绘制粒子  
        5. 绘制线条  
            1. 用三角形平方和订立判断粒子距离小于50时连线两个粒子  
                (data[i].x - data[j].x) * (data[i].x - data[j].x) + (data[i].y - data[j].y) * (data[i].y - data[j].y) <= 50 * 50  
                调用连线方法,传入参数false  
            2. 距离鼠标位置小于80的粒子与鼠标位置连线  
                (data[i].x - move.x) * (data[i].x - move.x) + (data[i].y - move.y) * (data[i].y - move.y) <= 80 * 80  
                调用连线方法,传入参数true
### 3. 绘制线条方法
        1. 判断是粒子连线还是鼠标与粒子连线,来确定线条颜色  
            color.addColorStop(0, 'blue');  
            color.addColorStop(1, '#fff');  
        2. 绘制线条
            ctx.save();
            ctx.strokeStyle = color;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
            ctx.restore();
### 4. 鼠标移入将鼠标值存入move对象中