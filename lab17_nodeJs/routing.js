const http = require('http')
const fs = require('fs')

const server = http.createServer((request,response)=>{
    response.writeHead(200, {"content-type":"text/html"})
    const url = request.url

    if(url==='/home' || request.url ==='/'){
        fs.createReadStream('index.html').pipe(response)
    }
    else if(url==='/about'){
        fs.createReadStream('about.html').pipe(response)
    }
    else{
        fs.createReadStream('404.html').pipe(response)
    }
})

// server listening to port 3000
server.listen((3000),function(){
    console.log("Server is running")
})