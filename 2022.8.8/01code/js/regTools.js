
// 正则封装
// 参数：
//  


// 返回值


// function regExpCheck(type,str){

//     switch(type){
//         case "mail": var reg = /^\w{4,25}@\w{2,10}\.(com|net|cn)$/;break;
//         case "date": var reg = /^((\d{4}\-\d{2}\-\d{2})|(\d{4}\/\d{2}\/\d{2})|(\d{4}\.\d{2}\.\d{2}))$/i;break;
//         case "phone": var reg = /^1\d{10}$/;break;
//         case "ip": var reg = /^([1-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/;break;
//     }
//     return reg?reg.test(str):false;
// }



function regExpCheck(type,str){

    var regObj = {
        "mail":/^\w{4,25}@\w{2,10}\.(com|net|cn)$/,
        "date":/^((\d{4}\-\d{2}\-\d{2})|(\d{4}\/\d{2}\/\d{2})|(\d{4}\.\d{2}\.\d{2}))$/i,
        "phone":/^1\d{10}$/,
        "ip":/^([1-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/
    }

    return regObj[type]?regObj[type].test(str):false;
}
