document.addEventListener("DOMContentLoaded", function () {
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.getElementById("chat-body");
  const chatbot = document.getElementById('chatbot');
  const chatbotToggle = document.getElementById('chatbotToggle');

  // Abrir chat al presionar el video y ocultar el botón flotante
  chatbotToggle.onclick = function(e) {
    chatbot.classList.add('active');
    chatbotToggle.classList.add('hide');
    setTimeout(() => {
      chatInput.focus();
    }, 100);
  };

  // Evita que los clics dentro del chat cierren el chat
  chatbot.addEventListener('mousedown', function(e) {
    e.stopPropagation();
  });

  // Cerrar chat al hacer click fuera del chat y del botón, y mostrar el video de nuevo
  document.addEventListener('mousedown', function(e) {
    if (
      chatbot.classList.contains('active') &&
      !chatbot.contains(e.target) &&
      !chatbotToggle.contains(e.target)
    ) {
      chatbot.classList.remove('active');
      chatbotToggle.classList.remove('hide');
    }
  });

  chatInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const userInput = chatInput.value.trim();
      if (userInput !== "") {
        appendMessage("Tú", userInput);
        respondToUser(userInput.toLowerCase());
        chatInput.value = "";
      }
    }
  });

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respondToUser(input) {
    const respuestas = [
      {
        claves: ["cerrar", "adios", "bye", "salir"],
        respuesta: "¡Hasta luego! 👋",
        cerrar: true
      },
      {
        claves: ["hola", "buenas", "saludos", "buenos días", "buenas tardes","hey"],
        respuesta: "¡Hola! Soy ChabelyBot. ¿En qué puedo ayudarte?"
      },
      {
        claves: ["ayuda", "necesito ayuda"],
        respuesta: "Claro, dime qué necesitas y te ayudaré."
      },
      
      {
        claves: ["pago", "pagos"],
        respuesta: "La forma de pago es semanalmente  los dias viernes, con semana desfasada"
      },
      {
        claves: ["prestaciones", "beneficios","prestaciones laborales","que ofrecen"],
        respuesta: "Tenenmos prestaciones de ley y superiores "
      },
      {
        claves: ["turnos", "turno"],
        respuesta: "Se manejan unicamente dos turnos (con opcion a turno fijo)."
      },
      {
        claves: ["horarios", "hora", "abren", "cierran"],
        respuesta: "Nuestro horario es de Lunes a Viernes de 7:30 a 18:00 horas."
      },
      {
        claves: ["empleo", "trabajo", "vacante"],
        respuesta: "Puedes enviar tu CV a talentohumano@chabely.com.mx. o al 4271125818  ¡Gracias por tu interés!"
      },
      {
        claves: ["gracias", "thank you", "thanks"],
        respuesta: "¡De nada! 😊"
      },
      {
        claves: ["admin"],
        respuesta: "Nancy María Moreno Sixto"
      },
      {
        claves: ["papeles", "documentacion", "requisitos"],
        respuesta: "Solicitud elaborada, Acta de Nacimiento, Comprobante de estudios, Constancias de trabajo ,comprobante de domicilio, identificación oficial, CURP, RFC, NSS y Constancia de Situaion Fiscal (actualizada 2025)."
      },

      {
        claves: ["ubicacion","donde estan", "donde se ubican", "donde estan ubicados"],
        respuesta: " Gustavo Díaz Ordaz 21 Campestre San Juan 76803 San Juan del Río, Qro."
      },
{
  claves: ["experiencia", "sin experiencia", "primer trabajo"],
  respuesta: "Tenemos vacantes para personas con y sin experiencia. ¡No dudes en postularte!"
},
{
  claves: ["quién eres", "quien eres", "te llamas"],
  respuesta: "¡Soy BelyBot! Un asistente virtual diseñado para ayudarte con información sobre la empresa."
},
{
  claves: ["dias festivos", "descansos", "vacaciones"],
  respuesta: "Respetamos los días festivos oficiales y ofrecemos vacaciones conforme a la ley y antigüedad del trabajador."
}
,
{
  claves: ["comedor", "comida", "almuerzo", "desayuno"],
  respuesta: "Contamos con un comedor subsidiado."
},
{
  claves: ["historia", "historia de la empresa", "cuando se fundo","fundada"],
  respuesta: "CHABELY COMPONENTES, constituida con ese nombre por estrategia corporativa en 2020 y desde entonces hemos crecido y evolucionado en el sector."
}

    ];

    let response = "Lo siento, no entiendo tu pregunta.";

    for (const r of respuestas) {
      if (r.claves.some(clave => input.includes(clave))) {
        response = r.respuesta;
        appendMessage("ChabelyBot", response);
        if (r.cerrar) {
  setTimeout(() => {
    chatbot.classList.remove('active');
    chatbotToggle.classList.remove('hide');
  }, 800);
}
        return;
      }
    }

    appendMessage("ChabelyBot", response);
  }
});
