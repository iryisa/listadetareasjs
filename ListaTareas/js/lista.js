var nuevaTarea = document.getElementById('nuevaTarea');
var nuevaTareaForm = document.querySelector('#nuevaTareaForm');
var tareasActivas = document.querySelector('#tareasactivas');
var BorrarTarea;
var filtrar = document.querySelectorAll('.filtrar');
var filtarPrioridad = document.getElementById('filtarPrioridad');
var filtarFrecuencia = document.getElementById('filtarFrecuencia');
var buscarInput = document.getElementById('buscar');
var buscarBtn = document.getElementById('buscarBtn');
var ordenPrioridadBtn = document.getElementById('ordenPrioridadBtn');
var ordenFrecuenciaBtn = document.getElementById('ordenFrecuenciaBtn');
var nuevaTareaBtn = document.getElementById('nuevaTareaBtn');
var nuevoEstadoTarea = false;
var prioridadPrimero = true;
var frecuenciaPrimera = true;
var idContador = 5;S
var listaPrioridad = new Array('urgente', 'normal', 'baja', 'opcional');
var listaFrecuencia = new Array('diaria', 'semanal', 'mensual', 'trimestral');


//Función crear tarea
function crearTarea(pNombreTarea, pPrioridad, pFrecuencia) {
    var tarea = new Object();
    tarea = {
        idTarea: idContador,
        nombreTarea: pNombreTarea,
        prioridad: pPrioridad,
        frecuencia: pFrecuencia
    }
    idContador++;
    listaTareas.push(tarea);
    paintTarea(tarea);
}

//funcion pintar varias tareas
function pintarTareas(listaTareas) {
    tareasActivas.innerHTML = '';
    for (tarea of listaTareas) {
        pintarTarea(tarea);
    }
}
function pintarTareas(pListaTareas) {
    seccionTareas.innerHTML = '';
    for (let i = 0; i < pListaTareas.length; i++) {
        let articulo = document.createElement('article');
        articulo.className = pListaTareas[i].prioridad;

        let divNombre = document.createElement('div');
        let h2 = document.createElement('h2');
        let h2Texto = document.createTextNode('' + pListadoTareas[i].nombre + '');
        h2.appendChild(h2Texto);
        divNombre.appendChild(h2);

        let divIcono = document.createElement('div');
        let enlace = document.createElement('a');
        enlace.href = '#';
    }
}
/*
var boton = document.getElementById('btn');
var listaTareas = new Array();
var seccionListaTareas = document.querySelector('#listaTareas');
var ultimoId = 1;

boton.addEventListener('click', e => {
    e.preventDefault();
    var nombreTarea = document.getElementById('nombreAgregarTarea').value;
    var prioridadTarea = document.getElementById('prioridadAgregarTarea').value;
    //var frecuenciaTarea = document.getElementById('frecuenciaAgregarTarea').value;

    if (nombreTarea.length == 0 || prioridadTarea.length == 0 || frecuenciaTarea.length == 0 || nombreTarea[0] == " " || prioridadTarea[0] == " " || frecuenciaTarea[0] == " ") {
        //mandar un mensaje al usuario
        document.getElementById('mensaje').innerText = "Los campos no pueden ser vacios";
        document.getElementById('form').reset();

    }
    else {

        agregarTarea(nombreTarea, prioridadTarea, frecuenciaTarea);
        document.getElementById('mensaje').innerText = "";
        document.getElementById('form').reset();

    }


})

function agregarTarea(pNombreAgregarTarea, pPrioridadTarea, pFrecuenciaTarea) {

    // let registro = new Object();
    // registro.nombre = pNombre;
    // registro.aficion = pAficion;

    let registro = {
        id: ultimoId,
        nombreTarea: pNombreAgregarsTarea,
        prioridadTarea: pPrioridadTarea,
        frecuenciaTarea: pFrecuenciaTarea
    }

    listaTareas.push(registro);
    pintarNombreTarea(registro);
    pintarPrioridadTarea(registro);
    pintarFrecuenciaTarea(registro);
    ultimoId++;

}


function pintarListaTareas(pObjeto) {
    var article = document.createElement('article');
    var h3 = document.createElement('h3');
    var textoInterior = document.createTextNode(`${pObjeto.nombreTarea} : ${pObjeto.prioridadTarea}: ${pObjeto.frecuenciaTarea}`);

    h3.appendChild(textoInterior);
    article.appendChild(h3);

    seccionAficiones.appendChild(article);

}*/
