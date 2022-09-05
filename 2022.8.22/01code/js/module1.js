import {fn02} from "./module2.js";

export var num = 100;

var age = 20;

export var str = "hello";

export var fn01 = function(){
    console.log("fn01");
    fn02();
}
