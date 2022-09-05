export default class Person{
    public name:string;
    private _age:number;
    private _sex:string="男";
    protected money:number = 100;
    
    constructor(name:string,age:number){
        this.name=name;
        this._age = age;
    }

    private eat(){
        console.log("hi");
    }

    // 访问器属性
    set age(a:number){
        if(a<0 || a>120){
            return;
        }
        this._age = a;
    }

    get age(){
        return this._age;
    }

    set sex(s:string){
        console.log("set函数");        
        this._sex = s;
    }

    get sex(){
        return this._sex;
    }
}
