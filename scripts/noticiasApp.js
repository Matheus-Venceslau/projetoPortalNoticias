import { NOTICIAS } from './noticias.js';

const LISTA_NOTICIAS = document.querySelector('.news-list');
const FILTROS = document.querySelectorAll('.filter-selection button');
const MENU_TEMAS = document.querySelectorAll('.list-menu a');
const BOTAO_CARREGAR = document.querySelector('#btn-load-more');
const BARRA_PESQUISA = document.querySelector('#search-bar');
const ULTIMAS_NOTICIAS = document.querySelector('#lastest-news');

const TEMAS = {
    'Todas': 'todas',
    'Tecnologia': 'tecnologia',
    'Negócios': 'negocios',
    'Ciência': 'ciencia',
    'Cultura': 'cultura',
    'Opinião': 'opiniao'
};

const QUANTIDADE_INICIAL = 6;
const QUANTIDADE_POR_CLIQUE = 3;

let quantidadeVisivel = QUANTIDADE_INICIAL;
let temaAtual = 'todas';
let pesquisaAtual = '';


// =========================
// CRIAÇÃO DOS CARDS
// =========================

function criarNoticias() {

    NOTICIAS.forEach((noticia) => {

        const ITEM = document.createElement('li');

        ITEM.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.alt}">

            <h5 class="tema ${noticia.tema}">
                ${noticia.tema.toUpperCase()}
            </h5>

            <h4>${noticia.titulo}</h4>

            <p>
                ${noticia.autor} &bull;
                ${noticia.data} &bull;
                ${noticia.tempoLeitura}
            </p>
        `;

        LISTA_NOTICIAS.appendChild(ITEM);
    });
}


// =========================
// ATUALIZAÇÃO DOS CARDS
// =========================

function atualizarNoticias() {

    const CARDS = document.querySelectorAll('.news-list li');

    let quantidadeExibida = 0;
    let quantidadeEncontrada = 0;

    CARDS.forEach((card) => {

        const TEMA = card.querySelector('.tema').classList;
        const TITULO = card.querySelector('h4').textContent.toLowerCase();

        const correspondeTema =
            temaAtual === 'todas' ||
            TEMA.contains(temaAtual);

        const correspondePesquisa =
            TITULO.includes(pesquisaAtual);

        if (correspondeTema && correspondePesquisa) {

            quantidadeEncontrada++;

            if (quantidadeExibida < quantidadeVisivel) {

                card.style.display = 'flex';
                quantidadeExibida++;

            } else {

                card.style.display = 'none';

            }

        } else {

            card.style.display = 'none';

        }
    });


    if (quantidadeExibida < quantidadeEncontrada) {
        BOTAO_CARREGAR.style.display = 'block';
    } else {
        BOTAO_CARREGAR.style.display = 'none';
    }
}


// =========================
// FILTROS
// =========================

function selecionarTema(tema) {

    temaAtual = tema;
    quantidadeVisivel = QUANTIDADE_INICIAL;

    FILTROS.forEach((botao) => {

        botao.classList.remove('selected');

        if (TEMAS[botao.textContent.trim()] === tema) {
            botao.classList.add('selected');
        }
    });

    atualizarNoticias();
}


FILTROS.forEach((botao) => {

    botao.addEventListener('click', () => {

        const tema = TEMAS[botao.textContent.trim()];

        selecionarTema(tema);
    });
});


// =========================
// MENU SUPERIOR
// =========================

MENU_TEMAS.forEach((menu) => {

    menu.addEventListener('click', (event) => {

        event.preventDefault();

        const tema = TEMAS[menu.textContent.trim()];

        selecionarTema(tema);

        ULTIMAS_NOTICIAS.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


// =========================
// CARREGAR MAIS
// =========================

BOTAO_CARREGAR.addEventListener('click', () => {

    quantidadeVisivel += QUANTIDADE_POR_CLIQUE;

    atualizarNoticias();
});


// =========================
// PESQUISA
// =========================

BARRA_PESQUISA.addEventListener('input', () => {

    pesquisaAtual = BARRA_PESQUISA.value
        .toLowerCase()
        .trim();

    quantidadeVisivel = QUANTIDADE_INICIAL;

    atualizarNoticias();

    if (pesquisaAtual !== '') {

        ULTIMAS_NOTICIAS.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});


// =========================
// INICIALIZAÇÃO
// =========================

criarNoticias();
selecionarTema('todas');