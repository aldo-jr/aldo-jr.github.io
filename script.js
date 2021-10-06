const formatTime = val => val < 10 ? `0${val}` : val;

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const containerElement = document.getElementsByClassName('countdown-container');

const params = (new URL(document.location)).searchParams
const locationParam = params.get('location');
let countdownDate = new Date('19 Nov 2021');

if (locationParam === 'puntacana'){
  countdownDate = new Date('11 Oct 2021 01:50')
  document.body.style.backgroundImage = "url('./puntacana.jpg')";
}
  

function countdown() {  
  const currentDate = new Date();

  const dateDiff = countdownDate - currentDate;
  
  if(dateDiff < 0) {
    containerElement[0].innerHTML = "<h2>HORA DE BEBER PORRA</h2>";
    clearInterval(loop);
  }
  else {
    const totalSeconds = dateDiff / 1000;
  
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);
  
    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
  }
}

const loop = setInterval(countdown, 1000)

countdown();
