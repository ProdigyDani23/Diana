document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "¡Feliz cumpleaños, Diana! Tu dedicación y esfuerzo son realmente admirables. ¡Espero que este año esté lleno de logros y momentos maravillosos!",
        "Tus ganas de aprender y crecer no dejan de sorprenderme. ¡Felicidades por otro año lleno de éxitos!",
        "Eres un ejemplo de dedicación y esfuerzo, Diana. ¡Que tengas un día maravilloso!",
        "Tu amor y compromiso con lo que haces es inspirador. ¡Feliz cumpleaños a una persona tan especial!",
        "No solo eres una persona dedicada y trabajadora, también eres una hija excepcional. ¡Te mereces todo lo mejor en tu día y siempre!",
        "Cada año que pasa, sigues mostrando tu fuerza y determinación. ¡Feliz cumpleaños, mujer fuerte y admirable!",
        "Eres una mujer extraordinaria en todos los aspectos: como hija, hermana, y persona. ¡Que este día esté lleno de alegría y sorpresas que te hagan sonreír!",
        " cada día descubro más lo increíble que eres. ¡Ojalá sigamos creando recuerdos inolvidables juntos y que Dios nos permita seguir compartiendo muchos más!",
        "En este tiempo conociéndonos y compartiendo momentos, han sido bonitos y espero seguir creando momentos únicos a tu lado.",
        "Eres alguien con quien cada momento se siente especial. Cada vez que te conozco más, me doy cuenta de la mujer tan maravillosa que eres. "
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
    
            
            if (!nextButton.classList.contains('flecha')) {
                nextButton.classList.add('flecha');
                nextButton.textContent = ''; 
            }
    
        } else {
           
            messageContainer.textContent = "¡Diana, eres increíble y estoy muy agradecido de haberte conocido!";
            heartContainer.classList.remove('hidden'); 
            nextButton.classList.add('hidden'); 
        }
    });
    
});
