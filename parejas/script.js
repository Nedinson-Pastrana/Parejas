
// permite que el modal funcione
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.onclick = function () {
  modal.style.display = "block";
};

closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



// ESTO PERMITE QUE FUNCIONE LA BARRA DEL SIDEBAR Y EL BOTON DEL MENU


const checkbox = document.getElementById('checkbox');
const sidebar = document.getElementById('sidebar');

// Mostrar/ocultar el sidebar al marcar el checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    sidebar.style.right = '0';
  } else {
    sidebar.style.right = '-250px';
  }
});

// Cerrar el sidebar si haces clic fuera de él y del checkbox
document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnCheckbox = event.target === checkbox || checkbox.contains(event.target);

  // Solo cerrar si el checkbox está marcado y el clic fue fuera
  if (checkbox.checked && !isClickInsideSidebar && !isClickOnCheckbox) {
    // Esperar un poquito para no interferir con el click real
    setTimeout(() => {
      checkbox.checked = false;
      sidebar.style.right = '-250px';
    }, 10); // 10ms para dejar que el checkbox cambie su estado si fue clickeado
  }
});

