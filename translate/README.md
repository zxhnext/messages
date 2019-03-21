调用百度翻译api自制翻译器

### 1. 翻译事件
        1. 判断输入框有值  
        2. 过滤不符合字符集的字符 test()与replace()  
        3. 自定义参数  
            var to = lanx?lanx:lan; //参数查询  
            var appid = '20171022000090094';//访问API账号  
            var key = 'LYzPE5CRS0e5FIwehieC';//访问API密码  
            var query = str;//需要翻译的字符  
            var salt = Date.now();//用当前时间作为随机字符串  
            var str1 = appid+query+salt+key;//拼接MD5  
            var sign = MD5(str1);  
            var from = 'auto';//自动检测输入语言  
        4.调用方法拼接字符串  
### 2. 拼接字符串
        1.接收传入参数  
            opt = opt || {};//判断opt是否存在,如果不存在,就创建一个opt  
            opt.method = opt.method || 'POST';  
            opt.url = opt.url || '';  
            opt.data = opt.data||null;  
            opt.dataType=opt.dataType || 'JSONP';  
        2. 用push()方法拼接  
            params.push(key+'='+opt.data[key]);  
        3. 调用方法创建script标签
### 3. 创建script标签
        1. 创建script标签  
        2. 拼接百度翻译API  
            url + '?' + data + '&' +'callback=getR'  
        3. 将script引入body中
### 4. 将翻译框内容替换为返回的翻译数据
### 5. 选择语言功能
        1. 点击自动选择时弹出下拉列表  
        2. 点击列表时将自动选择变为列表内的内容
        3.调用trans()方法传入语言参数
### 6. 按下键盘后半秒内自动翻译
### 7. 点击清空清空内容