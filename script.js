const url = "https://rickandmortyapi.com/api/character/";

for (i = 1; i < 20; i++) {
  let baseUrl = url + i;
  fetch(baseUrl)
    .then(res => {
      return res.json();
    })
    .then(res => {
      newElement = document.createElement("span");
      newElement.classList.add("div");
      newElement.style.backgroundImage = `url(${res.image})`;
      let level1 = document.querySelector(".level1");
      level1.appendChild(newElement);
      console.log(newElement);
      let newModal = document.createElement("span");
      newModal.classList.add("modal");
      newModal.classList.add("hidden");

      let exitButton = document.createElement("div");
      exitButton.appendChild(document.createTextNode("test value"));
      newModal.appendChild(exitButton);
      exitButton.classList.add("exitButton");
      exitButton.addEventListener("click", removeClass);
      function removeClass(e) {
        e.target.parentElement.classList.toggle("hidden");
      }

      newModal.innerText =
        "Name: " +
        res.name +
        "\n" +
        "Species: " +
        res.species +
        "\n" +
        "Origin: " +
        res.origin.name +
        "\n" +
        "Location: " +
        res.location.name +
        "\n" +
        "Status: " +
        res.status;
      document.querySelector("body").appendChild(newModal);
      newElement.addEventListener("click", popUp);
      function popUp(event) {
        console.log(event.target);
        newModal.classList.toggle("hidden");
      }
      newModal.addEventListener("click", hide);
      function hide() {
        if (newModal.classList.contains("hidden") === false) {
          newModal.classList.toggle("hidden");
          console.log(newModal);
        }
      }
    })
    .catch(err => {
      console.log("something went wrong...", err);
    });
}
