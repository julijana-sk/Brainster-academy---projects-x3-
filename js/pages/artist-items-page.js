function renderChosenArtist1 () {
    let chosenArtistName = localStorage.getItem('CHOSEN_ARTIST');
    document.getElementById('chosen-artist-name1').innerText = chosenArtistName;
}


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


//nadolu ne cepkaj

const menuBtn1 = document.querySelector("#menuBtn1");
const x1 = document.querySelector('.myLinksDisplay1');

function mainMenu1() {
  menuBtn1.addEventListener('click', () => {
    if (x1.style.display === "block") {
      x1.style.display = "none";
    } else {
      x1.style.display = "block";
    }
  });
}

const navBtnHome1 = document.querySelector('#navBtnHome1');
const navBtnItem1 = document.querySelector('#navBtnItem1');
const navBtnAuction1 = document.querySelector('#navBtnAuction1');

function redirectingMenu1 () {
    navBtnHome1.addEventListener('click', () => {
        location.hash = "#artistHomePage";
        });

    navBtnItem1.addEventListener('click', () => {
        location.hash = "#artistItemPage";
         x1.style.display = "none";
      });
     x1.style.display = "block";

    navBtnAuction1.addEventListener('click', () => {
        location.hash = "#auctiongPage";
      });
}