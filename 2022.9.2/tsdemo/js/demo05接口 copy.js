"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fn04(obj) {
    console.log(obj.a);
    console.log(obj.b);
}
let o = { a: 100, b: "hello", c: 12 };
fn04(o);
function fn05(obj) {
    console.log(obj.a);
    console.log(obj.b);
}
let o2 = { a: 100, b: "hello", c: 12 };
fn05(o2);
function readBook(p, b) {
    console.log(`${p.name}花了${b.price}米，买了一本${b.name}`);
}
let p1 = {
    cardId: "007",
    name: "曹继承",
    age: 18,
    sex: "男"
};
let b1 = {
    id: "B001",
    name: "红楼梦",
    price: 51.2,
    published: "sss"
};
// b1.id="002";//不能改
b1.name = "ddd";
let str = "hi";
readBook(p1, b1);
// const arr = [12,23,34];
// arr[0] = 22;
const b2 = {
    id: "B001",
    name: "红楼梦",
    price: 51.2,
    published: "sss"
};
b2.name = "西游记";
let s1 = {
    name: "张三疯",
    books: ["三国演义", "西游记"]
};
s1.books[0] = "水浒传";
console.log("s1.books[0]", s1.books[0]);
exports.default = {};
//# sourceMappingURL=demo05%E6%8E%A5%E5%8F%A3%20copy.js.map