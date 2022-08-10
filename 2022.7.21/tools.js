function isNumber() {//判断传进来的参数是否全部为数字
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i])) {
            return false;
            break;
        } else {
            return true;
        }
    }
}
function isSame() {//检测传递过来的参数是否各不同
    for (var i = 0; i < arguments.length; i++) {
        for (let j = 1; j <= arguments.length - i - 1; j++) {
            if (arguments[j] == arguments[i]) {
                return false;
            }
        }
        return true;
    }
}
function bubbleSortSmallToBig() { //冒泡排序 从小到大
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments.length - 1 - i; j++) {
            if (arguments[j] > arguments[j + 1]) {
                var temp = arguments[j];
                arguments[j] = arguments[j + 1];
                arguments[j + 1] = temp;
            }
        }
    }
    return arguments;
}
function bubbleSortBigToSmall() { //冒泡排序 从大到小
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments.length - 1 - i; j++) {
            if (arguments[j] < arguments[j + 1]) {
                var temp = arguments[j];
                arguments[j] = arguments[j + 1];
                arguments[j + 1] = temp;
            }
        }
    }
    return arguments;
}

// function norepeat(arr) {//数組去重1.0淘汰版本
//     for (var i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j <= arr.length; j++) {
//             if (arr[j] == arr[i]) {
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr;
// }
function norepect(arr) { //数组去重2.0
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if ((newarr.indexOf(arr[i]) == -1)) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
function factorial(n) {//求n的阶乘
    var number = 1;
    for (var i = 1; i <= n; i++) {
        number = number * i;
    }
    return number;
}
function findString(str, index) {//查找某个字符在字符串中的位置并输出
    var count = 0;
    var j = 0;
    for (var i = 0; i <= str.length; i++) {
        x = str.indexOf(index, j);
        if (x != -1) {
            j = x + 1;
            count = count + 1;
            console.log("第" + count + '个' + index + '的位置在第' + j + '的位置');
        }
    }
    return count;
}

function checkCode(n) {// 返回n位数字随机数
    // var code = '';
    for (var i = 0; i < n; i++) {
        code = code * 10 + parseInt(Math.random() * 10)
    }
    return code;
}