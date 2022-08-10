
// 事件绑定的封装
// 参数：
//    element：dom元素
//    type：事件类型名，不包含on
//    fn：事件处理函数
//    isCapture:是否捕获
// 返回值：无

function addEventgp(element,type,fn,isCapture){
    if(element.addEventListener){
        element.addEventListener(type,fn,isCapture)
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn)
    }else{
        element["on"+type] = fn;
    }
}

// 获取事件对象

function getEvent(event){
    return  event || window.event
}

// 获取事件源
function getCurrentTarget(e){
    return e.currentTarget || e.srcElement;
}

// 获取键码：


// 阻止冒泡

