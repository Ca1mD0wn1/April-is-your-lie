

interface MyArray{
    [index:number]:string
}

let arr:MyArray = ["呵呵","嘿嘿"];

console.log("arr[0]",arr[0]);

console.log(typeof arr);
console.log(Array.isArray(arr));

let o2:MyArray = {"1":"12"};

let arr4 = [12,23,34]
let arr5 = {"0":12,"1":23,"2":34,length:3}

console.log("arr4[0]",arr4[0]);
console.log("arr5[0]",arr5[0]);
console.log("arr5.length",arr5.length);

console.log("o2[1]",o2[1]);

let arr3 = [12,23,23];
arr3["1"]

let obj1={
    "1":"123",
    "2":"10"
}

obj1["1"]

function run(a:string,b:string,c:string):void{
    let args:MyArray = arguments;
    console.log("args[0]",args[0]);
    
}

run("a","b","c");

export default {}