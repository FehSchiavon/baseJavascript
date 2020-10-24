// EXPRESSÃO
function minhaFuncao1(parametro1) {
    return `aeeee`
}

// DECLARATIVA
const minhaFuncao2 = function(parametro1) {
    return `aeeee ${parametro1}`
}

// ARROW FUNCTION
const minhaFuncao3 = (parametro1) => {
    return `aeeee ${parametro1}`
}

// ARROW FUNCTION C/ UM PARAMETRO 
const minhaFuncao4 = parametro1 => `aeeee ${parametro1}`

// ARROW FUNCTION DENTRO DE OBJECT
const obj1 = {
    minhaFuncao5: parametro1 => `aeeee ${parametro1}`
}

obj1.minhaFuncao5('teste')

// FUNCTION DENTRO DO OBJECT
const obj2 = {
    minhaFuncao6 (parametro1) {
        return `aeee ${parametro1}`
    }
}