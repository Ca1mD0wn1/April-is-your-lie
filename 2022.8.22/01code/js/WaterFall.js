import Utils from "./Utils.js"

// 瀑布流
export default class WaterFall {

    constructor(obj) {
        // 属性

        let defaultObj = {
            selector:"",
            contianer: document.body,
            imgDoms: [],
            imgs: ["./img/1.jpg", "./img/2.jpg"],
            width: 200,
            parentWidth: 0,
            colCount: 0,
            // 缝隙     
            cranny: 0,
            arr: [],

        }

        for (let key in defaultObj) {
            this[key] = obj[key] == undefined ? defaultObj[key] : obj[key];
        }

        
        if (typeof this.selector === "string" && this.selector!="") {
            this.contianer = document.querySelector(this.selector);
        }
        
        this.setData();
        this.setStyle();
        this.render();
        this.addEvent();
    }

    setData() {
        this.parentWidth = this.contianer.offsetWidth;
        this.colCount = parseInt(this.parentWidth / this.width);
        // 缝隙     
        this.cranny = (this.parentWidth % this.width) / (this.colCount + 1);
        this.arr = new Array(this.colCount);
        this.arr.fill(this.cranny);
    }

    setStyle(){

        Utils.setStyle(`
            ${this.selector} {
                position:relative;
            }
            ${this.selector} img{
                position:absolute;
                width:${this.width}px;
            }
        `,"waterFall")
    }

    render() {
        for (var i = 0; i < this.imgs.length; i++) {

            let imgDom = document.createElement("img");
            imgDom.src = this.imgs[i];            
            this.contianer.appendChild(imgDom);
            this.imgDoms.push(imgDom);
        }
    }

    updatePos() {

        for (var i = 0; i < this.imgDoms.length; i++) {

            // 列下标；
            let colIndex = i % this.colCount;

            this.imgDoms[i].style.cssText += `
                left:${colIndex * this.width + (colIndex + 1) * this.cranny}px;
                top:${this.arr[colIndex]}px;
            `;
            this.arr[colIndex] += this.imgDoms[i].offsetHeight + this.cranny;

            console.log("this.imgDoms[i].offsetHeight",this.imgDoms[i].offsetHeight);

        }

    }

    addEvent() {

        // 定义一个数组，保存所有的图片加载的代码（异步的）。
        let arr = [];
        for(let i=0;i<this.imgDoms.length;i++){
            arr.push(new Promise((resolve,reject)=>{
                this.imgDoms[i].onload = () => {
                    resolve(this.imgDoms[i].offsetHeight);
                }                
            }));
        }

        // Promise.all()表示所有的异步操作执行完毕，才调用then的回调函数。
        Promise.all(arr).then(result=>{
            console.log("result",result);
            this.updatePos();
        })

        window.addEventListener("resize", this.resizeHandle)
    }

    // 窗口调整大小后，重新计算。
    resizeHandle = () => {
        this.setData();
        this.updatePos();
    }
}