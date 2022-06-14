// Función para la lectura de las tareas
const FS = require("fs")

let archivoTareas = {
    archivo: "./tareas.json",
    leerArchivo: function() {
        let tareasJSON = FS.readFileSync(this.archivo, "utf-8")
        return (JSON.parse(tareasJSON))
    },
    // Función pendiente
    escribirJSON: function(arr) {
        let nuevasJSON = JSON.stringify(arr)
        FS.writeFileSync(this.archivo, nuevasJSON)
    },
    guardarTarea: function (arr) {
        let tarea = this.leerArchivo()
        tarea.push(arr)
        this.escribirJSON(tarea)
    },
    filtrarPorEstado: function (estado) {
        let tareas = this.leerArchivo()
        let arrFiltrado = tareas.filter(function (elemento) {
            return (elemento.estado == estado)
        })
        return (arrFiltrado)
    }
}

const tareas = archivoTareas.leerArchivo()
const accion = process.argv[2]

let listarTareas = () => {
    switch(accion) {
        case("listar"):
            console.log('\nListado de tareas');
            console.log('------------------');
    
            tareas.forEach((elemento, i) => {
                console.log(`${i + 1}. ${elemento.titulo} --> ${elemento.estado}`)
            })
            
            console.log()
            break

        case("crear"):
            let nombreTarea = {
                    titulo: process.argv[3],
                    estado: "pendiente"
                }
            archivoTareas.guardarTarea(nombreTarea)

            console.log(`\nNueva tarea creada`);
            console.log('------------------');
            console.log(`${nombreTarea.titulo} --> ${nombreTarea.estado}`)

            console.log();
            break
        
        case ("filtrar"):
            let estado = process.argv[3]
            let arrFiltrado = archivoTareas.filtrarPorEstado(estado)

            console.log(`\nListado de tareas por estado ${estado}`);
            console.log('------------------');
    
            arrFiltrado.forEach((elemento, i) => {
                console.log(`${i + 1}. ${elemento.titulo} --> ${elemento.estado}`)
            })
            
            console.log()
            break

        case undefined:
            console.log("Atención - Tienes que pasar una acción.")
            break
        
        default:
            console.log("No entiendo qué quieres hacer.")
    }
}

// Exportación del módulo local
module.exports = listarTareas
//module.exports = archivoTareas