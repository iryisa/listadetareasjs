const btnNuevaTarea = document.getElementById('btnNuevaTarea');
const btnBuscar = document.getElementById('btnBuscar');
const btnBuscarCombinado = document.getElementById('btnBuscarCombinado');

const nombre = document.getElementById('nombre');
//const prioridad = document.getElementById('prioridad');
//const frecuencia = document.getElementById('frecuencia');
const content = document.getElementById('content');
const seccionTareas = document.getElementById('listaTareas');
const listaPrioridad = new Array('urgente', 'normal', 'baja', 'opcional');
const listaFrecuencia = new Array('diaria', 'semanal', 'mensual', 'trimestral');
const listaNombre = [];
const tareaForm = document.getElementById('tareaForm');
var listaTareas = new Array();
var ultimoId = 1;
//const listaTareas = document.getElementById('listaTareas');
const selectTarea = document.getElementById('selectTarea');
const selectprioridad = document.getElementById('selectPrioridad');
const selectFrecuencia = document.getElementById('selectFrecuencia');
const nuevaTarea = document.getElementById('nuevonombre');
const nuevaTareaForm = document.querySelector('#tareaForm');
const activeTarea = document.querySelector('#activeTarea');


const searchInput = document.getElementById('search');
const estadoTarea = true;
const idContador = 5;
/*var urgente = 4, normal = 3, baja = 2, opcional = 1;
const prioridad = [urgente, normal, baja, opcional];
var diaria = 1, semanal = 2, mensual = 3, trimestral = 4, anual = 5;
const frecuencia = [diaria, semanal, mensual, trimestral, anual]*/


//Función que se ejecuta ante el evento submit del botón de formulario
btnBuscar.addEventListener('click', function (e) {
    e.preventDefault();
});

//getlistaTareas();

document.getElementById('tareaForm').reset();
//e.preventDefault();

function getForm(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const prioridad = document.getElementById('prioridad').value;
    const frecuencia = document.getElementById('frecuencia').value;
    if (nombre == '' || nombre[0] == ' ') {
        document.getElementById('nuevaTareaForm').reset();
        document.getElementById('advice').innerHTMl = 'La tarea debe tener al menos un nombre';
    }
    else {
        createTarea(nombre, prioridad, frecuencia);
        document.getElementById('nuevaTareaForm').reset();
        document.getElementById('advice').innerHtml = '';
        listenDelete();

    }

}

//Función que recoge evento y datos de filtro
function filtrarTareas(e) {
    const prioridadValue = filtroPrioridad.value;
    const frecuenciaValue = filtrarFrecuencia.value;
    console.log(filterPrioridad.value + ':' + filterFrecuencia.value);

    pintaTareas(prioridadFiltrar(frecuenciaFiltrar(listaTarea, frecuenciaValue), prioridadValue));

}

//filtro Prioridad
var selectorPrioridad = document.querySelector('#prioridad');
selectorPrioridad.addEventListener('change', recogePrioridad);

function recogePrioridad(e) {

    let prioridad = e.target.value;

    if (prioridad != "") {
        let listaFiltradaPrioridad = filtrarPrioridad(listaTareas, prioridad);
        pintarTareas(listaFiltradaPrioridad);
    } else {
        pintarTareas(listaTareas);
    }
}

//funcion filtrado prioridad
function filtrarPrioridad(pListaTareas, pValue) {
    const listaFiltrada = new Array();
    if (pValue != 'all') {
        for (tarea of pListaTareas) {
            if (tarea.prioridad == pValue) {
                listaFiltrada.push(tarea)
            }
        }
    } else {
        listaFiltrada = pListaFiltrada;
    }
    console.log(listaFiltrada);
    return listaFiltrada;
}

//funcion filtrar por frecuencia
var selectorFrecuencia = document.querySelector('#frecuencia');
selectorFrecuencia.addEventListener('change', recogeFrecuencia);

function recogeFrecuencia(e) {

    let frecuencia = e.target.value;

    if (frecuencia != "") {
        let listaFiltradaFrecuencia = filtrarFrecuencia(listaTareas, frecuencia);
        pintarTareas(listaFiltradaFrecuencia);
    } else {
        pintarTareas(listaFiltradaFrecuencia);
    }

}

