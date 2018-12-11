window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

//Dodajemy speech recognition

const alexa = new SpeechRecognition();
const przycisk = document.querySelector('input')

function listen(e){
    console.log('Dzialam')
    console.dir(e)
}

alexa.addEventListener('result', listen)
przycisk.addEventListener('click', () => alexa.start())