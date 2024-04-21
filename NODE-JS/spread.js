const ToArray = (arg1,arg2)=>{
    return [arg1,arg2]
}
//console.log(ToArray(1,2));

const toarray = (...arg)=> { //inside a func ... represents a rest operator
    return arg
}
//console.log(toarray(1,2,3,4,5,6));

const persons = {name : 'ok'}
const std = {...persons,age : 20} // inside a object or a array ... represents the spread operator
console.log(std);