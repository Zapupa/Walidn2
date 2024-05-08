let inputText = document.querySelector(".search_input");
submitForm = document.querySelector(".search_img");
information = document.querySelectorAll(".card_text_header");
cards = document.querySelectorAll(".card");

searchFun = (text) => {
  information.forEach((element) => {
    let elId = text;
    cards.forEach((element) => {
      if (elId == "") {
        element.style = "display:flex";
      } else {
        if (element.id != elId) {
          element.style = "display:none";
        } else {
          element.style = "display:flex";
        }
      }
    });

    console.log(element);
    console.log(elId);
  });
};

submitForm.addEventListener("click", (e) => {
  e.preventDefault();
  searchFun(inputText.value);
});
