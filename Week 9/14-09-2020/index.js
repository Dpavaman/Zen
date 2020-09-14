var fs = require('fs');
var  http = require('http');

let writeDate = function(){
    return new Date()
}

fs.writeFile("current-date-time.txt", `${writeDate()}`, (err)=>{
    if(err) throw err;

    console.log("File Created Succesfully !");
})

http.createServer((req,res)=>{
    fs.readFile("current-date-time.txt", (err,data)=>{
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.write(data);
        res.end();
    })
}).listen(8080);