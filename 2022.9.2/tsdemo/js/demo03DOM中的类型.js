// let divDom = document.createElement("div");
// console.log(typeof divDom);
// console.dir(divDom);
// let t = document.getElementById("box")
function fn01(dom, dom2, dom3) {
    return "";
}
let div1 = document.createElement("div");
let img1 = document.createElement("img");
let dom3 = document.createElement("p");
let dom4 = document.createElement("input");
fn01(div1, img1, dom4);
console.dir(dom4);
div1.style.cssText = `
    width:200px;
    height:200px;
    background-color:red;
`;
document.body.appendChild(div1);
div1.onclick = function (event) {
    let e = event || window.event;
    console.dir(e);
};
div1.onmouseover = function (event) {
    let e = event || window.event;
    console.dir(e);
};
function overHandler(e) {
}
div1.onmouseover = overHandler;
export default {};
//# sourceMappingURL=demo03DOM%E4%B8%AD%E7%9A%84%E7%B1%BB%E5%9E%8B.js.map