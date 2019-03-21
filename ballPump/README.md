## 打气球小游戏

### 1. 制作气球
```css
border-radius: 160px 160px 64px 160px;
transform:rotate(45deg);
box-shadow: -8px -8px 80px -8px #873940 inset;
:after{
    position: absolute;
    bottom: 2px;
    right: 0;
    content: '';
    border:8px solid transparent;
    border-right-color: #873940;
    transform:rotate(45deg);
    border-radius: 50%;
}
```
### 2. 制作n个气球,并出现在底部随机位置
        1. 每次随机创建一个0~1的随机数,乘以窗口宽度减去气球宽度  
        2. 使此值大于等于0 randomX = Math.max(0, randomX)  
        3. 给气球定位  
        4. 给气球一个随机速度,将其存到数组中  
### 3. 气球移动
        1. 使每个气球按其速度移动  
        2. 当气球没到顶部时,将气球重新返回底部  
        3. 设置定时器,调用函数
### 4. 点击气球事件
        1. 监听点击事件,判断是否为点击气球事件 e.target.className === 'balloon'  
        2. 执行气球漏气事件  boom.call(e.target);  
        3. 重新生成一个气球  
        4. 从数组中删除破损的气球参数
### 5. 气球漏气事件
        1. 将两个旋转值存入数组中  ,定义index值,为奇数时旋转度为数组第一个值,偶数为第二个  
        2. 设置定时器  1000/60执行一次  
        3. 速度增加,减小宽度,高度,设定旋转值