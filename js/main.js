// import {renderingVisitorListingPage} from './pages/visitor-listing-page.js';

// document.addEventListener('load', function () {
// renderingVisitorListingPage();

// })

// const LANDING_HOME_PAGE_ID = '#landingPage';
// const VISITOR_HOME_PAGE_ID = '#visitorHomePage';
// const ARTIST_HOME_PAGE_ID = '#artistHomePage';
// const VISITOR_LISTING_PAGE_ID = '#visitorListingPage';
// const VISITOR_LISTING_FILTERS_PAGE_ID = '#visitorListingFiltersPage';

// const ALLOWED_ROUTES = [
//     LANDING_HOME_PAGE_ID,
//     VISITOR_HOME_PAGE_ID,
//     ARTIST_HOME_PAGE_ID,
//     VISITOR_LISTING_PAGE_ID,
//     VISITOR_LISTING_FILTERS_PAGE_ID];

// const SECTION_PAGE_CLASS_NAME = '.page-section';

// const handleRouteChange = () => {
//     let currentHash = location.hash || LANDING_HOME_PAGE_ID;

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
// };

// window.addEventListener("load", handleRouteChange);
// window.addEventListener("hashchange", handleRouteChange);