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

let currentIndex = 0;

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

function createBigImage() {
  displayContainer.innerHTML = "";

  const bigImage = document.createElement("img");
  bigImage.src = "images/thailand.jpg";
  bigImage.alt = "Monasteries on a Thai hillside.";
  bigImage.classList.add("big-image");

  displayContainer.appendChild(bigImage);
}

function createBigImage() {
  displayContainer.innerHTML = "";

  const bigImage = document.createElement("img");
  bigImage.src = "images/la.jpg";
  bigImage.alt =
    "Los Angeles skyline, palm trees in foreground, skyscrapers in the distance";
  bigImage.classList.add("big-image");

  displayContainer.appendChild(bigImage);
}

function createBigImage() {
  displayContainer.innerHTML = "";

  const bigImage = document.createElement("img");
  bigImage.src = "images/korea.jpg";
  bigImage.alt = "Bukchon Hanok Village downtown Seoul";
  bigImage.classList.add("big-image");

  displayContainer.appendChild(bigImage);
}

createThumbnails();
createBigImage();
