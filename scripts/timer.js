const SPAN_DATE = document.querySelector('.date')
const DAYS_OF_THE_WEEK = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

function timer(targetApplication) {
    let dateNow = new Date();

    const hours = String(dateNow.getHours()).padStart(2, "0");
    const minutes = String(dateNow.getMinutes()).padStart(2, "0");
    const seconds = String(dateNow.getSeconds()).padStart(2, "0");

    targetApplication.textContent = DAYS_OF_THE_WEEK[dateNow.getDay()] + ", " + dateNow.getDate() + " de " + MONTHS[dateNow.getMonth()] + " \u2022 " + hours + ":" + minutes + ":" + seconds;
}

setInterval(() => timer(SPAN_DATE), 1000) // Fiz dessa forma porque nao estava executando de segundo em segundo
