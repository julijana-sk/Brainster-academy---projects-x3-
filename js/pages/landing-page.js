const ARTIST = 'artistNames';
const CHOSEN_ARTIST = 'chosenArtistName';
const RENDER_ITEMS_STORED = 'artistItem';


function fetchArtists () {
    const artistNamesDropdown = document.querySelector("#dropdown-menu");
    let artistNames = localStorage.getItem(ARTIST);
    
    if (!localStorage.getItem(RENDER_ITEMS_STORED)) {
        const renderedItemsInSession = JSON.stringify(items);
        localStorage.setItem(RENDER_ITEMS_STORED, renderedItemsInSession);
    }

    if (!artistNames) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(artists => {
            artistNames = artists.map((artist) => artist.name);
            localStorage.setItem(ARTIST, artistNames);
        })
    }

    const artistNamesArray = artistNames.split(",");

    artistNamesArray.forEach((artistName) => {    
    artistNamesDropdown.innerHTML += `<option value="${artistName}">${artistName}</option>`;
    });

    artistNamesDropdown.addEventListener('change', (event) => {
        startCountdown();

        const chosenArtistName = event.target.value;
        localStorage.setItem('CHOSEN_ARTIST', chosenArtistName);
        location.hash = "#artistHomePage";
        document.getElementById('chosen-artist-name').innerText = chosenArtistName;
      });
        
}

function startCountdown() {
    let i = 2;
    const interval = setInterval(function() {
        if (i > 0) {
        loader.style.display = 'block';
        loader.classList.add('centered-and-darken');
        i--;
        } else {
        clearInterval(interval);
        loader.style.display = 'none';
        }
    }, 1000);
}


function navigateVisitorHomePage () {

    const navVisitorHomePageBtn = document.querySelector('#navigateVisitorHomePage');

    navVisitorHomePageBtn.addEventListener('click', () => {
        location.hash = "#visitorHomePage";
    })
}

    