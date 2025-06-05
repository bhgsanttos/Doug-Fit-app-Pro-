function criarConta() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (!nome || !email || !senha) {
    document.getElementById("mensagemCadastro").innerText = "Preencha todos os campos.";
    return;
  }

  const usuario = { nome, email, senha };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  document.getElementById("mensagemCadastro").innerText = "Conta criada com sucesso! Redirecionando...";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}

function fazerLogin() {
  const email = document.getElementById("emailLogin").value;
  const senha = document.getElementById("senhaLogin").value;

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (
    usuarioSalvo &&
    email === usuarioSalvo.email &&
    senha === usuarioSalvo.senha
  ) {
    document.getElementById("mensagem").innerText = "Login realizado com sucesso!";
    // Redirecionar para a tela principal do app
    setTimeout(() => {
      window.location.href = "tela-principal.html"; // crie depois essa tela
    }, 1500);
  } else {
    document.getElementById("mensagem").innerText = "E-mail ou senha incorretos.";
  }
}
