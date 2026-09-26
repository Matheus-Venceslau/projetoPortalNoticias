const FORM_SUBSCRIBE = document.querySelector('.subscribe form');

FORM_SUBSCRIBE.addEventListener('submit', (event) => {

    event.preventDefault();

    const EMAIL = FORM_SUBSCRIBE.querySelector('input[type="email"]').value;

    localStorage.setItem('emailAssinante', EMAIL);

    FORM_SUBSCRIBE.reset();

    alert('Inscrição realizada!');
});