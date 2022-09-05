"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = ["呵呵", "嘿嘿"];
console.log("arr[0]", arr[0]);
console.log(typeof arr);
console.log(Array.isArray(arr));
let o2 = { "1": "12" };
let arr4 = [12, 23, 34];
let arr5 = { "0": 12, "1": 23, "2": 34, length: 3 };
console.log("arr4[0]", arr4[0]);
console.log("arr5[0]", arr5[0]);
console.log("arr5.length", arr5.length);
console.log("o2[1]", o2[1]);
let arr3 = [12, 23, 23];
arr3["1"];
let obj1 = {
    "1": "123",
    "2": "10"
};
obj1["1"];
function run(a, b, c) {
    let args = arguments;
    console.log("args[0]", args[0]);
}
run("a", "b", "c");
exports.default = {};
//# sourceMappingURL=demo07%E6%8E%A5%E5%8F%A3%E5%AE%9A%E4%B9%89%E5%8F%AF%E7%B4%A2%E5%BC%95%E7%9A%84%E7%B1%BB%E5%9E%8B%20copy.js.map