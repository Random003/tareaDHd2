const fs = require ("fs");
const tareasJson = fs. readFileSync ("./tareas.json", "utf-8");
const tareas = JSON.parse (tareasJson);


//let parametros = process.argv;
let accion = process.argv[2];


switch (accion) {
    case "todas":
        tareas.forEach(element => {
           console.log(element.titulo);
        });
        break;
      default:
          console.log();
          console.log("No entiendo esa acción");
}