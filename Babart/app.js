

const fs = require('fs');
const tareasJson = fs.readFileSync('./tareas.json', 'utf-8'); 
const  tareas = JSON.parse(tareasJson)

//tareas.forEach(element => { 
//console.log(element.titulo);
//});
    
//let parametros = process.argv;
let accion = process.argv[2];

switch (accion) {
    case undefined: 
    case 'todas': 
    tareas.forEach(element => { 
        console.log(element.titulo, '(' + element.estado + ')');
        });
    break;
    case 'pendientes': 
        let tareasFiltradas= tareas.filter(element => element.estado == 'pendiente');
        tareasFiltradas.forEach(element => { 
        console.log(element.titulo, '(' + element.estado + ')');
        });
    break; 
        
    default: 
        console.log();
        console.log('No entiendo esa acción');
        
    }




