function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;

let xJogador = [0, 0, 0];
let yJogador = [100, 200, 300];
let jogador = ["🐢","🐇","🤑"]
let quantidade = jogador.length;

function draw() {
  jogar();
  linha();
  sprites();
  final();
}

//Verificar foco

function jogar() {
  if (focused == true) {
    background("#A0DF89");
  } else {
    background("#E67E62");
  }
}

function linha() {
  fill("white");
  rect(300, 0, 50, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 50) {
    rect(300, yAtual, 25, 25);
    rect(325, yAtual + 25, 25, 25);
  }
}

//fazer sprites

function sprites() {
  textSize(40);
  for (let i = 0; i < quantidade; i++){
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

//controles

let teclas = ["a","s","d","f"];

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += 15;
    }
  }
}

//Verefica quem venceu

function final() {
  for (let i = 0; i < quantidade; i++){
    if (xJogador[i] > 350) {
    text(jogador[i] + " venceu! 🥹", 50, 200);
    noLoop();
    }
  }
}
