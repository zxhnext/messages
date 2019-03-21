## 背景鼠标粒子连线特效

### 1. 构造函数,为函数添加原型方法
        1. 初始化  
            1. 初始化位置,大小,颜色,移动角度,出生时距离鼠标位置以及移动的距离  
            2. 封装random()函数
```js
                function random(min,max){//随机封装数
                    if (isArray(min)) {
                        return min[Math.floor(Math.random()*min.length)];
                    }else{
                        return min+Math.random()*(max-min);
                    }
                }
                function isArray(object){ //判断一个元素是否为数组
                    return Object.prototype.toString.call(object) == '[object Array]';
                }
```
        2. 运动方法  
            1. 移动坐标x,y递增,并缩小倍数 乘以.1  
            2. 减慢粒子速度  
                this.vx *= 0.92;  
                this.vy *= 0.92;  
            3. 减小粒子大小  
        3. 绘制方法  
```js
            ctx.beginPath();
            ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
            ctx.fillStyle = this.color;
            ctx.globalCompositeOperation = 'lighter'; //白色遮罩层,鼠标的地方小球是白的
             ctx.fill();
```
### 2. 鼠标在画布上的移动事件
        1. 获取鼠标位置  
        2. 当粒子超过800时,使用shift()方法删除数组中第一个  
        3. 调用绘制随机创建5~10组粒子  
            调用初始化方法,并将每一个值存入数组中
### 3. 绘制粒子并使粒子运动  render()  
        1. 清空画布  
        2. 用for循环循环数组,调用绘制方法,运动方法  
        3. 递归,用H5帧动画调用自身  requestAnimationFrame(render)  
### 4. 初始化函数
        1. 使画布宽高等于浏览器宽高  
        2. 用h5帧动画调用render()函数