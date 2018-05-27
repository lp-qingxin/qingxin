let obj1={
    name:'zs',
    age:18
}

let obj2={
    x:'ls',
    y: 20
}

let obj3={
    z:'ls',
    y: 10000000
}
// 合并对象 把后面的所有对象属性取出来 合并到第一个参数里面
// 如果有相同的属性  后面的会覆盖前面的

// let obj4=Object.assign({},obj1,obj2,obj3);

// console.log(obj4);
// Object.keys(obj1)  把对象的属性拿出来 组成一个数组
// Object.values(obj1)  把对象的值拿出来 组成一个数组
// console.log(Object.values(obj1));






/* 
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3= [...arr1,...arr2];
console.log( arr3 ) */

let arr1=[1,2,3];
// 迭代方法 类似与 $(".box").each(function(ele,index){  })  $.each()
// 以后会经常见到
// arr1.forEach(function(ele,index){

// })
// arr1.filter
// arr1.map