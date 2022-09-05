// commonJS 模块化规范：

// 导入： require();

// 导出： 
//  module.变量名    等价于ES6的  export
//  module.exports   等价于ES6的 export default

const dog = require("./dog.js");
const {name,lookDoor} = require("./dog.js");
const name1 = require("./dog.js").name;

console.log(dog.name);
console.log(name);
console.log(name1);
lookDoor();

var aaa  = 100;

module.exports = {
    name:"曹继承",
    sex:"男",
    writeCode:function(){
        console.log(this.name+"在写代码",aaa);
    }
}