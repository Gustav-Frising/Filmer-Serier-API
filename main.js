getElement();

elementContainer = document.querySelector("#cards");

let idInput = document.querySelector("#id-Input");
let nameInput = document.querySelector("#name-Input");
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

  fetch("https://localhost:7294/v1/Films_And_Series_", {
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
  fetch("https://localhost:7294/v1/Films_And_Series_")
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
