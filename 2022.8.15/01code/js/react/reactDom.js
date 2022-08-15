import Star from "../Star02/index.js"
import Carousel from "../Carousel/index.js"

export default class ReactDOM {

    static render(jsx, dom) {
        // 一、把所有的标签进行拆分

        // <Star num=10 />
        // <Carousel />

        let jsxArr = jsx.split(/(?<=\/>)\s+/g);
        jsxArr.length --;

        console.log(jsxArr);

        jsxArr.forEach(jsx => {
            jsx = jsx.trim();

            // 1、把jsx用空格的方式分割
            let arr = jsx.split(" ");
            // 2、第一个元素是标签名（组件名）
            let ComName = arr[0].substring(1);

            // 3、把标签的属性转成对象的写法
            let obj = {};
            for (let i = 1; i < arr.length; i++) {
                let [key, value] = arr[i].split("=");
                obj[key] = value;
            }

            // 4、创建对象（组件）
            obj.boxDom = dom;
            let str = `new ${ComName}(
                ${JSON.stringify(obj)}
            ) `
            eval(str);

        });
    }
}