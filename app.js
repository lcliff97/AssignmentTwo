const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");

const images = [
  {
    src: "images/thailand.jpg",
    alt: "Monasteries on a Thai hillside.",
  },
  {
    src: "images/la.jpg",
    alt: "Los Angeles skyline, palm trees in foreground, skyscrapers in the distance",
  },
  {
    src: "images/korea.jpg",
    alt: "Bukchon Hanok Village downtown Seoul",
  },
];

function createThumbnails() {
  images.forEach((element) => {
    let imageElement = document.createElement("img");
    imageElement.src = element.src;
    imageElement.alt = element.alt;
    imageElement.classList.add("thumb");

    imageElement.addEventListener("click", function () {
      createBigImage(element);
    });

    thumbnails.appendChild(imageElement);
  });
}

function createBigImage(imgDetails) {
  displayContainer.innerHTML = "";

  const bigImage = document.createElement("img");
  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;
  bigImage.classList.add("big-image");

  displayContainer.appendChild(bigImage);
}
