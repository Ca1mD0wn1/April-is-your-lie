function fn01([first, second]) {
    console.log("first", first);
    console.log("second", second);
}
fn01([2, "hi"]);
// function fn02(obj:{a:string,b:number}){
//     console.log(obj.a);
//     console.log(obj.b);
// }
function fn02({ a, b }) {
    console.log(a);
    console.log(b);
}
fn02({ a: "hello", b: 250 });
function fn03({ a, b }) {
    console.log(a);
    console.log(b);
}
fn03({ a: "hello111", b: 250111 });
let nnn;
nnn = { a: 12, b: "hi" };
let { a, b } = nnn;
let arr222;
// function fn04(obj:{a:number,b:string}){
// }
function fn04({ a, b }) {
}
fn04({ a: 100, b: "hello" });
export default {};
//# sourceMappingURL=demo04%E8%A7%A3%E6%9E%84.js.map