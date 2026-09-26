const BOTAO_DARK_MODE = document.querySelector('header > button');

BOTAO_DARK_MODE.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

});