function filtrarFrecuencia(pListaTarea, pValue) {
    var listaFiltrada = new Array();
    if (pValue != 'all') {
        for (tarea of pListaTarea) {
            if (tarea.frecuencia == pValue) {
                listaFiltrada.push(tarea);
            }
        }
    } else {
        listaFiltrada = pListaFiltrada;

    }
    console.log(listaFiltrada);
    return listaFiltrada;
}


var selectorNombre = document.querySelector('#nombre');

selectorNombre.addEventListener('change', recogeNombre);

function recogeNombre(e) {

    let nombre = e.target.value;


    if (nombre != "") {
        let listaFiltradaNombre = filtrarNombre(listaTareas, nombre);
        pintarTareas(listaFiltradaNombre);
    } else {
        pintarTareas(listaFiltradaNombre);
    }



}

//funcion de busqueda search

searchInput.addEventListener('click', capturaSearch);

btnNuevaTarea.addEventListener('click', pintarTareas);

const busqueda = document.querySelector('#search');
busqueda.addEventListener('keyup', recogerBusqueda);

function recogerBusqueda(e) {
    let palabraBuscar = e.target.value;

    var listaBusqueda = filtrarBusqueda(listaTareas, palabraBuscar);

    pintarTareas(listaBusqueda);
}

function search(pListaTareas, pString) {
    var listaFiltrada = pListaTareas.filter(tarea => {
        var nombreTarea = tarea.nombre.toLowerCase()
        return nombreTarea.includes(pString.toLowerCase());
    })
    return listaFiltrada;
}
function capturaSearch(e) {
    const searchString = searchInput.value;
    if (searchString != '' || searchString[0] != ' ') {
        pintaTarea(search(listaTareas, searchString));
        listenDelete();
    }
}


//funcion filtro combinado

btnBuscarCombinado.addEventListener('click', recogerDatosCombinado);


function recogerDatosCombinado(e) {
    let nombre = document.getElementById('combinadoNombre').value;
    let prioridad = document.getElementById('combinadoPrioridad').value;
    let frecuencia = document.getElementById('combinadoFrecuencia').value;

    let listaNombre = filtrarNombre(listaTareas, prioridad, frecuencia);
    let listaCombinada = filtrarPrioridad(listaNombre, prioridad);
    pintarTareas(listaCombinada);
}

/*for (var i = 0; i < filter.length; i++) {
    filtrar[i].addEventListener('update', filtrarTareas)
}*/

function pintarTareas(pListaTareas) {
    seccionTareas.innerHTML = "";

    if (pListaTareas.length != 0) {
        pListaTareas.forEach(tarea => {
            seccionTareas.innerHTML += `<article class="">
                    <div class="row ">
                        <div class="col-md-8 ">
                            <div class="card-block">
                                <h4 class="card-title">${tarea.nombre}</h4>
                                <ul>
                                    <li>Prioridad: <strong>${tarea.prioridad}</strong></li>
                                    <li>Frecuencia: <strong>${tarea.frecuencia}</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article> 
                <div class="line"></div>`;
        })
    } else {
        seccionTareas.innerHTML = "<h2>No hay tareas con esas condiciones</h2>"
    }
}
function pintaTarea(e) {
    e.preventDefault();
    let filtradoLista = new Array();
    let filtradoPrioridad = '';
    let filtradoFrecuencia = '';

    if (e.target.parentNode.id == 'ordenPrioridad.Btn') {
        filtradoLista = prioridadLista;
        filtradoPrioridad = 'prioridad';
    } else {
        filtradoLista = frecuenciaLista;
        filtradoFrecuencia = 'frecuencia';
    }

    pintaTareas(filtradoLista, filtradoPrioridad, filtradoFrecuencia);
    listenDelete();
}
pintarTareas(listaTareas);


