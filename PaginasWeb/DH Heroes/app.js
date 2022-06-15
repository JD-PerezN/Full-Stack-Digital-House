// PRÁCTICA INTEGRADORA
//Módulos necesarios
const express = require("express")
const app = express()
const path = require("path")

//Ubicación de los archivos estáticos
app.use(express.static("public"));

//Inicialización del servidor
app.listen(3000, () => console.log("Server running"))

//URL index
app.get("/", function (req, res) {
    let rutaHtml = path.join(__dirname, "/views/index.html")
    res.sendFile(rutaHtml)
})

//URL babbage
app.get("/babbage", function (req, res) {
    let rutaHtml = path.join(__dirname, "/views/babbage.html")
    res.sendFile(rutaHtml)
})

//URL berners-lee
app.get("/berners-lee", function (req, res) {
    let rutaHtml = path.join(__dirname, "/views/berners-lee.html")
    res.sendFile(rutaHtml)
})

//URL clarke
app.get("/clarke", function (req, res) {
    let rutaHtml = path.join(__dirname, "/views/clarke.html")
    res.sendFile(rutaHtml)
})

//URL hamilton
app.get("/hamilton", function (req, res) {
    let rutaHtml = path.join(__dirname, "/views/hamilton.html")
    res.sendFile(rutaHtml)
})

//URL hopper
app.get("/hopper", function (req, res) {
    let rutaHtml = path.join(__dirname, "/views/hopper.html")
    res.sendFile(rutaHtml)
})

//URL lovelace
app.get("/lovelace", function (req, res) {
    let rutaHtml = path.join(__dirname, "/views/lovelace.html")
    res.sendFile(rutaHtml)
})

//URL turing
app.get("/turing", function (req, res) {
    let rutaHtml = path.join(__dirname, "/views/turing.html")
    res.sendFile(rutaHtml)
})