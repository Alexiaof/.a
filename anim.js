// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Dame de tu vida y de tu tiempo", time: 17 },
  { text: "Suficientes para ver", time:  23},
  { text: "Dentro de tus ojos el momento", time: 25 },
  { text: "Que me obligue a renacer", time: 32 },
  { text: "Dame vida y dame aliento", time: 36 },
  { text: "Que yo ya perdí el conocimiento", time: 41 },
  { text: "Solo quédate un momento", time: 44 },
  { text: "Hasta evaporarnos en el viento", time: 49 },
  { text: "No hay motivos , Para decirnos adiós tan pronto", time: 54 },
  { text: "Sigo vivo , Créemelo, mi amor, no soy tan tonto", time: 62 },
  { text: "Si tú quisieras esta noche", time: 70 },
  { text: "Ir a bailar un chachachá", time: 74 },
  { text: "Yo te puedo enamorar", time: 79 },
  { text: "Dame de tu vida y de tu tiempo, ooh", time: 92 },
  { text: "Que te quiero conocer", time: 97 },
  { text: "Déjame sentir el movimiento, ooh", time: 101 },
  { text: "De tu cuerpo al florecer", time: 106 },
  { text: "Dame vida y dame aliento", time: 110 },
  { text: "Que yo ya perdí el conocimiento", time: 114 },
  { text: "Solo quédate un momento", time: 118 },
  { text: "Hasta evaporarnos en el viento", time: 123 },
  { text: "No hay motivos, Para decirnos adiós tan pronto", time: 128 },
  { text: "Sigo vivo , Créemelo, mi amor, no soy tan tonto", time: 136 },
  { text: "Si tú quisieras esta noche", time: 144 },
  { text: "Ir a bailar un chachachá", time: 148 },
  { text: "Yo te puedo enamorar", time: 153 },
  { text: "No hay motivos , Para decirnos adiós tan pronto", time: 175 },
  { text: "Créemelo, mi amor, no soy tan tonto", time: 185 },
  { text: "Si tú quisieras esta noche", time: 191 },
  { text: "Ir a bailar un chachachá", time: 194 },
  { text: "Yo te puedo enamorar", time: 200 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);