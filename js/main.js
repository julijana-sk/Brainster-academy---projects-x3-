// import { fetchArtists } from './pages/landing-page.js';
// import {backToHomePage} from './pages/visitor-home-page.js';
// import { populateContentArtistHomePage } from './pages/artist-home-page.js';
// import { populateContentVisitorListingPage } from './pages/visitor-listing-page.js';
// import { populateContentVistiorListingFiltersPage } from './pages/visitor-listing-page.js';

const LANDING_HOME_PAGE_ID = '#landingPage';
const VISITOR_HOME_PAGE_ID = '#visitorHomePage';
const ARTIST_HOME_PAGE_ID = '#artistHomePage';
const VISITOR_LISTING_PAGE_ID = '#visitorListingPage';
const VISITOR_LISTING_FILTERS_PAGE_ID = '#visitorListingFiltersPage';

const ALLOWED_ROUTES = [
    LANDING_HOME_PAGE_ID,
    VISITOR_HOME_PAGE_ID,
    ARTIST_HOME_PAGE_ID,
    VISITOR_LISTING_PAGE_ID,
    VISITOR_LISTING_FILTERS_PAGE_ID];

// const SECTION_PAGE_CLASS_NAME = '.page-section';
const landingPageContent = document.querySelector('#landingPageContent');
const loader = document.querySelector('#loader');





const handleRoute = () => {
// function handleRoute(event) {
    // event.preventDefault();
    let currentHash = location.hash;

    if (currentHash === "") {
        // home page
        landingPageContent.style.display = "flex";
        loader.style.display = 'none';
    } else {
        // loader.style.display = 'flex';

        // if (location.hash.includes("tag")) {
        // tags page
        //   cardContainer.style.display = "none";
        //   fullRecipeContainer.style.display = "none";
        //   tagContainer.style.display = "flex";

        //   tagContainer.innerHTML = "";

        // location.hash izgleda vaka:  tags/seafood
    //     const tag = location.hash.split("/")[1];

    //     const filteredRecipeData = recipeData.filter((r) => {
    //         if (r.tags.includes(tag)) {
    //         return true;
    //         }
    //         return false;
    //     });
    //     console.log(filteredRecipeData);

    //     filteredRecipeData.forEach((recipe) => {
    //         const card = createCard(recipe);
    //         tagContainer.append(card);
    //     });
    // } 

    // else if {
        // recipe details page
        // cardContainer.style.display = "none";
        // fullRecipeContainer.style.display = "flex";
        // tagContainer.style.display = "none";
        // renderRecipe();
        // }

    }
    // handleRoute();

}





// const handleRouteChange = () => {
//     if (!ALLOWED_ROUTES.includes(currentHash)) {
//         currentHash = LANDING_HOME_PAGE_ID;
//     }
    
//     document.querySelectorAll(SECTION_PAGE_CLASS_NAME)
//         .forEach((pageSection) => pageSection.style.display = "none");

//     document.querySelector(currentHash).style.display = "block";

//     switch (currentHash) {
//         case LANDING_HOME_PAGE_ID:
//             fetchArtists();
//             break;
//         case VISITOR_HOME_PAGE_ID:
//             handleVisitorHomePage();
//             break;
//         case VISITOR_LISTING_PAGE_ID:
//             populateContentVisitorListingPage();
//             break;
//         case VISITOR_LISTING_FILTERS_PAGE_ID:
//             populateContentVistiorListingFiltersPage();
//             break;
//         case ARTIST_HOME_PAGE_ID:
//             populateContentArtistHomePage();
//             break;
//         default:
//             break;
//     }
// });

window.addEventListener("load", handleRoute);
window.addEventListener("hashchange", handleRoute);

