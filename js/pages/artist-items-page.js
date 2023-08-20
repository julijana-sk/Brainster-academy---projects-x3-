const artistItemWrapper = document.querySelector('#artistItemWrapper');

function renderArtistItemsPage() {
        let chosenArtistName = localStorage.getItem('CHOSEN_ARTIST');
        document.getElementById('chosen-artist-name1').innerText = chosenArtistName;
        items            
            .filter(({ artist}) => (artist === chosenArtistName))           
            .forEach((artistItem) => {
              function convertingDate() {
                  const dateString = artistItem.dateCreated;
                  const dateObj = new Date(dateString);
                  const year = dateObj.getFullYear().toString();
                  let month = (dateObj.getMonth() + 1).toString();
                  let day = dateObj.getDate().toString();

                  if (month.length === 1) {
                    month = "0" + month;
                  }
                  if (day.length === 1) {
                    day = "0" + day;
                  }
                  const formattedDate = day + "." + month + "." + year;
                  return formattedDate;
              }
              const itemWrapperDiv = document.createElement("div");
              itemWrapperDiv.classList.add("col-12", "p-0", "mb-4", "card-beige");
              itemWrapperDiv.innerHTML = `
                <img
                  src="${artistItem.image}"
                  class="card-img-top"
                  alt="picture of artist"
                />
                <div class="card-body py-3 px-4">
                  <div class="d-flex flex-row justify-content-between align-item-center mb-2">
                  <div class="d-flex flex-column align-self-center align-item-center>
                    <h1 class="card-title font-italic m-0">${artistItem.artist}</h1>
                    <h4 class="card-subtitle date mt-2">${convertingDate(artistItem.dateCreated)}</h4>
                    </div>
                    <p class="price-brown align-self-center">$${artistItem.price}</p>
                  </div>
                  <p class="card-text">
                    ${artistItem.description}
                  </p>
                </div> 
                 <div
                class="d-flex flex-row flex-wrap justify-content-between align-self-center w-100 py-3 px-4 card-brown"
              >
                <button class="btnAuction bg-blue">Send to Auction</button>
                <button class="btnAuction bg-green">Publish</button>
                <button class="btnAuction bg-red">Remove</button>
                <button class="btnAuction bg-beige">Edit</button>
              </div>
            </div>
              `;
              artistItemWrapper.appendChild(itemWrapperDiv);  
      });
}


//DEL ZA KOREKCIJA I POPRAVANJE !!! <-----
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






//nadolu ne cepkaj !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const menuBtn1 = document.querySelector("#menuBtn1");
const x1 = document.querySelector('.myLinksDisplay1');

function mainMenu1() {
  x1.style.display = "none";
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


window.addEventListener("load", mainMenu1);
window.addEventListener("hashchange", mainMenu1);