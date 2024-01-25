getElement();

elementContainer = document.querySelector("#cards");

let idInput = document.querySelector("#id-Input");
let nameInput = document.querySelector("#name-Input");
let genreInput = document.querySelector("#genre-Input");
let directorInput = document.querySelector("#director-Input");
let ratingInput = document.querySelector("#rating-Input");

let addElementBtn = document.querySelector("#add-element-btn");

addElementBtn.addEventListener("click", addElement);

function addElement() {
  let newElement = {
    id: Number(idInput.value),
    name: nameInput.value,
    director: directorInput.value,
    genre: genreInput.value,
    rating: Number(ratingInput.value),
  };

  fetch("http://localhost:5140/v1/Films_And_Series_", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newElement),
  }).then((res) => {
    if (res.ok) {
      getElement();
    } else {
      console.warn("Something is wrong with the API!");
    }
  });
}

function getElement() {
  fetch("http://localhost:5140/v1/Films_And_Series_")
    .then((res) => res.json())
    .then((data) => displayElement(data));
}

function displayElement(element) {
  element.forEach((e) => {
    elementContainer.innerHTML += `
   <div class="col-4 text-center p-2"> 
        <div class="card bg-dark text-light rounded border-warning">
            <div class="card-body text-center">  
                <div class="h1">     
                ${e.name}         
                </div>
                <p class="card-information">
                Director: ${e.director} 
                </p>
                <p>
                Genre: ${e.genre}
                </p>
                <p>
                Rating: ${e.rating}
                </p>
                <img src= >
            </div>    
        <div/>
    </div>                    
    `;
  });
}
