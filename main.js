const robotron = document.querySelector("robotron");

let pecas = document.querySelectorAll(".controle-ajuste");

pecas.length;

pecas.forEach((element) => {
  const operacao = element.textContent;
  const val = element.parentElement.parentElement.querySelector(".controle-contador");
  element.addEventListener("click", () => manipulaDados(operacao, val));
});

function manipulaDados(operacao, val) {
  if (operacao === "-") {
    val.value > 0 ? (val.value = parseInt(val.value) - 1) : (val.value = "00");
  } else {
    val.value < 99 ? (val.value = parseInt(val.value) + 1) : (val.value = "99");
  }
}
