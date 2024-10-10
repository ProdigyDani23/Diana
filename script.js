document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "¡Feliz cumpleaños, Diana! Tu dedicación y esfuerzo son realmente admirables. ¡Espero que este año esté lleno de logros y momentos maravillosos!",
        "Tus ganas de aprender y crecer no dejan de sorprenderme. ¡Felicidades por otro año lleno de éxitos!",
        "Eres un ejemplo de dedicación y esfuerzo, Diana. ¡Que tengas un día maravilloso!",
        "Tu amor y compromiso con lo que haces es inspirador. ¡Feliz cumpleaños a una persona tan especial!",
        "No solo eres una persona dedicada y trabajadora, también eres una hija excepcional. ¡Te mereces todo lo mejor en tu día y siempre!",
        "Cada año que pasa, sigues mostrando tu fuerza y determinación. ¡Feliz cumpleaños, mujer fuerte y admirable!",
        "Eres una mujer extraordinaria en todos los aspectos: como hija, hermana, y persona. ¡Que este día esté lleno de alegría y sorpresas que te hagan sonreír!",
        "Aunque nos conocemos desde hace poco, me he dado cuenta de lo especial que eres. ¡Espero seguir compartiendo momentos increíbles contigo!",
        "En estos meses he llegado a apreciarte mucho, y cada día me sorprendes más. ¡Espero que este sea solo el comienzo de algo aún más especial!",
        "Eres una persona única, y cada día que paso contigo lo confirmo más. ¡Feliz cumpleaños a alguien muy especial que ha comenzado a ocupar un lugar importante en mi vida!"
    ];

    const images = [
        "imagen8.jpg", 
        "imagen9.jpg", 
        "imagen10.jpg", 
        "imagen4.jpg", 
        "imagen5.jpg", 
        "imagen6.jpg", 
        "imagen7.jpg", 
        "imagen3.jpg", 
        "imagen2.jpg", 
        "imagen1.jpg"
    ];

    let currentMessageIndex = 0;
    let birthdaySong = document.getElementById('birthdaySong');
    let messageContainer = document.getElementById('message');
    let imageElement = document.getElementById('image');
    let nextButton = document.getElementById('nextButton');
    let heartContainer = document.getElementById('heart-container');

    nextButton.addEventListener('click', () => {
        if (currentMessageIndex === 0) {
            birthdaySong.play();
        }


        if (currentMessageIndex < messages.length) {
            messageContainer.textContent = messages[currentMessageIndex];
            imageElement.src = images[currentMessageIndex];
            currentMessageIndex++;
        } else {
      
            messageContainer.textContent = "¡Diana, eres increíble y estoy muy agradecido de haberte conocido!";
            heartContainer.classList.remove('hidden');
            nextButton.classList.add('hidden');
        }
    });
});
