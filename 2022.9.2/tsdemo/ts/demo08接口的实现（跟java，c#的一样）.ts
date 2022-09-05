

interface ClockInterface1 {
    tick():void
}

// 接口：限定了，实现接口的类，必须遵循的规范（类中必须有接口的属性）
interface ClockInterface{
    currDate:Date,
    currHours:number;

    setHours(h:number):void;

    new (h:number,m:number):ClockInterface1;
    
}

class Clock implements ClockInterface1{
    currDate:Date = new Date();
    currHours:number;

    constructor(h:number,m:number){
        // 
        this.currHours = 12;
    }

    tick():void{
        
    }
 

    setHours(h: number): void {
        
    }

}