btnNuevaTarea.addEventListener('click', e => {
    e.preventDefault();
    var nombre = document.getElementById('nombreNuevo').value;
    var prioridad = document.getElementById('prioridadNuevo').value;
    var frecuencia = document.getElementById('frecuenciaNuevo').value;

    if (nombre.length == 0 || prioridad.length == 0 || frecuencia.length == 0 || nombre[0] == " " || prioridad[0] == " " || frecuencia[0] == " ") {
        //mandar un mensaje al usuario
        document.getElementById('mensaje').innerText = "Los campos no pueden ser vacios";
        document.getElementById('form').reset();

    }
    else {

        guardarDatos(nombre, prioridad, frecuencia);
        document.getElementById('mensaje').innerText = "";
        document.getElementById('form').reset();

    }


})

function guardar(e) {
    let nombreTarea = document.getElementById('nombreTarea').value;
    let prioridadTarea = document.getElementById('prioridadTarea').value;
    let frecuenciaTarea = document.getElementById('frecuenciaTarea').value;
    console.log(prioridadTarea)

    let tarea = {
        nombreTarea,
        prioridadTarea,
        frecuenciaTarea
    };

    //listenerer del formulario crear tarea
    nuevaTareaForm.addEventListener('submit', getForm);

    pintarTareas(listaTareas);

    var crearTarea = function () {
        var tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }

        function createTarea(pNombreTarea, pPrioridad, pFrecuencia) {
            var tarea = new Object();
            tarea = {
                idTarea: idContador,
                nombre: pNombreTarea,
                prioridad: pPrioridad,
                frecuencia: pFrecuencia,
            }
            idContador++;
            taskList.push(tarea);
            pintaTarea(tarea);
        }

        function guardarDatos(pNombre, pPrioridad, pFrecuencia) {

            let registro = {
                id: ultimoId,
                nombre: pNombre,
                prioridad: pPrioridad,
                frecuencia: pFrecuencia
            };

            listaTareas.push(registro);
            pintarTarea(registro);
            ultimoId++;

        }


        function pintarTarea(pObjeto) {
            var article = document.createElement('article');
            var h3 = document.createElement('h3');
            var textoInterior = document.createTextNode(`${pObjeto.nombre} : ${pObjeto.prioridad} ${pObjeto.frecuencia}`);

            h3.appendChild(textoInterior);
            article.appendChild(h3);

            seccionListaTareas.appendChild(article);

        }

        function pintarTareas(plistaTarea) {
            activeTarea.innerHTML = '';
            for (tarea of plistaTarea) {
                pintarTarea(tarea);
            }
        }

        //Borrar Tarea

        listenBorrar();

        function listenBorrar() {

            var borrarBtns = document.querySelectorAll('.delete')
            for (borrarBtns of borrarBtn) {
                deleteBtn.addEventListener('click', deleteTarea);
            }

        }

        function borrarTareaId(e) {
            e.preventDefault();
            const borrarTarea = e.target.parentNode.parentNode
            const borrarIdTarea = e.target.parentNode.parentNode.id;
            activeTarea.removeChild(borrarTarea)
            borrarTareaId(listaTarea, borrarIdTarea);
        }
        function deleteTareaOfArray(pLista, pIdTarea) {

            listaTareas.splice(pLista.indexOf(pIdTarea), 1);
        }


        //Función que pinta una sóla tarea
        function pintarTarea(pTarea) {
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            const divDelete = document.createElement('div');

            article.className = 'tarea';
            switch (pTarea.prioridad) {
                case 'urgente':
                    article.className += ' red';
                    break;
                case 'alta':
                    article.className += ' blue';
                    break;
                case 'normal':
                    article.className += ' green';
                    break;
                case 'baja':
                    article.className += ' lime';
                    break;
                case 'opcional':
                    article.className += ' yellow';
                    break;

                default:
                    break;
            }
            switch (pTarea.frecuencia) {
                case 'diaria':
                    break;

                case 'semanal':
                    break;

                case 'mensual':
                    break;

                case 'timestral':
                    break;

                case 'anual':
                    break;

                default:
                    break;
            }
            divDelete.className = 'borraCont';

            var h3Text = document.createTextNode(pTarea.name);
            h3.appendChild(h3Text);
            Delete.appendChild(DeleteTarea);
            article.appendChild(h3);
            article.appendChild(divDelete);
            article.id = pTarea.idTarea;
            activeTarea.appendChild(article);


        }
    }
}