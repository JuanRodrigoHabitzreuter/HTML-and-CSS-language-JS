// Função para carregar as reservas na tabela
function carregarReservas() {
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  const tabela = document.querySelector(".tabela-vagas tbody");

  if (!tabela) {
    console.error("Tabela não encontrada!");
    return;
  }

  tabela.innerHTML = ""; // Limpa antes de carregar

  reservas.forEach((reserva) => {
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = reserva.vaga;
    novaLinha.insertCell(1).textContent = reserva.placa;
    novaLinha.insertCell(2).textContent = reserva.proprietario;
    novaLinha.insertCell(3).textContent = reserva.apartamento;
    novaLinha.insertCell(4).textContent = reserva.bloco;
    novaLinha.insertCell(5).textContent = reserva.modelo;
    novaLinha.insertCell(6).textContent = reserva.cor;
  });
}

// Função para atualizar o painel de vagas disponíveis
function atualizarVagasDisponiveis() {
  const totalVagas = 30;
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  const vagasOcupadas = reservas.length;
  const vagasDisponiveis = totalVagas - vagasOcupadas;

  const vagasDisponiveisElement = document.getElementById("vagasDisponiveis");
  if (!vagasDisponiveisElement) {
    console.error("Elemento de vagas disponíveis não encontrado!");
    return;
  }

  vagasDisponiveisElement.innerHTML = `${vagasDisponiveis} vaga(s) disponível(is)`;

  const todasVagas = Array.from({ length: totalVagas }, (_, i) => i + 1);
  const vagasOcupadasNumeros = reservas.map((r) => parseInt(r.vaga));
  const vagasDisponiveisNumeros = todasVagas.filter(
    (v) => !vagasOcupadasNumeros.includes(v)
  );

  if (vagasDisponiveisNumeros.length > 0) {
    const detalhesVagas = document.createElement("p");
    detalhesVagas.textContent = `Números: ${vagasDisponiveisNumeros.join(
      ", "
    )}`;
    detalhesVagas.style.marginTop = "10px";
    vagasDisponiveisElement.appendChild(detalhesVagas);
  }
}

// Função para carregar as reservas na tabela
function carregarReservas() {
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  const tabela = document.querySelector(".tabela-vagas tbody");

  if (!tabela) {
    console.error("Tabela não encontrada!");
    return;
  }

  tabela.innerHTML = ""; // Limpa antes de carregar

  reservas.forEach((reserva) => {
    const novaLinha = tabela.insertRow();
    novaLinha.insertCell(0).textContent = reserva.vaga;
    novaLinha.insertCell(1).textContent = reserva.placa;
    novaLinha.insertCell(2).textContent = reserva.proprietario;
    novaLinha.insertCell(3).textContent = reserva.apartamento;
    novaLinha.insertCell(4).textContent = reserva.bloco;
    novaLinha.insertCell(5).textContent = reserva.modelo;
    novaLinha.insertCell(6).textContent = reserva.cor;
  });
}

// Função para atualizar o painel de vagas disponíveis
function atualizarVagasDisponiveis() {
  const totalVagas = 30;
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  const vagasOcupadas = reservas.length;
  const vagasDisponiveis = totalVagas - vagasOcupadas;

  const vagasDisponiveisElement = document.getElementById("vagasDisponiveis");
  if (!vagasDisponiveisElement) {
    console.error("Elemento de vagas disponíveis não encontrado!");
    return;
  }

  vagasDisponiveisElement.innerHTML = `${vagasDisponiveis} vaga(s) disponível(is)`;

  const todasVagas = Array.from({ length: totalVagas }, (_, i) => i + 1);
  const vagasOcupadasNumeros = reservas.map((r) => parseInt(r.vaga));
  const vagasDisponiveisNumeros = todasVagas.filter(
    (v) => !vagasOcupadasNumeros.includes(v)
  );

  if (vagasDisponiveisNumeros.length > 0) {
    const detalhesVagas = document.createElement("p");
    detalhesVagas.textContent = `Números: ${vagasDisponiveisNumeros.join(
      ", "
    )}`;
    detalhesVagas.style.marginTop = "10px";
    vagasDisponiveisElement.appendChild(detalhesVagas);
  }
}

// Função para excluir uma reserva
function excluir() {
  const numeroVaga = prompt("Digite o número da vaga que deseja excluir:");

  if (!numeroVaga || isNaN(numeroVaga)) {
    alert("Por favor, digite um número de vaga válido!");
    return;
  }

  const numero = parseInt(numeroVaga);

  if (numero < 1 || numero > 30) {
    alert("Número da vaga deve ser entre 1 e 30!");
    return;
  }

  let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

  // Verifica se a reserva existe
  const indice = reservas.findIndex((reserva) => reserva.vaga === numero);

  if (indice === -1) {
    alert(`Vaga ${numero} já está livre!`);
    return;
  }

  // Confirma exclusão
  const confirmar = confirm(
    `Tem certeza que deseja excluir a reserva da vaga ${numero}?`
  );
  if (!confirmar) {
    return;
  }

  // Remove a reserva
  reservas.splice(indice, 1);
  localStorage.setItem("reservas", JSON.stringify(reservas));

  alert(`Reserva da vaga ${numero} excluída com sucesso!`);

  // Atualiza a tela (após a exclusão)
  carregarReservas();
  atualizarVagasDisponiveis();
}

// Carrega a tabela e as vagas disponíveis ao abrir a página
window.addEventListener("DOMContentLoaded", () => {
  carregarReservas();
  atualizarVagasDisponiveis();
});
