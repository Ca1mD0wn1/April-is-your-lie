import {name,lookDoorFn} from "./dog.mjs";

var aaa = 100;

console.log(name);
lookDoorFn();

export default {
    name: "王喜珍",
    sex: "男",
    writeCode: function () {
        console.log(this.name + "在写代码", aaa);
    }
}
