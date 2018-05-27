// function add(x,y){
//      return x+y
// }

/* let add=function(x,y){
    return x+y
}
let s=add(1,2);
console.log(s); */
// 最完整的箭头函数
/* let add=(x,y)=>{
    return x+y
}
let s=add(1,2);
console.log(s); */

// let add=  (x,y)=>x+y

// let s=add(1,2);
// console.log(s);


// let add=  (x)=>{
//     return x
// }

// let s=add();
// console.log(s);


let add=  x=> x

let s=add(1);
// console.log(s);

// let add=  (x,y)=> {
    
// }

let arr=[1,2,3];
// forEach 迭代函数 some filter map 
// arr.forEach(function(ele){
//     console.log(ele);
// })

arr.forEach((ele)=>{
    console.log(ele);
})