const clickButton = document.getElementById("clickBtn");
clickButton.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (image) {
      let list = document.getElementById("imageList");
      let imgLi = document.createElement("li");
      list.appendChild(imgLi);
      let img = document.createElement("img");
      imgLi.appendChild(img);
      img.src = image.message;
    })
    .catch((error) => console.log(error));
});
