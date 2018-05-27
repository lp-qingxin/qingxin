const person = {
    name: 'zs',
    age: 22,
    gender: '男'
  }
// 只能取 person对象里面有的属性名 一模一样
// 对象没有的属性 取值 默认undefined
// 可以想要取谁就取谁
// 如果非要改名 : 新名字 
// let { name : abc , age  }=person;

// console.log(abc);

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// [1,2,3,4,5,6]
// arr1.concat(arr2);
// 数组的对应解构
//  ...arr 把arr里面的每一项 一个一个取出来放在对应的位置
// let arr3=[...arr2,...arr1];

// console.log(arr3);

// f='ffff' 给f一个默认值是 ffff 如果对应没有具体值就用默认值 如果有呢？就用有的
let  [a='aaaa',b,c,d,e,f='ffff']=[1,2,,4,5,]
// 数组会一一对应赋值 如果
console.log(a,b,c,d,e,f)


// function add(x,y=5){
//     console.log(x+y)
// }

// add(1,2);
// add(3)






