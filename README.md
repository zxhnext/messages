### 1. 点击发表事件
        1. 获取输入框内容  
        2. 判断输入框是否有内容,没有内容时使文本框聚焦,有内容时发表说说  
            即添加如下结构,并置空输入框内容  
            <div class="content">  
                <div class="title"><img src="images/arrow.jpg" align="absmiddle">  
                    &nbsp&nbsp&nbsp&nbsp树深时见鹿  
                </div>  
                <div class="txt">Txt</div>  
            </div>  
### 2. 点击表情
        1. 展开表情页,同时阻止冒泡  
            e.stopPropagation()  
        2. 点击任何地方收起表情页  
        3. 添加表情  
            使用clone()克隆表情图片,并插入到输入框中

<!-- contenteditable="true"将div变成文本输入框  
    align="absmiddle"图片文字和图片对齐方式  
-->