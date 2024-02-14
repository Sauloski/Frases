const frases = [
  "Gracias por estar en mi vida",
  "Te amo demasiado 😘",
  "Ya hay que casarnos 👰🏼‍♀️",
  "Ya quiero que tengamos una familia juntos",
  "¿Que hice para merecerte?",
  "¿De donde saliste?",
  "¿Quieres ver una palicula en mi casa? 😉",
  "Te voy a robar para ya vivir juntos",
  "Te amo ❤️",
  "Gracias por amarme 🥺",
  "No te vayas nunca",
  "¿Te puedo agarrar una nalga?",
  "Te amo asi como eres, asi de exagerada 😘",
  "Amo tu forma de ser",
  "Amo que seas linda",
  "Tambien te amo cuando eres dormilona",
  "Eres mi niña hermosa",
  "Mua",
  "No puedo esperar para vivir juntos",
  "Te amo mucho mucho muchisimo",
  "Gracias por todo de verdad",
  "Me haces muy feliz",
  "Soy el hombre mas afortunado del mundo al tenerte conmigo"
];

const fraseElement = document.getElementById('frase');
const siguienteBtn = document.getElementById('siguienteBtn');

let indiceFraseActual = 0;

siguienteBtn.addEventListener('click', mostrarSiguienteFrase);

function mostrarSiguienteFrase() {
  fraseElement.textContent = frases[indiceFraseActual];
  indiceFraseActual = (indiceFraseActual + 1) % frases.length;
  
  const corazon = document.createElement('img');
  corazon.src = 'Corazon.png';
  corazon.alt = 'Corazón';
  corazon.style.width = '100px'
  corazon.style.position = 'absolute';
  corazon.style.left = `${Math.random() * window.innerWidth}px`;
  corazon.style.top = `${Math.random() * window.innerHeight}px`;
  
  document.body.appendChild(corazon);
}
