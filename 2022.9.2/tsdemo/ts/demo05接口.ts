
function fn04(obj:{a:number,b:string}){
    console.log(obj.a);
    console.log(obj.b);
}
let o = {a:100,b:"hello",c:12};

fn04(o);

// 用接口定义了一个自定义类型。
// 类型名：IObject。
// 类型限制，IObject类型要求，有两个属性a和b；a的类型是number；b的类型是string
interface IObject{
    a:number,
    b:string
}

function fn05(obj:IObject){
    console.log(obj.a);
    console.log(obj.b);
}
let o2 = {a:100,b:"hello",c:12};

fn05(o2);

interface IBook{
    readonly id:string,
    name:string,
    price:number,
    published?:string
}

interface IPerson{
    cardId:string,
    name:string,
    age:number,
    sex:string
}


function readBook(p:IPerson,b:IBook){
    console.log(`${p.name}花了${b.price}米，买了一本${b.name}`);
}

let p1:IPerson = {
    cardId:"007",
    name:"曹继承",
    age:18,
    sex:"男"
}

let b1:IBook ={
    id:"B001",
    name:"红楼梦",
    price:51.2,
    published:"sss"
}

// b1.id="002";//不能改
b1.name="ddd";

let str:string ="hi"

readBook(p1,b1);

// const arr = [12,23,34];

// arr[0] = 22;

const b2:IBook ={
    id:"B001",
    name:"红楼梦",
    price:51.2,
    published:"sss"
}

b2.name = "西游记";

interface IStudent {
    name:string,
    readonly books:string[]
}

let s1:IStudent = {
    name:"张三疯",
    books:["三国演义","西游记"]
}

s1.books[0] ="水浒传";

console.log("s1.books[0]",s1.books[0]);


export default {}