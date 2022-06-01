// Función para la lectura de las tareas
let funcionTareas = accion => {
    const FS = require("fs")
    let tareasJSON = FS.readFileSync("./tareas.json")
    let tareas = JSON.parse(tareasJSON)
    let i = 0
    let array = []

    switch(accion) {
        case("listar"):
            for(i; i <= (Object.entries(tareas).length - 1); i++) {
                array.push(`${i + 1}. ${tareas[i].titulo} - ${tareas[i].estado}`)
            }
            return (`\nListado de tareas \n------------------ \n${array.join("\n")} \n------------------`)
            break
            
        case(""):
            return ("Atención - Tienes que pasar una acción.")
            break
        
        default:
            return ("No entiendo qué quieres hacer.")
    }
}

// Exportación del módulo local
module.exports = funcionTareas