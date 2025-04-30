document.getElementById("formRegistro").addEventListener("submit", function (e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let password = document.getElementById("password").value;
  let confirmar = document.getElementById("confirmar").value;

  if (password !== confirmar) {
    alert("Las contraseñas no coinciden");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarios.push({
    nombre,
    correo,
    password,
    rol: "visualizador"
  });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuario registrado con éxito");
  window.location.href = "pages/login.html";
});

