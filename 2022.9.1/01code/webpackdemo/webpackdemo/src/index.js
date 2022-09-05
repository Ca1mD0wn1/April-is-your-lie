import "./assets/scss/index.scss";
import img01 from "./assets/imgs/62.jpg"
import img02 from "./assets/imgs/68.jpg"

function index(){
    console.log("index");
}

let fnES6=(num)=>{
    console.log("fnES6"+num);
}

fnES6(2);
fnES6(3);
fnES6(4);

let imgDom01 = document.createElement("img");
imgDom01.src = img01;
document.getElementById("box2").appendChild(imgDom01);


let imgDom02 = document.createElement("img");
imgDom02.src = img02;
document.getElementById("box2").appendChild(imgDom02);

