const fs = require ("fs");

function leerArchivoJSON () {
    const tareasJson = fs. readFileSync ("./tareas.json", "utf-8");
    return JSON.parse (tareasJson);
}  

// Microdesafío
// 1. Crear la funcion escribirArchivoJSON()
// - La función va a recibir un array
// - Van a convertir el array a JSON
// - Usando fs.writeFileSync van a escribir el archivo JSON

function escribirArchivoJSON(tareas) {
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./tareas.json', tareasJson);
}

function todas() {
    let tareas = leerArchivoJSON();
    
    tareas.forEach(element => {
        console.log(element.titulo, '(' +  element.estado + ')');
    });
}

function pendientes (){
    let tareas = leerArchivoJSON

    let tareasFiltradas = tareas.filter(elem => elem.estado == "pendiente"); 
    tareasFiltradas.forEach(element => {
        console.log(element.titulo, "(" + element.estado + ")");
    }); 
}





module.exports = {
    todas : todas,
    pendientes : pendientes
}