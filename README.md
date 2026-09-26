# 📰 Conectados — Portal de Notícias

Portal de notícias desenvolvido como projeto de estudo para praticar desenvolvimento Front-end utilizando **HTML, CSS e JavaScript puro**.

O projeto simula um portal de notícias sobre tecnologia, negócios, ciência e cultura, com foco na criação de uma interface moderna, responsiva e interativa.

## 📌 Sobre o projeto

O **Conectados** é um portal de notícias fictício desenvolvido para colocar em prática conceitos de desenvolvimento web, principalmente **manipulação do DOM, organização de código JavaScript, eventos e modularização**.

O conteúdo das notícias é armazenado em um array de objetos JavaScript e utilizado para gerar os cards dinamicamente na página.

O projeto também conta com recursos de pesquisa, filtragem por categoria, carregamento de notícias e alternância entre os modos claro e escuro.

## 🚀 Funcionalidades

* 📰 Exibição dinâmica das notícias
* 🔎 Pesquisa de notícias por título
* 🏷️ Filtro por categoria
* 📚 Botão "Carregar mais"
* 🌙 Modo claro e escuro
* 📅 Exibição de data e horário
* 📧 Formulário de inscrição para receber notícias
* 💾 Armazenamento do e-mail utilizando `localStorage`
* 📱 Interface adaptada para diferentes tamanhos de tela
* 🧩 JavaScript organizado utilizando módulos ES6

## 🛠️ Tecnologias utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript (ES6+)

### Recursos utilizados

* Manipulação do DOM
* Eventos JavaScript
* `localStorage`
* Arrays e objetos
* Funções
* Template Literals
* ES Modules (`import` / `export`)
* CSS Variables
* Flexbox
* Grid Layout
* Font Awesome
* Google Fonts

## 📂 Estrutura do projeto

```text
projetoPortalNoticias/
│
├── img/
│   └── imagens utilizadas no portal
│
├── pages/
│   └── páginas HTML do projeto
│
├── scripts/
│   ├── noticias.js
│   ├── noticiasApp.js
│   ├── timer.js
│   ├── subscribe.js
│   └── darkMode.js
│
├── styles/
│   └── style.css
│
└── README.md
```

## 🧩 Organização do JavaScript

O JavaScript foi dividido em arquivos de acordo com suas responsabilidades.

### `noticias.js`

Responsável por armazenar os dados das notícias em um array de objetos.

```javascript
export const NOTICIAS = [
    {
        imagem: "...",
        alt: "...",
        tema: "tecnologia",
        titulo: "...",
        autor: "...",
        data: "...",
        tempoLeitura: "5 min"
    }
];
```

### `noticiasApp.js`

Responsável pelo funcionamento principal da área de notícias.

Entre suas responsabilidades estão:

* criação dos cards;
* aplicação dos filtros;
* pesquisa por título;
* controle da quantidade de notícias exibidas;
* botão "Carregar mais";
* integração das diferentes funcionalidades.

### `timer.js`

Responsável pela atualização da data e horário exibidos no cabeçalho.

### `subscribe.js`

Responsável pelo formulário de inscrição.

O e-mail informado pelo usuário é armazenado no `localStorage` do navegador.

### `darkMode.js`

Responsável pela alternância entre o tema claro e o tema escuro através da manipulação de classes no elemento `body`.

## 🎨 Interface

O projeto utiliza uma identidade visual própria para o portal **Conectados**, com diferentes cores para identificar as categorias das notícias.

As categorias utilizadas são:

* 🔵 Tecnologia
* 🟠 Negócios
* 🟢 Ciência
* 🟣 Cultura
* ⚪ Opinião

A interface também utiliza **CSS Grid e Flexbox** para organizar os diferentes elementos da página.

## 🔎 Sistema de pesquisa e filtros

A área de notícias permite combinar diferentes funcionalidades.

O usuário pode:

1. selecionar uma categoria;
2. pesquisar pelo título de uma notícia;
3. carregar mais resultados.

A exibição dos cards é controlada por uma função central responsável por verificar quais notícias correspondem aos critérios selecionados.

Essa abordagem evita que diferentes arquivos JavaScript alterem a propriedade `display` dos cards de maneira independente.

## 📚 Objetivos de aprendizado

Este projeto foi desenvolvido com o objetivo de praticar e consolidar conhecimentos em:

* Estruturação semântica com HTML5;
* Estilização com CSS3;
* Layouts utilizando Flexbox e Grid;
* Manipulação do DOM;
* Eventos JavaScript;
* Arrays e objetos;
* Funções;
* Template Literals;
* ES Modules;
* `localStorage`;
* Organização e separação de responsabilidades;
* Desenvolvimento de interfaces interativas.

## ▶️ Como executar

Como o projeto utiliza **JavaScript Modules**, recomenda-se executá-lo através de um servidor local.

### Visual Studio Code

Uma opção simples é utilizar a extensão **Live Server**.

Após instalar:

1. Abra o projeto no Visual Studio Code;
2. Abra o arquivo HTML principal;
3. Clique com o botão direito;
4. Selecione **Open with Live Server**.

O projeto será aberto no navegador através de um servidor local.

## 📸 Projeto

O projeto foi desenvolvido como uma aplicação Front-end para fins de estudo e portfólio, buscando aplicar conceitos de JavaScript de forma prática em uma interface completa.

---

⭐ Projeto desenvolvido para fins educacionais e de portfólio.
