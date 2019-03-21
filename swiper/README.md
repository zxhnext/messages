## 模拟移动端相册滑动事件

### 1. 初始化
        1. oUl.style.width = length + '00%';  
        2. 将translateX,translateY置为0
### 2. 手指触摸事件
        1.手指按下  
            1. translation置为空  
            2. 捕获第一个手指  
            3. 存储其translateX值  
        2. 手指移动  
            1. 捕获手指  
            2. 获取移动量  
            获取当前translateX值  
        3. 手指抬起  
            1. 根据translateX值判断为哪一屏  
            2. 延时0.5s后跳到该屏


