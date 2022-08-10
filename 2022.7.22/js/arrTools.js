
// 1、求最大数
// 功能：
// 参数：数组
// 返回值:最大数

function maxNum(arr) {

    var max = arr[0];

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;

}


// 2、求最大数和最小数
// 功能：求一组数中的最大数和最小数
// 参数：数组：
// 返回值：数组，数组只有两个元素，第一个元素是最大数，第二个元素是最小数。

function maxAndMin(arr) {
    var max = arr[0];
    var min = arr[0];

    for (i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return [max, min];

}

// 3、求平均数
// 功能：求一组数的平均数：
// 参数：数组
// 返回值:平均数

function average(arr) {

    // 1、求和
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // 2、求平均数
    var avg = sum / arr.length;

    return avg;

}

// 4、数组倒置
// 功能：数组倒置
// 参数：数组
// 返回值：倒置后的数组


function reverse(arr) {

    for (var i = 0; i < parseInt(arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }

    return arr;

}


// 5、求出小于某个数的个数
// 功能：求出一组数中小于某个数的个数
// 参数:
//   arr：数组
//   num：指定数
// 返回值：小于num个数

function ltCount(arr, num) {

    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            count++;
        }
    }

    return count;
}

// 6、求出一个数在数组中的下标（第一次出现）
// 功能：求出一个数在数组中的下标（第一次出现）
// 参数：
//    arr：数组
//    num：指定数
// 返回值：-1：表示不存在；大于-1：就是下标

function index(arr, num) {

    for (var i in arr) {
        if (arr[i] == num) {
            return i;
        }
    }

    return -1;
}