

function fn01([first,second]:[number,string]){
   console.log("first",first);
   console.log("second",second);
}

fn01([2,"hi"]);


// function fn02(obj:{a:string,b:number}){
//     console.log(obj.a);
//     console.log(obj.b);
    
// }

function fn02({a,b}:{a:string,b:number}){
    console.log(a);
    console.log(b);    
}

fn02({a:"hello",b:250});


// type:定义类型的
type T={a:string,b:number};

function fn03({a,b}:T){
    console.log(a);
    console.log(b);    
}

fn03({a:"hello111",b:250111});


let nnn:{a:number,b:string};
nnn = {a:12,b:"hi"};

let {a,b} = nnn;

let arr222:[number,string];

// function fn04(obj:{a:number,b:string}){

// }


function fn04({a,b}:{a:number,b:string}){

}

fn04({a:100,b:"hello"});

export default {

};