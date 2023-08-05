// document.getElementById("filterButton").addEventListener("click", filterImages);

// function filterImages() {
//   var type = prompt("Enter image type: (landscape/portrait)");
//   var price = parseFloat(prompt("Enter maximum price:"));
//   var artist = prompt("Enter artist name:");

//    var images = document.querySelectorAll("#gallery img");

//    for (var i = 0; i < images.length; i++) {
//       var image = images[i];

//       var imageType = image.getAttribute("data-type");
//       var imagePrice = parseFloat(image.getAttribute("data-price"));
//       var imageArtist = image.getAttribute("data-artist");

//       if ((imageType === type || type === "") &&
//           (isNaN(price) || imagePrice <= price) &&
//           (imageArtist.toLowerCase() === artist.toLowerCase() || artist === "")) {
//         image.style.display = "block";
//       } else {
//         image.style.display = "none";
//       }
//    }
// }


// filter layer display
const filterBtnBasic = document.getElementById("filter-button-basic");
const filterBtnChecked = document.getElementById("filter-button-checked");

function openNav() {
    document.getElementById("filter-layer").style.width = "100%";
    filterBtnBasic.style.display = "none";
    filterBtnChecked.style.display = "flex";
    filterBtnChecked.style.justifyContent = "end";

        
}

function closeNav() {
    document.getElementById("filter-layer").style.width = "0%";
    filterBtnBasic.style.display = "flex";
    filterBtnChecked.style.display = "none";
}

