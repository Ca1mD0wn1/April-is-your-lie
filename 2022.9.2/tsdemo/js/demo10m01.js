export default class Person {
    constructor(name, age) {
        this._sex = "男";
        this.money = 100;
        this.name = name;
        this._age = age;
    }
    eat() {
        console.log("hi");
    }
    // 访问器属性
    set age(a) {
        if (a < 0 || a > 120) {
            return;
        }
        this._age = a;
    }
    get age() {
        return this._age;
    }
    set sex(s) {
        console.log("set函数");
        this._sex = s;
    }
    get sex() {
        return this._sex;
    }
}
//# sourceMappingURL=demo10m01.js.map