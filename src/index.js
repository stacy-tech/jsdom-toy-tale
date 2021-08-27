let addToy = false;
let divCollect = document.querySelector('#toy-collection')

class ToyApi {
  constructor() {
      this.baseUrl = "http://localhost:3000"
  }

  getToys() {
    fetch(this.baseUrl + "/toys")
    .then(res => res.json())
       
  }

}


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
