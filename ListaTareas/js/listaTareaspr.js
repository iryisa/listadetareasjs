




//funcion filtra por Prioridad, la funcion recibe una lista total y me devuelve una lista filtrada 

function filtrarPrioridad(pListaTareas, pFrecuencia) {


    const listaFiltrada = new Array();

    var contador = 0;
    for (tarea of pListaTareas) {
        if (tarea.prioridad.toLowerCase() == pPrioridad.toLowerCase()) {

            listaFiltrada[contador] = tarea;
            contador++;
        }
    }

    return listaFiltrada;

}


function filtrarFrecuencia(pListaTareas, pPrioridad, pNombre) {

    var listaFiltrada = new Array();

    for (tarea of pListaTareas) {
        if (tarea.prioridad.toLowerCase() == pPrioridad.toLowerCase()) {

            listaFiltrada.push(tarea);
        }
    }

    return listaFiltrada;

}

//funcion de filtro de busqueda

function filtrarBusqueda(pListaTareas, pPalabraBuscar) {

    var listaFiltrada = new Array();

    listaFiltrada = pListaTareas.filter(tarea => {
        var nombreTarea = tarea.nombre.toLowerCase();
        var prioridadTarea = tarea.prioridad.toLowerCase();
        var frecuenciaTarea = tarea.prioridad.toLowerCase();

        return nombreTarea.includes(pPalabraBuscar) || prioridadTarea.includes(pPalabraBuscar) || frecuenciaTarea.includes(pPalabraBuscar);
    })


    return listaFiltrada;

}

for (const tarea of listaTareas) {
    const selectTarea = document.createTarea('OPTION')
    selectTarea.setAttribute('value', tarea.toLowerCase())
    selectTarea.textContent = tarea
    fragment.appendChild(selectItem)
}

/* listaTareas.appendChild(fragment) */
selectTareas.appendChild(fragment)
