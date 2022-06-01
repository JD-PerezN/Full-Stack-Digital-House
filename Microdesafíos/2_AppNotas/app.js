// MÓDULOS EXPORTADOS
const FUNCIONTAREAS = require("./funcionesDeTareas.js")

// VARIABLES
let accion = process.argv[2]

console.log(FUNCIONTAREAS(accion))

//console.log(Object.entries(tareas).length)