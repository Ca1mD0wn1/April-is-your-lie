
var str="hello";

var num = 100;


// export default:在一个模块中只能使用一次。所以，只需要写值就行，不需要写变量名

export default  {
    name:"三国演义",
    author:"罗贯中",
    price:num,
    showSelf:function(){
        console.log(this.name+"，作者："+this.author);
    }
}

export var fnBook = function(){
    console.log("fnBook");
}


export var str2="hi";

