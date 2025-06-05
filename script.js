function redirecionarCriarConta() {
  const alerta = document.getElementById("alerta");
  alerta.style.display = "block";

  setTimeout(() => {
    window.location.href = "criar-conta.html";
  }, 2000); // 2 segundos
}
