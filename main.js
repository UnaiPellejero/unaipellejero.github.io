let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/UNP07026.jpg") {
    miImage.setAttribute("src", "images/UNP07025.jpg");
  } else {
    miImage.setAttribute("src", "images/UNP07026.jpg");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "UNVISUALMEDIA, bienvenido " + miNombre;
  }
  
  if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "UNVISUALMEDIA, bienvenido " + nombreAlmacenado;
  }

  miBoton.onclick = function () {
    estableceNombreUsuario();
  };

  function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "UNVISUALMEDIA, bienvenido " + miNombre;
    }
  }
  