btnAgregarTarea.addEventListener('click', recogerNuevosDatosTarea);
function recogerNuevosDatosTarea(e) {
    e.preventDefault();
    let nombreTarea = document.getElementById('nombreAgregarTarea').value;
    let prioridadTarea = document.getElementById('prioridadAgregarTarea').value;
    let frecuenciaTarea = document.getElementById('frecuenciaAgregarTarea').
        AgregarTarea(listadoTareas, nombreTarea, prioridadTarea, frecuenciaTarea);
    formulario.reset();
    selectorTareas.value = '';
    buscarTarea.value = '';
}

selectorTareas.addEventListener('change', recogerDatosFiltroTareas);
function recogerDatosFiltroTareas(e) {
    prioriad = e.target.value;
    filtrarTareas(listadoTareas, prioriad);
    buscarTarea.value = '';
}

buscarTarea.addEventListener('keyup', recogerDatosBuscarTarea);
function recogerDatosBuscarTarea(e) {
    let busqueda = e.target.value;
    let listaFiltrada = buscarTareas(listadoTareas, busqueda);
    pintarTareas(listaFiltrada);
    selectorTareas.value = '';
}