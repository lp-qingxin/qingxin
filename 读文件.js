// const fs=require('fs');

// fs.readFile('./let.js','utf-8',(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(data);
// })


// fs.readFile('./let.js',(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(data.toString());
// })




const fs=require('fs');
fs.readFile("./index.html","utf8",(err,data)=>{
    if(err) return console.log(err.message);
    // successMessage = console.log(data);
    fs.writeFile("./abc.html",data,(err)=>{
        if(err) return console.log("写入失败"+err.message);
        console.log("写入成功");
    });
});


