// function add(x, y = 0) {
//   return x + y;
// }

// console.log(add(1))
//实际参数 比 形式参数 多了 多的就忽略了
//实际参数 比 形式参数 少了 没有接受到的参数值就是undefined

// function add(x, y ) {
//     // console.log(y);
//     y= y!==undefined?y:0
//     return x + y;
//   }
  
//   console.log(add(1))

// {x,y} /把对象里面的 x 和y属性拿出来用
function add( {x,y}   ) {
  return x + y;
}

let obj={
    x:1,
    y:2
}

// {x,y}=obj

// add(  obj )
// add(
//     {
//         x:1,
//         y:2
//     }
// )


// function add() {
// //   console.log(arguments)  由调用的时候 传进来的实际参数组成的 伪数组
// }

// add(1,2,3,4,5,6);

function add(a,b,...arr) { //剩余参数  在函数定义的时候 剩余参数组成的数组
    console.log(arr)  //由调用的时候 传进来的剩余参数组成的 数组
}
    
// add(1,2,3,4,5,6);

let arr=[1,2,3,4,5,6]

add(...arr);
// add(1,2,3,4,5,6)

// 在函数定义的时候 ...arr 类似 剩余参数组成的数组
// 其他情况不管在哪看见  都算  把每一项拿出来使用
































    