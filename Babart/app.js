


let tareas = leerArchivoJSON(); 

//let parametros = process.argv;
let accion = process.argv[2];
let parametros = process.argv.slice(3);
console.log(process.argv.slice(3)); 


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
        
//microdesafio
//1 atajar el caso de "crear"
//2 hacer console.log() de ele titulo y de la descripción
//crear objeto literal a partir de lo que envia el usuario

//{
   // "titulo": "Refactorear con un forEach()",
   // "descripcion": "Magic magic magic",
    //"estado": "terminada"
   //}
    case 'crear':
        let tareaNueva = {
        titulo: parametros[0],
        descripcion: parametros[1],
        estado: "terminada"

        }
         tareas.push(tareaNueva);

        escribirArchivoJSON(tareas);
        console.log('Tarea creada con éxito');
        
    case 'borrar': 
        let tareasActualizadas = tareas.filter(function(tarea) {
            return parametros[0] !== tarea.titulo; 
         }
        ); 
        
         escribirArchivoJSON(tareasActualizadas);

         if (tareas.length !== tareasActualizadas.length) {
             escribirArchivoJSON(tareasActualizadas);
             console.log('Tarea borrada exitosamente');
         } else { 
             console.log(('No encontre esa tarea gato ropa apretada'));
             
         }
             
         break;

        console.log('Tarea borrada con exito! RECUERDE QUE EL POTRILLO ES MACHO Y NO ES PARIENTE DE CELESTE CITTTTD');
        
        
    break; 
   
//microdesafio
//atajar caso 'borrar'
//vamos a recorrer el array de tareas usar filter()
//vamos a filtrar la tarea que corrrrresponda
//vamos a guardar los cambios



    default: 
        console.log();
        console.log('No entiendo esa acción');
        
    }




