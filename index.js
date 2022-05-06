function alturaArbolUtopico(n) {
    let i = 1
    let res = 1

    for(i; i <= 7; i++) {
        if(i % 2 == 0) {
            res = res + 1
        }
        else{
            res = res * 2
        }
    }
    return res
}

function masMenos(arr) {
    let cantPositivos = 0
    let cantNegativos = 0
    let cantCeros = 0

    let i = 0
    let res = []
    let longitud = arr.length

    for(i; i <= (longitud - 1); i++) {
        if(arr[i] == 0) {
            cantCeros = cantCeros + 1
        }
        else if(arr[i] > 0) {
            cantPositivos = cantPositivos + 1
        }
        else {
            cantNegativos = cantNegativos + 1
        }
    }

    res.push(cantPositivos/longitud)
    res.push(cantCeros/longitud)
    res.push(cantNegativos/longitud)

    return res
}

function laClaveSecreta(arr) {
    let longitud = arr.length - 1
    let res = []
    
    for(longitud; longitud >= 0; longitud--) {
        if(arr[longitud] != "*") {
            res.push(arr[longitud])
        }

    }
    return res.join("")

}

console.log(laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"]))
