// Função para validar a vaga
function validarVaga() {
  const inputVaga = document.getElementById("vaga");
  const vaga = parseInt(inputVaga.value);

  if (isNaN(vaga) || vaga < 1 || vaga > 30) {
    inputVaga.setCustomValidity("A vaga deve ser entre 1 e 30");
  } else {
    inputVaga.setCustomValidity("");
  }
}

// Função para buscar cadastro
function buscarCadastro() {
  const inputVaga = document.getElementById("vaga");
  const vagaBuscada = parseInt(inputVaga.value);

  if (isNaN(vagaBuscada) || vagaBuscada < 1 || vagaBuscada > 30) {
    alert("Digite um número válido de vaga entre 1 e 30.");
    inputVaga.focus();
    return;
  }

  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  const cadastro = reservas.find((r) => parseInt(r.vaga) === vagaBuscada);

  if (cadastro) {
    document.getElementById("placa").value = cadastro.placa || "";
    document.getElementById("proprietario").value = cadastro.proprietario || "";
    document.getElementById("apartamento").value = cadastro.apartamento || "";
    document.getElementById("bloco").value = cadastro.bloco || "";
    document.getElementById("modelo").value = cadastro.modelo || "";
    document.getElementById("cor").value = cadastro.cor || "";

    alert(`Dados da vaga ${vagaBuscada} carregados para edição.`);
  } else {
    alert(`Vaga ${vagaBuscada} está livre para cadastro.`);
    document.getElementById("placa").value = "";
    document.getElementById("proprietario").value = "";
    document.getElementById("apartamento").value = "";
    document.getElementById("bloco").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("cor").value = "";
  }
}

// Função para salvar ou atualizar a reserva
function salvarReserva() {
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

  const vaga = parseInt(document.getElementById("vaga").value);
  const placa = document.getElementById("placa").value.trim();
  const proprietario = document.getElementById("proprietario").value.trim();
  const apartamento = document.getElementById("apartamento").value.trim();
  const bloco = document.getElementById("bloco").value.trim();
  const modelo = document.getElementById("modelo").value.trim();
  const cor = document.getElementById("cor").value.trim();

  if (isNaN(vaga) || vaga < 1 || vaga > 30) {
    alert("Número da vaga inválido.");
    return;
  }

  const novaReserva = {
    vaga,
    placa,
    proprietario,
    apartamento,
    bloco,
    modelo,
    cor,
  };

  const indexExistente = reservas.findIndex((r) => parseInt(r.vaga) === vaga);

  if (indexExistente !== -1) {
    reservas[indexExistente] = novaReserva;
    alert(`Reserva da vaga ${vaga} atualizada com sucesso!`);
  } else {
    reservas.push(novaReserva);
    alert("Nova reserva cadastrada com sucesso!");
  }

  // Atualiza o localStorage e só depois redireciona
  localStorage.setItem("reservas", JSON.stringify(reservas));

  setTimeout(() => {
    window.location.href = "listagem.html"; // Redireciona após 200ms
  }, 200);
}

// Eventos
window.onload = () => {
  document
    .getElementById("botaoBuscar")
    .addEventListener("click", buscarCadastro);

  document.getElementById("vaga").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      buscarCadastro();
    }
  });

  document
    .getElementById("botaoSalvar")
    .addEventListener("click", salvarReserva);

  document.getElementById("vaga").addEventListener("input", validarVaga);
};
