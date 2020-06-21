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


let tareas = leerArchivoJSON();

//let parametros = process.argv;  argv tiene los argumentos el primero es el ejecutable de node y el segundo el app.js
//el [2] es para que tome el ejecutable app.js y le agregue el pad (osea lo que escribo despues de node app.js, osea node app.js pendientes)

let accion = process.argv[2];
let parametros = process.argv.slice(3);

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

        // Microdesafío
        // 1. Atajar el caso de 'crear'
        // 2. Hacer un console.log() de el titulo y de la descripción
        // 3. Crear un objeto literal a partir de lo que envía el usuario
        // {
        //     "titulo": "una nueva",
        //     "descripcion": "con su descripción",
        //     "estado": "pendiente"
        //    }

    case "crear" :
      let tareaNueva = {
          titulo: parametros [0],
          descripcion: parametros [1],
          estado: "pendiente"
      }  
       
       tareas.push(tareaNueva);

       escribirArchivoJSON(tareas);
       
    break 
    


    // Micro desafío
    // 1. Atajar el caso de 'completar'
    // 2. Vamos a recorrer el array de tareas
    //  - usar map()
    //  - usar un if()
    // 3. Vamos a modificar la tarea que corresponda
    // 4. Vamos a guardar los cambios


    
    // Micro desafío
    // 1. Atajar el caso de 'borrar'
    // 2. Vamos a recorrer el array de tareas
    //  - usar filter()
    // 3. Vamos a filtrar la tarea que corresponda
    // 4. Vamos a guardar los cambios



      //default ataja cualquier otro caso (similar al "else" que usamos en el "if")
    default:
          console.log();
          console.log("No entiendo esa acción");         
}

