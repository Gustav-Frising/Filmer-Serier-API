elementContainer = document.querySelector(".container");

let idInput = document.querySelector("##id-Input");
let nameInput = document.querySelector("name-Input");
let directorInput = document.querySelector("#genre-Input");
let genreInput = document.querySelector("#director-Input");
let ratingInput = document.querySelector("#rating-Input");

function addElement() {
  let newElement = {
    id: Number(idInput.value),
    name: nameInput.value,
    director: directorInput.value,
    genre: genreinput.value,
    rating: Number(ratingInput.value),
  };

  fetch("address", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newElement),
  }).then((res) => {
    if (res.ok) {
      getElement();
    } else {
      console.warn("something went wrong!");
    }
  });
}

function getElement() {
  fetch("adress")
    .then((res) => res.json())
    .then((data) => displayElement(data.element));
}

function displayElement(element) {
  element.forEach((e) => {
    elementContainer.innerHtml += `
   <>${e.name}</>;
    `;
  });
}
