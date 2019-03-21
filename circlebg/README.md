## 背景粒子特效

### 1. 设置canvas画布宽为窗口宽度,高为窗口高度,并监听窗口变化,调整宽高
        window.onresize
### 2. 创建原型粒子类
        1. 圆心坐标为随机值  
            this.x = Math.random() * w;  
            this.y = Math.random() * h;  
        2.粒子速度值  
            this.vx = -0.5 + Math.random();  
            this.vy = -0.5 + Math.random();  
        3. 圆形半径  
                this.r = Math.random() * 5;
        4. 粒子颜色
                this.color = color3();
### 3. 给原型添加绘制方法
```js
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
        this.update();  //更新坐标
```
### 4. 给原型添加移动方法
        1. 当坐标到达边框时反弹  
            this.x < 0 || this.x > w  this.y < 0 || this.y > h
        2. 随机速度  
            this.x += this.vx;
            this.y += this.vy;
### 5. 实例化原型粒子,并加入数组中
### 6. 绘制粒子
        1. 清空画布  ctx.clearRect(0, 0, w, h);
        2. 调用绘制方法绘制粒子
### 7. 添加定时器使粒子动起来
### 8. 生成随机颜色
        随机生成rgb值