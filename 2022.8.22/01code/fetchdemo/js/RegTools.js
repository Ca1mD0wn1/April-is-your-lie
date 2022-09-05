
export default class RegTools{


   
    static check(type,str){

        var regObj = {
            "username":/^[a-z_]\w{5,15}$/i, //// 数字，字母，下划线，开头不能是数字，6-16位
            "userpass":/^(?=\D+\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/, //8-16数字，大小写字母；不能以数字开头，不能纯数字，不能纯小写，不能纯大写。
            "mail":/^\w{4,25}@\w{2,10}\.(com|net|cn)$/,
            "date":/^((\d{4}\-\d{2}\-\d{2})|(\d{4}\/\d{2}\/\d{2})|(\d{4}\.\d{2}\.\d{2}))$/i,
            "phone":/^1\d{10}$/,
            "ip":/^([1-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/
        }

        return regObj[type]?regObj[type].test(str):false;
    }


}