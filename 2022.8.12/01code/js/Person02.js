
class Person{
    private age=12;//ts中使用ES7的写法，增加修饰符，private：私有的

    setAge(value){
        if(value<0 || value>120){
            return 
        }
        this.age =value;
    }

    getAge(){
        return this.age;
    }

}

