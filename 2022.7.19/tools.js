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
function isSame() {
    for (var i = 0; i < arguments[i].length; i++) {
        for (let j = 0; j <= i + 1; j++) {
            if (arguments[j] == arguments[i]) {
                return true;
            }
        }
        return false;
    }
}

