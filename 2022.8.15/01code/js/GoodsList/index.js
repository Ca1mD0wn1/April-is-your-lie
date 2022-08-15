import Compoent from "../Component/index.js";
import css from "./css.js";

export default class GoodsList extends Compoent {

    constructor(data) {
        super("div", "GoodsList", css);
        this.data = data;  
        this.render();
        this.appendTo("body")
    }

    render() {
        let _data = this.data;
        this.el.innerHTML = `
        <div class='iconImg'>
            <img src='${_data.list[0].img}'>
            ${!_data.schedule ? "" : `<div class='iconPromote'>
                ${!_data.schedule.img ? "" : `<img src='${_data.schedule.img}'>`}
                ${!_data.schedule.info ? "" : `<span class='iconPromoteTxt'>${_data.schedule.info}</span>`}
            </div>`}
        </div>
        <div class='iconList clear'>
            ${_data.list.reduce((v, t) => v + `<img class='icon-img' id='${t.id}' src='${t.img}'>`, "")}
        </div>
        <div class='priceCon'>
            ￥<i>${Number(_data.list[0].price).toFixed(2)}</i>
        </div>
        <div class='titleCon'>
            <span class='titleIcon'>京品</span>
            <a href='#'>${_data.info}</a>
        </div>
        <div class='info clear'>
            ${_data.arguments.reduce((v, t) => v + `<span class='infoitem'>${t}</span>`, "")}
        </div>
        <div class='judgeCon'>
            <span class='judge'>${_data.judge > 10000 ? ~~(_data.judge / 10000) + "+万" : _data.judge}</span>条评论
        </div>
        <div class='shoppingCon'>
            <a href='#' class='shopping'>${_data.shop}</a><img src='./img/chat.png'>
        </div>
        ${!_data.icons ? "" : Object.keys(_data.icons).reduce((v, key) => {
            if (!_data.icons[key] || _data.icons[key].length === 0) return v;
            return v + _data.icons[key].reduce((value, item) => value + `<span class='${key}'>${item}</span>`, "")
        }, "")}
    `
        this.img = this.el.querySelector(".iconImg>img");
        this.price = this.el.querySelector(".priceCon>i");
        var evt = new MouseEvent("mouseover", {
            bubbles: true
        });
        this.el.querySelector(".iconList>img").dispatchEvent(evt);

    }


}