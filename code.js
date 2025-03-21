export const configurazione = {
  testo: "e", // c spype
  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 10,
  densitàPuntiBase: 1,

  nascondiInterfaccia: false,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
}) {
  // Ogni 60 frame alterna il testo
  let myrand4 = floor(random(100, 180)); //
  if (frameCount % myrand4 === 0) {
    let myrand0 = floor(random(2)); // genera 0 o 1
    if (myrand0 % 2 === 0) {
      configurazione.testo = "    spype    ";
    } else {
      configurazione.testo = "e";
    }
  }

  const testi = ["c", "psyce", "federico palumbo", "ABARoma"];
  // Mappa alpha (0-360) sull'indice dell'array
  let index = floor(map(alpha, 0, 360, 0, testi.length)) % testi.length;
  configurazione.testo = testi[index];

  const size = sin((frameCount + indice) * 0.01) * (volume * unita * 1) * unita;

  let r = random(255);
  let g = random(255);
  let b = random(255);

  fill(r, g, b);

  noStroke();
  let larghezza = map(volume, 0, 1, 4, 50);
  let myrand = randomGaussian(larghezza, larghezza * 2);
  let myrand2 = randomGaussian(larghezza, larghezza / 2);
  let myrand3 = randomGaussian(-10, 10);
  push();
  translate(x, y);
  ellipse(
    myrand3,
    random(-100, 100),
    ((size * myrand) / myrand) * myrand2 * 0.01
  );
  pop();

  /* rumore tv
  let larghezza = map(volume, 0, 1, 50, 600);
  let myrand = randomGaussian(larghezza, larghezza * 2);
  stroke("red");
  rect(x * 1.2 - myrand / 2, y + myrand / 20, myrand / 80, 1, 2);
  */

  /*
  const size = sin((frameCount + indice) * 6) * ((volume * unita) / 2) * unita;

  if (indice % 2 == 0) {
    fill("black");
  } else {
    fill("white");
  }
  noStroke();

  push();
  translate(x, y);
  ellipse(0, 0, size);
  pop();
  */
}

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {}

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background("black");

  // [INFO] Rimuovi il commento per disegnare il testo
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b);
  disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("black");
  // disegnaTesto();
}
