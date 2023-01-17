function modal() {
  const botaoAbrir = document.querySelectorAll(".modal-abrir");
  const botaoFechar = document.querySelectorAll(".modal-fechar");
  const containerModal = document.querySelector(".modal-container");

  if (botaoAbrir && botaoFechar && containerModal) {
    function abrirModal(e) {
      e.preventDefault();
      containerModal.classList.add("modal-ativo");
    }

    function fecharModal(e) {
      e.preventDefault();
      containerModal.classList.remove("modal-ativo");
    }

    function clickFora(e) {
      if (this === e.target) {
        fecharModal(e);
      }
    }

    botaoAbrir.forEach((element) => {
      element.addEventListener("click", abrirModal);
    });
    botaoFechar.forEach((element) => {
      element.addEventListener("click", fecharModal);
    });

    containerModal.addEventListener("click", clickFora);
  }
}

export default modal;
