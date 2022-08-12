
// class Person{
//     age=12;

// }


let person = (function(){
    var age=12;

    function eat(){

    }

    function drink(){

    }

    function getAge(){
        return age;
    }

    function setAge(value){
        if(value<0 || value>120){
            return ;
        }
        age = value;
    }

    return {
        getAge,
        setAge
    }

})()

