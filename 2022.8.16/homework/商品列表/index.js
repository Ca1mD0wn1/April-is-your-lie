import Utils from './Utils.js';
import cssStr from "./css.js";

export default class Goods {
    constructor(obj) {
        let defaultObj = {
            container: document.body,
            data: {},
            id: undefined
        }
        for (let key in defaultObj) {
            this[key] = obj[key] == undefined ? defaultObj[key] : obj[key];
        }

        this.data.currIndex = 0;

        this.setStyle();
        this.render();
        this.addEvent();

    }

    setStyle() {
        Utils.setStyle(cssStr, "goods");
    }
    render() {
        let goods = this.data;
        this.id = goods.id;

        let htmlStr = `
        <div class="goods">
        <div class="iconImg">
            <img src="${goods.list[goods.currIndex]?.img}  ">
        </div>
        <div  id=good${goods.id} class="iconList" clear >
        ${goods.list.map((item, idx) => {
            return `<img index=${idx} class="icon-img"  src="${item.img}" style="${idx == goods.currIndex ? `border-color: red;` : ``}">`
        }).join("")
            }
        </div>
        <div class="priceCon">
            ￥<i>${goods.list[0].price}</i>
        </div>
        <div class="titleCon">
            <span class="titleIcon">京品</span>
            <a href="#">${goods.info}</a>
        </div>
        <div class="info clear">
        </div>
        <div class="judgeCon">
            <span class="judge">${goods.judge}</span>条评论
        </div>
        <div class="shoppingCon">
            <a href="#" class="shopping">${goods.shop}</a><img src="./img/chat.png">
        </div>
        ${(function () {
                let str = "";
                for (let key in goods?.icons) {
                    // 生成span（icon）
                    str += goods.icons[key]?.map(item => `<span class="${key}">${item}</span>`).join("");
                }
                return str;
            })()}
    </div>`


        let div = document.createElement("div");
        div.innerHTML = htmlStr;
        this.container.append(div);
    }
    addEvent() {
        // console.log(`#good${this.id}`);
        let imgBoxs = document.querySelector(`#good${this.id}`);
        // console.log(imgBoxs);
        imgBoxs.onmouseover = event => {
            let e = event || window.event;
            if (e.target.tagName.toLowerCase() == "img") {
                e.target.parentNode.previousElementSibling.firstElementChild.src = e.target.src;

                let imgDoms = e.target.parentNode.children;
                for (let i = 0; i < imgDoms.length; i++) {
                    imgDoms[i].style.borderColor = "";
                }
                e.target.style.borderColor = "red";
            }
        }
    }
}