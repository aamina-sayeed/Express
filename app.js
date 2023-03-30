import express from "express"
       // port no
//react-3000
//backend-5000

const port=5000
const app=express()

//HTTP METHODS:GET POST PUT POST DELETE

// app.get("/aamina",(req,res)=>{
//     res.send("<h1>HEllo welcome to my website</h1>")
// })

// app.get("/users/login",(req,res)=>{
//     res.send("<h1>Hello welcome to my login page</h1>")
// })

// app.get("/users/register",(req,res)=>{
//     res.send("<h1>Hello welcome to register page</h1>")
// })

// app.get("/pathaan",(req,res)=>{
//     res.send("<h1>Hello welcome to my website this is Pathaan</h1>")
// })

// app.get("/jawaan",(req,res)=>{
//     res.send("<h1>Hello welcome to my website this is Jawaan</h1>")
// })

app.use(express.json())//to take input in json format from request
//app.use(express.text())

//app.all("./",(req,res)=>{
//can send any methods then instead of app.get app.post etc all methods can work 
//})

const obj={name:"aamina"}
app.get("/get",(req,res)=>{
    res.send("GET")
})

app.post("/post",(req,res)=>{
    // res.send("<h1>Hello World!</h1>")
    // res.json(obj) //no need to convert obj to string using stringify /parse etc like in nodejs
    console.log(req.body)
    
    res.status(200).send(req.body)
})

app.put("/put",(req,res)=>{
    res.send("PUT") //html and plain text 
})

app.delete("/delete",(req,res)=>{
    // res.send("DELETE")
   res.redirect("https://www.google.com")
})

app.get("/download",(req,res)=>{
    res.download("./intro.txt")
})

app.use((req,res)=>{
    // res.status(400).json({msg:"Invalid route"})
    res.status(400).send(`<a href="https://google.com">Click me</a>`)
})

app.listen(port,()=>{

    console.log(`Server is listening at ${port}`)
})

//res.json-json
//res.send-html and plain text