const fs = require ("fs");
const tareasJson = fs. readFileSync ("./tareas.json", "utf-8");
const tareas = JSON.parse (tareasJson);


//let parametros = process.argv;  argv tiene los argumentos 
//el [2] es para que tome el ejecutable app.js y le agregue el pad (osea lo que escribo despues de node app.js, osea node app.js pendientes)
let accion = process.argv[2];


switch (accion) {
    case undefined:
    case "todas":
        tareas.forEach(element => {
           console.log(element.titulo, "(" + element.estado + ")");
        });
        break;
    case "pendientes" :
        let tareasFiltradas = tareas.filter(elem => elem.estado == "pendiente"); 
        tareasFiltradas.forEach(element => {
            console.log(element.titulo, "(" + element.estado + ")");
        }); 
        break; 
    default:
          console.log();
          console.log("No entiendo esa acción");
}