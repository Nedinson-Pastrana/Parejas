
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
const overlay = document.getElementById('overlay');

// Mostrar/ocultar el sidebar y el overlay al marcar el checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    sidebar.style.right = '0';
    overlay.style.display = 'block';
  } else {
    sidebar.style.right = '-250px';
    overlay.style.display = 'none';
  }
});

// Cerrar el sidebar si haces clic fuera de él y del checkbox
document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnCheckbox = event.target === checkbox || checkbox.contains?.(event.target);

  if (checkbox.checked && !isClickInsideSidebar && !isClickOnCheckbox) {
    setTimeout(() => {
      checkbox.checked = false;
      sidebar.style.right = '-250px';
      overlay.style.display = 'none';
    }, 10);
  }
});

// También cerrar si se hace clic directamente sobre el overlay
overlay.addEventListener('click', () => {
  checkbox.checked = false;
  sidebar.style.right = '-250px';
  overlay.style.display = 'none';
});


// ESTO PERMITE CAMBIAR DE POSICION AL DAR CLICK AL NAVBAR
const items = document.querySelectorAll('.menu-item');

  items.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      items.forEach(el => el.classList.remove('active'));
      this.classList.add('active');
    });
  });

  