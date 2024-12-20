const express = require("express");
const bodyParse = require("body-parser")
const mongoose = require("mongoose") 
 
//create app using express
const app = express()

app.use (bodyParse.json())
app.use(express.static('public'))
app.use(bodyParse.urlencoded({
    extended: true 
}))

//connect database 
// add connection here

// Posting the form data
app.post('/login', (request, response)=>{
    try{
        //get data from index.html
        const username= request.body.username
        const password = request.body.password

        //check the collected data in the console
        console.log(`Entered username =${username}\nEntered password = ${password}`)
    }
    catch(error){
        console.log("Error collecting the data -->" + error)
    }
})
//check connection 
mongoose.connection 
.once('open', ()=>{console.log("Connected to db...")}) 
.on('error', (error)=>{console.log("Error connecting", error)}) 

//establish the port and loading page
app.get('/',(req, res)=>{
     res.redirect('index.html') 
}).listen(3000)
