const btnPaletaCores = document.getElementsByClassName('color'); //paletteBtns
btnPaletaCores[0].className += ' selected';

const parentQuadro = document.getElementById('pixel-board'); //parentBoard
const pixelsQuadro = document.getElementsByClassName('pixel'); //pixelsBoard
let corEscolhida = 'black';

function criarQuadroPixels(valueInput) {
  parentQuadro.innerHTML = '';
  const totalPixels = valueInput * valueInput;
  for (let contador = 0; contador < totalPixels; contador += 1) {
    const quadro = document.createElement('div');
    parentQuadro.appendChild(quadro);
    quadro.className = 'pixel';
  }
  parentQuadro.style.width = (valueInput * 40) + 'px';
  btnPixelsQuadro();
}
criarQuadroPixels();

function btnCores() {
  for (const button of btnPaletaCores) {
    button.addEventListener('click', inserirClasseIncluirCores);
  }
}
btnCores();

function btnPixelsQuadro() {
  for (const pixels of pixelsQuadro) {
    pixels.addEventListener('click', pintarQuadro);
  }
}

function pintarQuadro(event) {
  event.target.style.backgroundColor = corEscolhida;
}

function inserirClasseIncluirCores(event) {
  const eventTargetClass = event.target.classList;
  const btnTemClasseSelected = eventTargetClass.contains('selected');
   if (!btnTemClasseSelected) {
    for (const btn of btnPaletaCores) {
     btn.classList.remove('selected');
    }
    eventTargetClass.add('selected');
  }
  corEscolhida = eventTargetClass[1];
}

const inputBoard = document.getElementById('board-size');

function gerarQuadro() {
  const btnGerarQuadro = document.getElementById('generate-board');
  btnGerarQuadro.addEventListener('click', () => {
    let valueInput = inputBoard.value;
    if (valueInput === 0 || valueInput === '') {
      alert('Board inválido!');
      return;
    } else if (valueInput < 5) {
      valueInput = 5;
    } else if (valueInput > 50) {
      valueInput = 50;
    }
    criarQuadroPixels(valueInput);
  });
}
gerarQuadro();

function limparQuadro() {
  const btnLimparQuadro = document.getElementById('clear-board');
  btnLimparQuadro.addEventListener('click', (event) => {
    for (const pixel of pixelsQuadro) {
      pixel.style.backgroundColor = 'white';
    }
  });
}
limparQuadro();

criarQuadroPixels(5);