
export default class AJAXUtils {

    static ajax(obj) {
        let defaultObj = {
            url: "#",
            method: "get",
            params: {},
            cb: undefined
        }

        for (let key in defaultObj) {
            defaultObj[key] = obj[key] != undefined ? obj[key] : defaultObj[key];
        }

        let xhr = new XMLHttpRequest();

        // 把传入的参数（json对象）拼接成 字符串（用&连接起来的key=value格式的字符串）
        let sendStr = "";
        for (let key in defaultObj.params) {
            sendStr += `${key}=${defaultObj.params[key]}&`;
        }
        sendStr = sendStr.substring(0, sendStr.length - 1);


        let urlAndParams = defaultObj.url;

        if (defaultObj.method.toLowerCase() == "get") {
            urlAndParams += `?${sendStr}`;
        }

        xhr.open(defaultObj.method, urlAndParams);

        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4 && xhr.status == 200) {
                defaultObj.cb(xhr.responseText);
            }

        }

        if (defaultObj.method.toLowerCase() == "get") {
            xhr.send();
        } else if (defaultObj.method.toLowerCase() == "post") {
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(sendStr);
        }

    }

    static get(obj){
        obj.method="get"
        return AJAXUtils.ajax(obj);
    }
    
    static post(obj){
        obj.method="post"
        return AJAXUtils.ajax(obj);
    }

    static ajaxUsePromise(obj) {

        return new Promise(function (resolve, reject) {

            let defaultObj = {
                url: "#",
                method: "get",
                params: {}
            }

            for (let key in defaultObj) {
                defaultObj[key] = obj[key] != undefined ? obj[key] : defaultObj[key];
            }

            let xhr = new XMLHttpRequest();

            // 把传入的参数（json对象）拼接成 字符串（用&连接起来的key=value格式的字符串）
            let sendStr = "";
            for (let key in defaultObj.params) {
                sendStr += `${key}=${defaultObj.params[key]}&`;
            }
            sendStr = sendStr.substring(0, sendStr.length - 1);


            let urlAndParams = defaultObj.url;

            if (defaultObj.method.toLowerCase() == "get") {
                urlAndParams += `?${sendStr}`;
            }

            xhr.open(defaultObj.method, urlAndParams);

            xhr.onreadystatechange = function () {

                if (xhr.readyState == 4 ) {
                    if(xhr.status.startWith("2")){
                        resolve && resolve(xhr.responseText);
                    }else{
                        reject({
                            code:xhr.status,
                            "msg":"出错了"
                        });
                    }
                }
            }

            if (defaultObj.method.toLowerCase() == "get") {
                xhr.send();
            } else if (defaultObj.method.toLowerCase() == "post") {
                xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                xhr.send(sendStr);
            }


        })
    }

}