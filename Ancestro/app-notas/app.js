const tareas = require ("./tareas");
const chalk = require ("chalk");

//let parametros = process.argv;  argv tiene los argumentos el primero es el ejecutable de node y el segundo el app.js
//el [2] es para que tome el ejecutable app.js y le agregue el pad (osea lo que escribo despues de node app.js, osea node app.js pendientes)

let accion = process.argv[2];
let parametros = process.argv.slice(3);

switch (accion) {
    case undefined:


    case "todas":
         tareas.todas();
        break;


    case "pendientes":
        tareas.pendientes();
        break; 

        
    case "crear" :
        tareas.crear(parametros[0], parametros[1]) 
    break 
    

    case "borrar":
        tareas.borrar(parametros[0])
        break


      //default ataja cualquier otro caso (similar al "else" que usamos en el "if")
    default:
          console.log();
          console.log("No entiendo esa acción");         
}