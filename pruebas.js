let curso = {
    alumnos: 32,
    docentes: ["Nacho", "Javi"],
    horario: "19 a 21",
    notificacion: function() {
        return (`El horario del curso es de ${this.horario}`)
    }
}

function Curso(alumnos, docentes, horario) {
    this.alumnos = alumnos
    this.docentes = docentes
    this.horario = horario  
}

let cursoProgramacion = new Curso(50, ["Javi", "Gerard"], "8 a 12")

let laMitad = num => (num/2)

let dias = ["L", "M", "J"]

let trabajar = dia => {
    if(dia in dias) {
        return true
    }
    else {
        return false
    }
}

//console.log(trabajar("I"));

let fruta = "Naranja" 

let cond = fruta == "Manzana" ? "Me gustan las manzanas": "Queria manzana"

//console.log(cond);

let semaforo = "Violeta"

switch (semaforo) {
    case ("Verde"):
        console.log("Puede seguir");
    break

    case ("Amarillo"):
        console.log("Detenerse");
    break

    case ("Rojo"):
        console.log("No avanzar");
    break

    default:
        console.log("Color inexistente");
    break
}