//Módulos necesarios
const express = require("express")
const path = require("path")

//Variables 
const publicPath = path.join(__dirname, "./public")
const app = express()
const port = 3000

//Recurso de archivos estáticos en la carpeta public
app.use(express.static(publicPath))

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})