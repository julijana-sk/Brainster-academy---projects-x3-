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

// navbar responsive
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    }

// navbar responsive - end
