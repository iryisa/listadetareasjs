document.getElementById('tareaForm').addEventListener('submit', guardar);



  if (localStorage.getItem('listaTareas') === null) {
    let listaTareas = [];
    listaTareas.push(tarea);
    localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
  } else {
    let listaTareas = JSON.parse(localStorage.getItem('listaTareas'));
    listaTareas.push(tarea);
    localStorage.setItem('tasks', JSON.stringify(listaTareas));
  }

  getlistaTareas();
  document.getElementById('tareaForm').reset();
  e.preventDefault();


function deleteTarea(nombreTarea) {
  console.log(nombreTarea)
  let listaTareas = JSON.parse(localStorage.getItem('listaTareas'));
  for (let i = 0; i < listaTareas.length; i++) {
    if (listaTareas[i].nombreTarea == nombreTarea) {
      listaTareas.splice(i, 1);
    }
  }

  localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
  getlistaTareas();
}

function getlistaTareas() {
  let listaTareas = JSON.parse(localStorage.getItem('listaTareas'));
  let verListaTareas = document.getElementById('listaTareas');
  verListaTareas.innerHTML = '';
  for (let i = 0; i < listaTareas.length; i++) {
    let nombreTarea = listaTareas[i].nombreTarea;
    let prioridadTarea = listaTareas[i].prioridadTarea;
    let frecuenciaTarea = listaTareas[i].frecuenciaTarea;
    verListaTareas.innerHTML += `<div class="container">
        <div class="card-body">
          <p>${nombreTarea} - ${prioridadTarea} - ${frecuenciaTarea}
          <a href="#" onclick="deleteTarea('${nombreTarea}')" class="btn btn-danger ml-5">Delete</a>
          </p>
        </div>
      </div>`;
  }
};


//funcion pintar varias tareas
function pintarTareas(listaTareas) {
  tareasActivas.innerHTML = '';
  for (tarea of listaTareas) {
    pintarTarea(tarea);
  }
}
