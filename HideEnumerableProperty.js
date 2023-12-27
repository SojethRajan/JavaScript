let person = {
    name : 'soj',
    age : 13,
    isActive : false
}

Object.defineProperty(person,'name',{
    enumerable : false,
    value : 'sjsj',
})



for(let key in person){
    console.log(key + " : "  + person[key])
}