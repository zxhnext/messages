## 音乐播放器简洁版

### 1. 点击播放,再次点击停止播放
### 2. 将歌词插入歌词列表
        1. split("[") //以[分割字符串  
        2. 获取分割后的长度  
        3. 把每一句再以]分割 arr = split("]")  
        4. 获取歌词时间  
            var time = arr[0].split(".");  
            var timer = time[0].split(":");  
            var ms = timer[0]*60 + timer[1]*1;  
        5. 获取歌词,将歌词插入列表中,为每一句歌词起一个id,id名为获取的时间值  
            html += "<p id="+ms+">"+text+"</p>"  
### 3. 监听歌曲时间出发事件  myMusic.addEventListener("timeupdate",function(){}
        1. 获取时间  
        2. 判断歌词id是否等于该时间  
        3. 将歌词颜色,大小变回正常  
        4. 将该句颜色变红,字体变大  
        5. 第七句歌词以后改变歌词top值  
### 4. 绘制音频
```js
        window.AudioContext = window.AudioContext||window.webkitAudioContext||window.mozAudioContext;  //H5音频对象
        window.requestAnimFrame = (function(){
            return window.requestAnimFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||function( callback ){
                window.setTimeout(callback,1000/60);
            };
        })();  //源生JS经动画
        var actx = new AudioContext(); //创建一个音频对象
        var analyser = actx.createAnalyser(); //创建一个分析节点
        var audioSrc = actx.createMediaElementSource(myMusic); //创建一个媒体源节点
        audioSrc.connect(analyser); //把媒体源和分析节点链接
        analyser.connect(actx.destination); //把分析机制和扬声器(目标点)链接起来
```
        音频形状,位置,颜色
```js
            var color1 = cxt.createLinearGradient(can.width*0.5,0,can.width*0.5,75);
            color1.addColorStop(0,"#00f");
            color1.addColorStop(0.5,"#f00");
            color1.addColorStop(1,"#0f0");
            var color2 = cxt.createLinearGradient(can.width*0.5,75,can.width*0.5,150);
            color2.addColorStop(0,"#0f0");
            color2.addColorStop(0.5,"#f00");
            color2.addColorStop(1,"#00f");
```
        绘制频谱
            var voicehigh = new Uint8Array(analyser.frequencyBinCount);//创建一个与音频频次等长的数组  
            analyser.getByteFrequencyData(voicehigh); //把分析到的音频数据添加到数组里面  
            //console.log(voicehigh);  
            var step = Math.round(voicehigh.length/nums);  //音频数据步长(截取一段数据)  
            清空画布  
            绘制频谱  
```js
                var nums = 100;
                function draw(){
                    var voicehigh = new Uint8Array(analyser.frequencyBinCount);//创建一个与音频频次等长的数组
                    analyser.getByteFrequencyData(voicehigh); //把分析到的音频数据添加到数组里面
                    //console.log(voicehigh);
                    var step = Math.round(voicehigh.length/nums);  //音频数据步长(截取一段数据)
                    //先清空画布,在绘制
                    cxt.clearRect(0,0,can.width,can.height);
                    for (var i = 0; i < nums; i++) {
                        var high = voicehigh[step*i]/3; //获取高度,如果高度太大,可除以一个数缩小
                        cxt.fillStyle = color1; //设置颜色
                        cxt.fillRect(i*10+can.width*0.5,75,7,-high+1);
                        cxt.fillRect(can.width*0.5-(i-1)*10,75,7,-high+1);
                        cxt.fillStyle = color2;
                        cxt.fillRect(i*10+can.width*0.5,75,7,high+1);
                        cxt.fillRect(can.width*0.5-(i-1)*10,75,7,high+1);
                    }
                    requestAnimFrame(draw);
                }
                draw();
```
