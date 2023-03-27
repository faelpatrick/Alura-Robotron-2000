const maxValue = 10;
let controles = document.querySelectorAll("[data-controle]");
let estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -24,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 42,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};
controles.forEach((element) => {
  element.addEventListener("click", (event) => {
    const operacao = event.target.dataset.controle;
    const val = event.target.parentNode.querySelector("[data-contador]");
    const peca = event.target.dataset.peca;
    manipulaDados(operacao, val, peca);
  });
});

function manipulaDados(operacao, val, peca) {
  if (operacao === "-") {
    if (val.value > 0) {
      val.value = parseInt(val.value) - 1;
      atualizaEstatisticas(peca, operacao);
    } else val.value = "00";
  } else {
    if (val.value < maxValue) {
      val.value = parseInt(val.value) + 1;
      atualizaEstatisticas(peca, operacao);
    } else val.value = maxValue;
  }
}

function atualizaEstatisticas(peca, operacao) {
  estatisticas.forEach((element) => {
    console.log(operacao);

    if (operacao === "-") {
      element.textContent = parseInt(element.textContent) - pecas[peca][element.dataset.estatistica];
    } else {
      element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
    }
  });
}
