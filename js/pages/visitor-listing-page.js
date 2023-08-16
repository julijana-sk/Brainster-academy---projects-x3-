const CHOSEN_ARTIST_FILTER = 'chosenArtistFilter';

const artistItemContainer = document.querySelector('#artistItemContainer');

fetchArtists();


function renderVisitorListingPage () {

  // artistItemContainer.innerHTML = "";
  const chosenArtistFilter = localStorage.getItem(CHOSEN_ARTIST_FILTER);

  // TODO: Filtering of items according to saved filter values.
  items.filter(({ artist }) => artist === chosenArtistFilter)
       .forEach((artistItem) => {
       artistItemContainer.innerHTML += `
          <div class="col-12 p-0 mt-4 mb-2 item-wrapper">
            <img
              src="${artistItem.image}"
              class="card-img-top"
              alt="picture of artist"
            />
            <div class="card-body py-3 px-4">
              <div class="d-flex flex-row justify-content-between align-item-center align-self-center">
                <h1 class="card-title font-italic m-0">${artistItem.artist}</h1>
                <p class="price-brown">$${artistItem.price}</p>
              </div>
              <h4 class="card-subtitle my-2">${artistItem.title}</h4>
              <p class="card-text">
                ${artistItem.description}
              </p>
            </div>
          </div>
        `;
        //selecting bg color and style depending on index
        const itemWrapper = document.querySelectorAll('.item-wrapper');
        itemWrapper.forEach((div, index) => {
          if (index % 2 === 0) {
            div.classList.add('.card-beige');
          } else {
            div.classList.add('.card-brown');
          }
        });
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
     artistNames.forEach((artistName) => {
          artistNamesDropdown.innerHTML += `<option value="${artistName}">${artistName}</option>`;
     });

     // NOTE: Set as selected the previously picked value.
     const chosenArtistFilter = localStorage.getItem(CHOSEN_ARTIST_FILTER);
     if (chosenArtistFilter) {
          artistNamesDropdown.value = chosenArtistFilter;
     }

    //  const filterBtnChecked = document.querySelector('#filters-apply');
     filterBtnChecked.addEventListener('click', () => {
          const chosenArtistFilter = artistNamesDropdown.value;
          localStorage.setItem(CHOSEN_ARTIST_FILTER, chosenArtistFilter);
          location.hash = '#visitorListingPage';
     })
}


 function navigateAuctionPage () {
    const auctionSymbol = document.querySelector('.auctionSymbol');

    auctionSymbol.addEventListener('click', () => {
        location.hash = "#auctiongPage";
    });
}

navigateAuctionPage();


window.addEventListener('scroll', function() {
  const fixedDiv = document.querySelector('#filter-layer');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 70) {
    fixedDiv.style.top = 0;
  } else {
    fixedDiv.style.top = '70px';
  }
});

