

// let divDom = document.createElement("div");

// console.log(typeof divDom);

// console.dir(divDom);

// let t = document.getElementById("box")

function fn01(dom:HTMLDivElement,dom2:HTMLImageElement,dom3:HTMLElement):string{    
    return ""
}

let div1 = document.createElement("div");
let img1 = document.createElement("img");
let dom3 = document.createElement("p");
let dom4 = document.createElement("input");

fn01(div1,img1,dom4);

console.dir(dom4);

div1.style.cssText = `
    width:200px;
    height:200px;
    background-color:red;
`;
document.body.appendChild(div1)

div1.onclick = function(event){
    let e = event || window.event;
    console.dir(e);
}


div1.onmouseover = function(event){
    let e = event || window.event;
    console.dir(e);
}


function overHandler(e:MouseEvent):void{
    
}

div1.onmouseover = overHandler;



export default {}