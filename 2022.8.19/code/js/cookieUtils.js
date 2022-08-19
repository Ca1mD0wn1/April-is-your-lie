
export default class CookieUtils {

    // 保存cookie
    // 参数：
    // 键
    // 值
    // 天数
    // path
    // domain
    // 返回值：
    static saveCookie(obj) {
        let defaultObj = {
            key: "",
            value: "",
            dayCount: 7,
            path: "/",
            domain: ""
        }

        for (let key in defaultObj) {
            defaultObj[key] = obj[key] == undefined ? defaultObj[key] : obj[key];
        }

        defaultObj.value = encodeURIComponent(defaultObj.value);//值里面有中文，把它编成百分号编码

        let d = new Date();
        d.setDate(d.getDate() + defaultObj.dayCount);
        let str = `${defaultObj.key}=${defaultObj.value};expires=${d.toGMTString()};path=${defaultObj.path}`;

        defaultObj.domain ? str += `domain=${defaultObj.domain}` : "";

        document.cookie = str;
    }


    // 获取cookie
    // 参数：
    // 键

    static getCookie(key) {

        // let obj = {};

        // let str = document.cookie;
        // let arr = str.split("; ");
        // arr.forEach(item=>{
        //     let [key,value] = item.split("=");
        //     obj[key] = value;
        // })

        // return obj[key];

        let str = decodeURIComponent(document.cookie);//username=曹继承; city=西安
        let arr = str.split("; ");

        for (let i = 0; i < arr.length; i++) {
            let [k, v] = arr[i].split("=");
            if (k == key) {
                return v;
            }
        }

        return null;

    }


    // 删除cookie
    // 参数：
    //  键

    static deleteCookie(key){
        CookieUtils.saveCookie({
            key,
            value:"byebye",
            dayCount:-1
        })

    }



}