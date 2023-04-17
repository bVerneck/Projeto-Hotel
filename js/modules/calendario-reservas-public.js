function calendario() {
  const entradaDate = document.querySelectorAll(".entrada-date");
  const inputDate = document.querySelectorAll(".dropdown");

  function showCalendar(event) {
    for (let i = 0; i < entradaDate.length; i++) {
      if (event.target === entradaDate[i]) {
        inputDate[i].showPicker();
      }
    }
  }

  entradaDate.forEach((element) => {
    element.addEventListener("click", showCalendar);
  });
}

export default calendario;
