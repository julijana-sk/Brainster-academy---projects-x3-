const CHOSEN_ARTIST_FILTER = 'chosenArtistFilter';
const CHOSEN_PRICE_FILTER_MIN = 'chosenPriceFilterMin';
const CHOSEN_PRICE_FILTER_MAX = 'chosenPriceFilterMax';
const CHOSEN_TYPE_FILTER = 'chosenTypeFilter';
const artistItemContainer = document.querySelector('#artistItemContainer');

artistItemContainer.innerHTML = "";

function renderVisitorListingPage () {
  items
  .forEach((artistItem, index) => {
    if (artistItem.isPublished === true) {
      const itemWrapperDiv = document.createElement("div");
      itemWrapperDiv.classList.add("col-12", "p-0", "mt-4", "mb-2");
      itemWrapperDiv.innerHTML = `
        <img
          src="${artistItem.image}"
          class="card-img-top"
          alt="picture of artist"
        />
        <div class="card-body py-3 px-4">
          <div class="d-flex flex-row justify-content-between align-item-center align-self-center">
            <h1 class="card-title font-italic m-0">${artistItem.artist}</h1>
            <p class="priceBtn">$${artistItem.price}</p>
          </div>
          <h4 class="card-subtitle my-2">${artistItem.title}</h4>
          <p class="card-text">
            ${artistItem.description}
          </p>
        </div>
      `;

      artistItemContainer.appendChild(itemWrapperDiv);

      itemWrapperDiv.classList.add(index % 2 === 0 ? "card-beige" : "card-brown");

      const priceBtn = itemWrapperDiv.querySelector(".priceBtn");
      priceBtn.classList.add(index % 2 === 0 ? "price-brown" : "price-beige");
    }
  });

}

// filter layer display
const filterBtnBasic = document.getElementById("filter-button-basic");
const filterBtnChecked = document.getElementById("filter-button-checked");

  function openNav() {
      document.getElementById("filter-layer").style.width = "100%";
      filterBtnBasic.style.display = "none";
      filterBtnChecked.style.display = "flex";
      filterBtnChecked.style.justifyContent = "end";
      window.scrollTo(0, 0);
  }

  function closeNav() {
      document.getElementById("filter-layer").style.width = "0%";
      filterBtnBasic.style.display = "flex";
      filterBtnChecked.style.display = "none";
      window.scrollTo(0, 0);
  }



function renderVistiorListingFiltersPage() {

    const artistNamesDropdown = document.querySelector('#chooseArtist');
    const artistNames = localStorage.getItem('artistNames').split(',');
    artistNamesDropdown.innerHTML = "";

     artistNames.forEach((artistName) => {
          artistNamesDropdown.innerHTML += `<option value="${artistName}">${artistName}</option>`;
     });

     const chosenArtistFilter = localStorage.getItem(CHOSEN_ARTIST_FILTER);
     if (chosenArtistFilter) {
          artistNamesDropdown.value = chosenArtistFilter;
     }

     

     filterBtnChecked.addEventListener('click', () => {
        let chosenArtistFilter = artistNamesDropdown.value;
        localStorage.setItem(CHOSEN_ARTIST_FILTER, chosenArtistFilter);
        document.querySelector('#chosenArtistNameFilters').innerText = localStorage.getItem(CHOSEN_ARTIST_FILTER);
        
       // filter za price
      let chosenPriceFilterMin = chooseMinPrice.value;
      let chosenPriceFilterMax = chooseMaxPrice.value;
      localStorage.setItem(CHOSEN_PRICE_FILTER_MIN, chosenPriceFilterMin);
      localStorage.setItem(CHOSEN_PRICE_FILTER_MAX, chosenPriceFilterMax);

        // filter za type
      let chosenTypeFilter = chooseMinPrice.value;
      localStorage.setItem(CHOSEN_TYPE_FILTER, chosenTypeFilter);


      function renderVisitorListingPage () {
        artistItemContainer.innerHTML = ""; 
        chosenPriceFilterMin.innerText = "";
        chosenPriceFilterMax.innerText = "";                  

          items            
            // .filter(({ artist, priceMin, priceMax }) => (artist === chosenArtistFilter && priceMin >= chosenPriceFilterMin && priceMax <= chosenPriceFilterMax))   
            .filter(({ artist}) => (artist === chosenArtistFilter))           
            .forEach((artistItem, index) => {

              if ((artistItem.isPublished === true)) {
              const itemWrapperDiv = document.createElement("div");
              itemWrapperDiv.classList.add("col-12", "p-0", "mt-4", "mb-2");

              itemWrapperDiv.innerHTML = `
                <img
                  src="${artistItem.image}"
                  class="card-img-top"
                  alt="picture of artist"
                />
                <div class="card-body py-3 px-4">
                  <div class="d-flex flex-row justify-content-between align-item-center align-self-center">
                    <h1 class="card-title font-italic m-0">${artistItem.artist}</h1>
                    <p class="priceBtn">$${artistItem.price}</p>
                  </div>
                  <h4 class="card-subtitle my-2">${artistItem.title}</h4>
                  <p class="card-text">
                    ${artistItem.description}
                  </p>
                </div>
              `;
              
              artistItemContainer.appendChild(itemWrapperDiv);

              itemWrapperDiv.classList.add(index % 2 === 0 ? "card-beige" : "card-brown");

              const priceBtn = itemWrapperDiv.querySelector(".priceBtn");
              priceBtn.classList.add(index % 2 === 0 ? "price-brown" : "price-beige");
              }
            });

            location.hash = '#visitorListingPage';
         } 

          renderVisitorListingPage();
          window.scrollTo(0, 0);
          
      });

}


function navigateAuctionPage2 () {
    const auctionSymbol2 = document.querySelector('#auctionSymbol2');
    auctionSymbol2.addEventListener('click', () => {
      location.hash = "#auctiongPage";
    });
}


window.addEventListener('scroll', function() {
  const fixedDiv = document.querySelector('#filter-layer');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 70) {
    fixedDiv.style.top = 0;
  } else {
    fixedDiv.style.top = '70px';
  }
});


