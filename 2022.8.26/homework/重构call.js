

//call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数

// thisArg
// 可选的。在 function 函数运行时使用的 this 值。

// arg1, arg2, ...
// 指定的参数列表。

// 返回值
// 使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。

Function.prototype.MyCall = function (target, ...args) {
    target = target || window;
    const symbolKey = Symbol();
    target[symbolKey] = this;
    const res = target[symbolKey](...args);
    delete target[symbolKey];
    return res;
}



Function.prototype.MyApply = function (target, args) {
    target = target || window;
    const symbolKey = Symbol();
    target[symbolKey] = this;
    const res = target[symbolKey](...args);
    delete target[symbolKey];
    return res;
}

// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// thisArg
// 调用绑定函数时作为 this 参数传递给目标函数的值。 如果使用new运算符构造绑定函数，则忽略该值。当使用 bind 在 setTimeout 中创建一个函数（作为回调提供）时，作为 thisArg 传递的任何原始值都将转换为 object。如果 bind 函数的参数列表为空，或者thisArg是null或undefined，执行作用域的 this 将被视为新函数的 thisArg。

// arg1, arg2, ...
// 当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

// 返回值
// 返回一个原函数的拷贝，并拥有指定的 this 值和初始参数。
Function.prototype.myBind = function (target, ...outArgs) {
    target = target || {};
    const symbolKey = Symbol();
    target[symbolKey] = this;
    return function (...innerArgs) {
        const res = target[symbolKey](...outArgs, ...innerArgs);
        return res;
    };
}

let o1 = {
    name: "涩会人",
    say(age, sex) {
        console.log(this.name + age + sex + "祝你身体健康");
    }
}


let o2 = {
    name: "年轻人",
}

// o1.say.call(o2, 18, "男");
// o1.say.MyCall(o2, 18, "男");






// let arr = [18, "男"];

// o1.say.apply(o2, arr);
// o1.say.MyApply(o2, arr);






let test1 = o1.say.bind(o2);
let test2 = o1.say.myBind(o2);

test1(18, "男")
test2(18, "男")
