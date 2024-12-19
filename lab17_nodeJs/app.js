// import the http module
const http = require("http")
const fs = require("fs") // file streaming

// create server
const server = http.createServer((request, response) =>{
    //send the request
    /*
    response.write("This is the response from the server")
    response.end("\n--------end--------")
    console.log(request.url)
    */
   // send the request through the index.html
   /*
   response.writeHead(200, {'content-type': 'text/html'})
   const readstream = fs.createReadStream(__dirname + '/index.html')

   //Piping
   readstream.pipe(response)
   */

   // SEND THE REQUEST THROUGH A JSON FILE
   response.writeHead(200, {'content-type':'application/json'})
   //JSON data
   const user = {
    name: "Peter Pan",
    email: "peterpan@neverland.com"
   }
   // piping
   response.end(JSON.stringify(user))

})

// server listening to port 3000
server.listen((3000),function(){
    console.log("Server is running")
})