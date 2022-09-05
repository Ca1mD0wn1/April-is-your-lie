"use strict";
// 定义一个变量n，类型是number
var n = 100;
var n2 = 0b1010; //binary
console.log("n2", n2);
function fn() {
    let name = "hello";
}
let arr = [12, 23];
let arr2 = ["hi"];
// 元组：
let arr3;
arr3 = ["hi", 12];
arr3[0].charAt(1);
// arr3[1].charAt(1);
arr3[0] = "hello";
//定义了枚举类型（自定义的），枚举类型定义时，把枚举的值列举出来。
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
;
var Week;
(function (Week) {
    Week[Week["SUN"] = 3] = "SUN";
    Week[Week["MON"] = 4] = "MON";
    Week[Week["TUES"] = 5] = "TUES";
})(Week || (Week = {}));
;
let c;
c = Color.BLUE;
let w;
w = Week.TUES;
console.log(c); //2
console.log(w); //5
// any：表示任何类型，不主动用它。
let t;
t = 100;
t = "hello";
// Void：一般用来限定函数的返回值是无返回值；
function fn02(a, b) {
}
fn02(2, "hello");
let u = undefined;
let nn = null;
// 定义对象时，可以用联合类型的写法使用null。以便于清除引用。
let obj1 = { a: 1, b: 2 };
obj1 = null;
// function fn03(a:number,b:string|undefined=undefined){
// }
// ？表示该参数可传可不传；
// b?:string 等价于 b:string|undefined=undefined
function fn03(a, b) {
}
fn03(12);
//object
let o1;
o1 = {};
function fn04(a) {
    // 类型断言：当a是字符串时，再使用length属性。如果 a是number类型，那么就不执行(<string>a).length;相当于没写 (<string>a).length;。
    // let len = (<String>a).length;
    let len = a.length;
    console.log("len", len);
    let t = a.charAt(0);
    console.log("t", t);
}
// fn04(2);
fn04("hello");
// let s1:string="hello";
// console.log(s1.charAt(1));
// let someValue: any = "this is a string";
let someValue = 2;
let strLength = someValue.length;
let str = someValue.substring(0);
console.log("strLength", strLength);
console.log("str", str);
//# sourceMappingURL=demo01%E7%B1%BB%E5%9E%8B.js.map