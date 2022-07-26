const path = require("path")

let mainController = {
    ingreso: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/home.html"))
    }
}

module.exports = mainController