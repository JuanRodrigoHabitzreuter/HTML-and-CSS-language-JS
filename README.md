# HTML-and-CSS-language-JS
sem frameworks apenas HTML e CSS

# Projeto de Controle de Reservas de Vagas de Estacionamento

Este é um projeto desenvolvido utilizando apenas **HTML**, **CSS** e **JavaScript** para o controle de vagas de estacionamento. Não utilizamos frameworks externos.

## Descrição do Projeto

O projeto permite o controle de vagas de estacionamento em um condomínio. Ele apresenta uma interface onde o usuário pode visualizar as vagas reservadas, o número de vagas disponíveis e cadastrar novas reservas. O sistema é completamente client-side, armazenando os dados no **localStorage** do navegador.

## Funcionalidades

- **Visualização das vagas reservadas**: As vagas que estão ocupadas pelo sistema são mostradas em uma tabela.
- **Cadastro de nova vaga**: É possível cadastrar novas reservas para as vagas.
- **Exclusão de vaga**: Permite remover uma vaga reservada, liberando-a para novos registros.
- **Exibição de vagas disponíveis**: A página mostra quantas vagas ainda estão disponíveis no estacionamento, bem como os números dessas vagas.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização da interface do usuário.
- **JavaScript**: Lógica para manipulação da tabela, registro de reservas e armazenamento no localStorage.

## Estrutura do Projeto

- **index.html**: Página principal onde o usuário pode cadastrar novas vagas.
- **listagem.html**: Página que exibe as vagas já cadastradas, permitindo a visualização e a exclusão.
- **scripts**:
  - `index.js`: Lógica de cadastro e manipulação dos dados na página principal.
  - `listagem.js`: Lógica de exibição das vagas e exclusão de registros.
- **css**:
  - `shared.css`: Estilos gerais aplicados em todas as páginas.
  - `list.css`: Estilos específicos para a página de listagem das vagas.

## Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/HTML-and-CSS-language-JS.git
