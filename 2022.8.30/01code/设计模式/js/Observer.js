export default class Observer{
    constructor(){
        this.arr=[];
    }
    // 添加订阅者
    addSubsciber(cb){
        this.arr.push(cb);
    }
    // 删除订阅者
    removeSubscriber(cb){
        let index = this.arr.indexOf(cb);
        this.arr.splice(index,1);
    }
    
    // 发布
    publish(what){
        this.arr.forEach(item=>{
            item(what);
        });
    }
}