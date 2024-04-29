document.addEventListener('DOMContentLoaded', function () {
    const voiceBtn = document.getElementById('voiceBtn');
    const orderResult = document.getElementById('orderResult');
  
    // Comprobar si el navegador soporta reconocimiento de voz
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'es-MX';
  
      // Al hacer clic en el botón, iniciar el reconocimiento de voz
      voiceBtn.addEventListener('click', function () {
        recognition.start();
        voiceBtn.textContent = 'Escuchando...';
      });
  
      // Cuando se detecta el resultado del reconocimiento de voz
      recognition.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        result = transcript.toLowerCase();
        orderResult.textContent = 'Orden detectada: ' + result;

        if (result.includes("1234") && result.includes("pin")){
            console.log("entro");
            window.location.href = "voiceApp.html?token=secreto&username=ammc";
          }
      };

     
  
      // Cuando se detiene el reconocimiento de voz
      recognition.onend = function () {
        voiceBtn.textContent = 'Activar Reconocimiento de Voz';
      };
    } else {
      voiceBtn.style.display = 'none';
      orderResult.textContent = 'El reconocimiento de voz no está soportado por tu navegador.';
    }
  });
  