const artistItemWrapper = document.querySelector('#artistItemWrapper');
const CHOSEN_TYPE_ITEM = 'chosenTypeItem';

//navigation
const navMenu = document.getElementById("navMenu");
const navMenuDisplay = document.querySelector('.navMenuDisplay');

function mainMenu1 () {
  navMenu.addEventListener('click', () => {
    if (navMenuDisplay.style.display === "block") {
      navMenuDisplay.style.display = "none";
    } else {
      navMenuDisplay.style.display = "block";
    }
  });


  const navMenuHome = document.getElementById('navMenuHome');
  const navMenuItems = document.getElementById('navMenuItems');
  const navMenuAuction = document.getElementById('navMenuAuction');

  navMenuHome.addEventListener('click', () => {
    location.hash = "#artistHomePage";
  });

  navMenuItems.addEventListener('click', () => {
    location.hash = "#artistItemPage";
    navMenuDisplay.style.display = "none";
  });

  navMenuAuction.addEventListener('click', () => {
    location.hash = "#auctionPage";
  });
}

// rendering main page Artist Item Page
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
                    <h1 class="card-title font-italic m-0">${artistItem.title}</h1>
                    <h4 class="card-subtitle date mt-2">${convertingDate(artistItem.dateCreated)}</h4>
                    </div>
                    <p class="price-brown align-self-center">$${artistItem.price}</p>
                  </div>
                  <p class="card-text small">
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

const addItemBtn = document.querySelector('#addItemCard');

function addItem() {
      addItemBtn.addEventListener('click', () => {

      const showFilterLayerAddItem = document.querySelector("#filter-layer-add-item");
      showFilterLayerAddItem.style.width = "100%";
    });
}


const takeSnapshot = document.querySelector('#takeSnapshot');

takeSnapshot.addEventListener('click', function takeSnapshot() {
    document.getElementById('captureImagePopup').style.display = 'flex';
    takeSnapshotCamera();   
});


// Choosing type of Item
const chooseByTypeDropdown = document.querySelector('#chooseByTypeDropdown');

chooseByTypeDropdown.addEventListener('click', function renderType() {
  chooseByTypeDropdown.innerHTML = "";

  itemTypes.forEach((type) => {
    chooseByTypeDropdown.innerHTML += `<option value="${type}">${type}</option>`;

  });
      chooseByTypeDropdown.addEventListener('change', () => {
      const selectedOption = chooseByTypeDropdown.options[chooseByTypeDropdown.selectedIndex].text;
      chooseByTypeDropdown.innerHTML = `<option value="${selectedOption}">${selectedOption}</option>`;
    });

});












