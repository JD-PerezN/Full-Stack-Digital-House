const express = require("express")
const app = express()
const path = require("path")

//Variables 
//const publicPath = path.join(__dirname, "./public")

const port = 3000

const rutaMain = require("./routes/main")

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})

app.use("/", rutaMain)