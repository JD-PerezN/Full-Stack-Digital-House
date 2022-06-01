// Función para la lectura de las tareas
const FS = require("fs")

let archivoTareas = {
    archivo: "./tareas.json",
    leerArchivo: function() {
        let tareasJSON = FS.readFileSync(this.archivo)
        return (JSON.parse(tareasJSON))
    }
}

let funcionTareas = accion => {
    let tareas = archivoTareas.leerArchivo()
    
    let i = 0
    let array = []

    switch(accion) {
        case("listar"):
            for(i; i <= (Object.entries(tareas).length - 1); i++) {
                array.push(`${i + 1}. ${tareas[i].titulo} - ${tareas[i].estado}\n`)
            }
            return (`\nListado de tareas \n------------------ \n${array.join("")}-------------------`)
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