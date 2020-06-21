const fs = require('fs');

function leerArchivoJSON () {
    const tareasJson = fs.readFileSync('./tareas.json', 'utf-8'); 
    return JSON.parse(tareasJson)
}
//tareas.forEach(element => { 
//console.log(element.titulo);
//});

function escribirArchivoJSON(tareas) {
   let tareasJson = JSON.stringify(tareas, null, ' ');
   fs.writeFileSync('./tareas.json', tareasJson)
}

module.exports = {};