import express from "express";

//rest object
const app = express()

//rest api app.get(url pattern, arrow/normal function)
app.get('/', (req, res) => {
    res.send(
        "<h1> Welcome to My App </h1>"
    );
});


//port
const PORT = 8080

//run listen
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

