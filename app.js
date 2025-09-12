const thumbnails = document.getElementById("thumbnails");

const displayContainer = document.getElementById("displayContainer");

const images = [
  {
    src: images / thailand.jpg,
    alt: "Monastaries on a Thai hillside.",
  },
  {
    src: images / la.jpg,
    alt: "Los Angeles skyline, palm tress in foregorund, skyscrapers in the distance",
  },
  {
    src: images / korea.jpg,
    alt: "Bukchon Hanok Village downtown Seoul",
  },
];

function createThumbnails() {
  images.array.forEach((element) => {
    let imageElement = document.createElement("img");
    console.log(`current image is`, thailand.jpg);

    imageElement.src = image.src;

    imageElement.addEventListener("click", function () {
      console.log(thailand.jpg);
      createBigImage(thailand.jpg);
    });
  });
}

createThumbnails();
function createBigImage(imgDetails) {
  displayContainer.innerHTML = "";
  const bigImage = document.createElement("img");

  bigImage.src = thailand.jpg;
  bigImage.alt = "Monastaries on a Thai hillside.";

  displayContainer.appendChild(bigImage);
}
