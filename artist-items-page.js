// function showAllCards() {
//     const allCards = document.querySelectorAll(".card");

//     allCards.forEach(card => {
//         card.style.display = "inline-block";
//     });
// }
// filtering cards - end

// navbar responsive
// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
//     }

//     function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
//     }

// navbar responsive - end

function addItem() {
  const x = document.getElementById("filter-layer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.width = "100%";
  }
}

function takeSnapShot() {
  // const x = document.getElementById("filter-layer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.width = "100%";
  }
}


// filter layer display
// const filterBtnBasic = document.getElementById("filter-button-basic");
// const filterBtnChecked = document.getElementById("filter-button-checked");

// function openNav() {
//     document.getElementById("filter-layer").style.width = "100%";
//     filterBtnBasic.style.display = "none";
//     filterBtnChecked.style.display = "flex";
//     filterBtnChecked.style.justifyContent = "end";

        
// }

// function closeNav() {
//     document.getElementById("filter-layer").style.width = "0%";
//     filterBtnBasic.style.display = "flex";
//     filterBtnChecked.style.display = "none";
// }