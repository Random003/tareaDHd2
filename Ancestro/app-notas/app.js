const fs = require ("fs");
const tareasJson = fs. readFileSync ("./tareas.json", "utf-8");
const tareas = JSON.parse (tareasJson);

tareas.forEach(element => {
    console.log(element.titulo);
});
