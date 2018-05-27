

const fs=require('fs');
const path=require('path');

fs.readFile(path.join(__dirname,'./files/成绩.txt'),'utf-8',(err,data)=>{
    if(err) return console.log("读取失败");
    // console.log(data);
    let resArr=data.split(" ");
    // console.log(res);
    resArr.forEach((item,i)=>{
        if(item.length !=0 ){
            // console.log(item.replace("=",":"));
            let str = item.replace("=",":");
            console.log(str);
            fs.appendFileSync("./files/成绩2.txt",str+"\n","utf-8",(err)=>{
                if(err) return console.log("写入失败");
                console.log("写入成功");
            });
        }
    });
});