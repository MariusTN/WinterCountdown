//snow fall animation

function createSnow() {
    const container = document.querySelector('.container');
    const span = document.createElement('span');

    span.style.left = Math.random() * innerWidth + 'px';
    container.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000);
}

setInterval(createSnow, 100);


//countdown script

const countDate = new Date(2021, 12, 25).getTime()

function countDown() {
    let now = new Date().getTime()
    gap = countDate - now;

    let seconds = 1000;
    let minutes = 60 * seconds;
    let hours = 60 * minutes;
    let days = 24 * hours;

    let remainingDays = Math.floor(gap / (days));
    let remainingHours = Math.floor((gap % (days)) / (hours));
    let remainingMinutes = Math.floor((gap % (hours)) / (minutes));
    let remainingSeconds = Math.floor((gap % (minutes)) / (seconds));

    document.querySelector('.days').innerText = remainingDays;
    document.querySelector('.hours').innerText = remainingHours;
    document.querySelector('.minutes').innerText = remainingMinutes;
    document.querySelector('.seconds').innerText = remainingSeconds;

}
setInterval(() => {
    countDown()
}, 1000)