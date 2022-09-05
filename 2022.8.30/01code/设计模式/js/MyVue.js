import Observer from "./Observer.js";

export default class Vue{
    constructor(obj){

        // 把data里的数据挂载到vue对象本身上。
        for(let key in obj.data){
            
            this["_"+key] = obj.data[key];

            Object.defineProperty(this,key,{
                set:function(val){
                    this["_"+key] = val;
                    console.log(key+"被改成了"+val);
                    // 发布
                    this.subscriberObjs[key].publish(val);
                },
                get:function(){
                    return this["_"+key];
                }
            })
        }

        this.$el = obj.el;
        this.$data = obj.data;

        // 通过数据寻找html上使用该数据的dom。
        this.vNodeObj = {
            name:[{
                dom:"#p01",
                innerHTML:"姓名：{{name}}"
            },{
                dom:"#p02",
                innerHTML:"username：{{name}}"
            }],
            age:[{
                dom:"#p03",
                innerHTML:"年龄：{{age}}"
            },{
                dom:"#p04",
                innerHTML:"age：{{age}}"
            }],
            sex:[{
                dom:"#p05",
                innerHTML:"性别：{{sex}}"
            }]
        }

        // 订阅
        this.subscriberObjs =  this.subscriber();

        this.render();

    }

    // 创建观察者模式的对象，给每个数据都创建。

    subscriber(){
        let obj  = {};
        
        for(let key in this.$data){
            // 创建观察者对象
            obj[key] = new Observer();

            // 订阅
            this.vNodeObj[key].forEach(item=>{
                obj[key].addSubsciber(function(val){
                    document.querySelector(item.dom).innerHTML = item.innerHTML.replace(new RegExp(`{{${key}}}`),val);
                });
            })            
        }

        return obj;
        
    }


    // 把数据渲染到页面上
    render(){
        let htmlStr = document.querySelector(this.$el).innerHTML;
        // htmlStr.replace(/{{name}}/,this.name);
        for(let key in this.$data){
            htmlStr = htmlStr.replace(new RegExp(`{{${key}}}`,"gm"),this.$data[key]);
        }

        document.querySelector(this.$el).innerHTML = htmlStr;

    }


}