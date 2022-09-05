import Utils from "./Utils.js";

export default class Component extends EventTarget{
    comName;
    el;
    css;

    constructor(el, comName, css) {
        super();
        if (typeof el === "string") {
            this.el = document.createElement(el);
        }else{
            this.el = el;
        }
        this.comName = comName;
        this.css = css;              
        this.setCSS();
    }

    setCSS() {
        var styleSheet=Array.from(document.styleSheets).find(item=>item.title===this.comName);
        if(!styleSheet){
            Utils.setStyle(this.comName,this.css);
        }
    }

    // 插入到父元素的尾部
    appendTo(parent) {
        if (typeof parent === "string") parent = document.querySelector(parent);
        if (parent instanceof HTMLElement) {
            parent.appendChild(this.el);
        }
    }
    // 插入到父元素中某个元素前面
    insertBefore(parent, next) {
        if (typeof parent === "string") parent = document.querySelector(parent);
        if (typeof next === "string") next = document.querySelector(next);
        if (parent instanceof HTMLElement && next instanceof HTMLElement) {
            parent.insertBefore(this.el, next);
        }
    }
}

