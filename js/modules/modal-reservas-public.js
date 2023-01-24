function modal() {
  const botaoAbrir = document.querySelectorAll(".modal-abrir");
  const botaoFechar = document.querySelectorAll(".modal-fechar");
  const botaoConfirmar = document.querySelectorAll(".modal-ok");
  const containerModal = document.querySelectorAll(".modal-container");

  if (botaoAbrir && botaoFechar && containerModal) {
    //Função que identifica qual opção foi selecionada e abre o modal correspondente
    botaoAbrir.forEach((element, item) => {
      element.onclick = function (event) {
        event.preventDefault();
        containerModal[item].classList.add("modal-ativo");
      };
    });

    function fecharModal(event, element, item) {
      event.preventDefault();
      containerModal[item].classList.remove("modal-ativo");
    }

    //Função que fecha o modal ao clicar no botão de fechar
    botaoFechar.forEach((element, item) => {
      element.onclick = function (event) {
        fecharModal(event, element, item);
      };
    });

    //Função que fecha o modal ao clicar no botão OK
    botaoConfirmar.forEach((element, item) => {
      element.onclick = function (event) {
        fecharModal(event, element, item);
      };
    });

    

    //Função que fecha o modal ao clicar fora da caixa
    containerModal.forEach((element, item) => {
      element.onclick = function (event) {
        if (this === event.target) {
          fecharModal(event, element, item);
        }
      };
    });
  }
}

export default modal;


