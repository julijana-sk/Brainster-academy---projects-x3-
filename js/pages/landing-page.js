const ARTIST_NAMES = 'artistNames';
const CHOSEN_ARTIST_NAME = 'chosenArtistName';

function fetchArtists () {

    const artistNamesDropdown = document.querySelector("#dropdown-menu");
    let artistNames = localStorage.getItem(ARTIST_NAMES);
    if (!artistNames) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(artists => {
            artistNames = artists.map((artist) => artist.name);
            localStorage.setItem(ARTIST_NAMES, artistNames);
        })
    }

    const artistNamesArray = artistNames.split(",");

    artistNamesArray.forEach((artistName) => {
    artistNamesDropdown.innerHTML += `<option value="${artistName}">${artistName}</option>`;
    });

    artistNamesDropdown.addEventListener('change', (event) => {

        startCountdown();

        const chosenArtistName = event.target.value;
        localStorage.setItem('CHOSEN_ARTIST_NAME', chosenArtistName);
          
        // event.target.addEventListener('click', () => {
        //   window.location.href = "./artist-home-page.html";
        // })

        // event.target.addEventListener('click', function navigateToArtistHomePage() {
        //   let i = 3;
        //   const interval = setInterval(function() {
        //     if (i > 0) {
        //     window.location.href = "./artist-home-page.html";
        //       i--;
        //     }
        //   }, 1000);
        // }
        // )
      });
}

fetchArtists();


    function startCountdown() {
    let i = 3;
    const interval = setInterval(function() {
        if (i > 0) {
        loader.style.display = 'flex';
        loader.classList.add('centered-and-darken');
        i--;
        } else {
        clearInterval(interval);
        loader.style.display = 'none';
        landingPageContent.style.display = 'flex';
        }
    }, 1000);
    }


    