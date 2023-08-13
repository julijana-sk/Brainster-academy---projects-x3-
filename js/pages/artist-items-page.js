function addItem() {
  const x = document.getElementById("filter-layer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.width = "100%";
  }
}

function takeSnapshot() {
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