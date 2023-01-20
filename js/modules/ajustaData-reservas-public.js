function ajustaData(infoData) {
  const dias = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

  let dia = dias[infoData.getDay()];
  let data = infoData.getDate();
  data < 10 ? (data = "0" + data) : null;
  let mes = infoData.getMonth() + 1;
  mes < 10 ? (mes = "0" + mes) : null;
  let ano = infoData.getFullYear().toString().slice(-2);

  return `${dia}, ${data}/${mes}/${ano}`;
}

export default ajustaData;
