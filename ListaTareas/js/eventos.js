nombreTarea
prioridadTarea
frecuenciaTarea
agregarTarea

mensajeError
formulariolistatareas
nombreTarea
habituales
prioridadTarea
content
btn

var content = document.getElementById('content');

(function () {
    // Variables
    var lista = document.getElementById("lista"),
        tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");

    // Funciones
    var agregarTarea = function () {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }


        enlace.appendChild(contenido);
        // Le establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Agrergamos el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";

        for (var i = 0; i <= lista.children.length - 1; i++) {
            lista.children[i].addEventListener("click", function () {
                this.parentNode.removeChild(this);
            });
        }

    };
    var comprobarInput = function () {
        tareaInput.className = "";
        teareaInput.setAttribute("placeholder", "Agrega tu tarea");
    };

    var eleminarTarea = function () {
        this.parentNode.removeChild(this);
    };

    // Eventos

    // Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    // Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);

    // Borrando Elementos de la lista
    for (var i = 0; i <= lista.children.length - 1; i++) {
        lista.children[i].addEventListener("click", eleminarTarea);
    }
}());

//filtro de diagnostico
var selectorFrecuencia = document.querySelector('#frecuencia');

selectorfrecuencia.addEventListener('change', recogeFrecuencia);

function recogeFrecuencia(e) {
    //e.target.value me devuelve el dia seleccionado cada vez que cambio el selector.
    let frecuencia = e.target.value;


    if (frecuencia != "") {
        let listaFiltradaFrecuencia = filtrarFrecuencia(nombreTarea, frecuencia);
        pintarListaTareas(listaFiltradaFrecuencia);
    } else {
        pintarListaTareas(nombreTarea);
    }



}


//fin

//funcion de pintado de cualquier lista de tipo .

function pintarListaTareas(pListaTareas) {
    seccionPacientes.innerHTML = "";

    if (pListaTareas.length != 0) {
        pListaTareas.forEach(Tarea => {
            seccionTareas.innerHTML += `<article class="">
                    <div class="row ">
                        <div class="col-md-8 ">
                            <div class="card-block">
                                <h4 class="card-title">${tarea.nombre}</h4>
                                <ul>
                                    <li>NombreTarea: <strong>${tarea.prioridad}</strong></li>
                                    <li>Prioridad: <strong>${tarea.frecuencia}</strong></li>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                </article> 
                <div class="line"></div>`
        })
    } else {
        seccionListaTareas.innerHTML = "<h2>No hay registros con esas condiciones</h2>"
    }

}

pintarListaTareas(listaTareas);

//funcion filtrar 

var btnSelectorPrioridad = document.querySelector('#btn');

btnSelectorPrioridad.addEventListener('click', recogerDatosPrioridad);

function recogerDatosPrioridad(e) {

    let datoPrrioridad = (document.querySelector('#prioridad').value == "") ? 0 : parseInt(document.querySelector('#prioridad').value);


    let datoFrecuencia = (document.querySelector('#frecuencia').value == "") ? 100 : parseInt(document.querySelector('#frecuencia').value);

    if (Prioridad = Frecuencia) {
        alert('La ')
    }
    else {
        let listaFiltrada = filtrarNombre(listaTareas, datoPrioridad, datoFrecuencia);
        pintarListaTareas(listaFiltrada);
    }

}


//funcion de busqueda 

var busqueda = document.querySelector('#search');
busqueda.addEventListener('keyup', recogerBusqueda);

function recogerBusqueda(e) {
    let palabraBuscar = e.target.value;

    var listaBusqueda = filtrarBusqueda(listaTareas, palabraBuscar);

    pintarlistaTareas(listaBusqueda);
}


//funcion filtro combinado // superfiltro

var btnFiltroCombinado = document.getElementById('btnCombinado');

btnFiltroCombinado.addEventListener('click', recogerDatosCombinado);


function recogerDatosCombinado(e) {
    let nombre = parseInt(document.getElementById('combinadoNombre').value);
    let prioridad = parseInt(document.getElementById('combinadoPrioridad').value);
    let freuencia = document.getElementById('combinadoFrecuencia').value;

    let listaPrioridad = filtrarPrioridad(listaTareas, nombre, frecuencia);
    let listaCombinada = filtrarFrecuencia(listaPrioridad, frecuencia);
    pintarListaTareas(listaCombinada);


}