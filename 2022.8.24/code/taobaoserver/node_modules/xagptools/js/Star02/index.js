import Utils from "../Utils.js";
import cssStr from "./css.js";

// 类:n星评价
export default class Star {
    contianer;
    num;
    img;
    imgWidth;
    imgHeight;
    score;

    constructor(obj) {

        console.log("Star的构造函数");
        
        let defaultObj = {
            contianer:undefined,
            spanDoms: undefined,
            scoreDom: undefined,
            num: 5,
            img: "./img2/star.gif",
            imgWidth: 27,
            imgHeight: 28,
            score: 0
        }

        for (let key in defaultObj) {
            this[key] = obj[key] == undefined ? defaultObj[key] : obj[key];
        }

        if(typeof this.contianer =="string"){
            this.contianer = document.querySelector(this.contianer);
        }

        this.setStyle();
        this.render();
        this.addEvent();

    }

    render() {
        console.log("this.num",this.num);
        let htmlStr = `<div id="box">`;
        for (let i = 0; i < this.num; i++) {
            htmlStr += "<span></span>"
        }
        htmlStr += `<b>${this.score}</b>`;
        htmlStr += `<hr/>`;
        htmlStr += "</div>"
        this.contianer ? this.contianer.innerHTML += htmlStr : "";
    }

    setStyle() {
        Utils.setStyle(cssStr);
    }

    addEvent() {
        this.spanDoms = this.contianer.querySelectorAll("#box span");
        this.scoreDom = this.contianer.querySelector("#box b");

        for (let i = 0; i < this.spanDoms.length; i++) {

            // 1、鼠标进入变成黄色
            this.spanDoms[i].onmouseenter = ()=>{
                // 以成绩和进入的星星的下标的最大值为分界线，前面的变黄，后面的变灰
                let index = this.score > (i + 1) ? this.score : (i + 1);
                this.changeStar(index);
            }

            // 2、鼠标离开变成灰色
            this.spanDoms[i].onmouseleave = ()=> {
                // 以成绩为分界线，前面的变黄，后面的变灰
                this.changeStar(this.score);
            }

            // 3、鼠标点击
            this.spanDoms[i].onclick = ()=> {
                this.score = i + 1;
                this.scoreDom.innerHTML = this.score;
                this.changeStar(this.score);
            }
        }
    }


    // 以指定的分界点进行分割。前面的变黄，后面的变灰
    changeStar(index) {
        for (let j = 0; j < index; j++) {
            this.spanDoms[j].style.backgroundPosition = `0px -${this.imgHeight}px`
        }
        for (let j = index; j < this.spanDoms.length; j++) {
            this.spanDoms[j].style.backgroundPosition = "0px 0px"
        }
    }

}