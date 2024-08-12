const express = require('express')
const app = express()

app.get("/", async (request,response)=>{
  response.send("Hello MR.Jayanth")
})


app.listen(3000,()=>{
  console.log("This is running at...")
})


