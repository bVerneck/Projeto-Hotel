const teste = document.querySelector("#entradaCheckIn");

function calendario() {
  console.log("works");
  let apresentacao = document.createElement("input");
  teste.appendChild(apresentacao);
}

teste.addEventListener("click", calendario);

import modal from "/js/modules/modal-reservas-public.js";

modal();
