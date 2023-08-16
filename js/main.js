const LANDING_HOME_PAGE = '#landingPage';
const VISITOR_HOME_PAGE = '#visitorHomePage';
const VISITOR_LISTING_PAGE = '#visitorListingPage';
// const VISITOR_LISTING_FILTERS_PAGE = '#visitorListingFiltersPage';
const ARTIST_HOME_PAGE = '#artistHomePage';
const ARTIST_ITEM_PAGE = '#artistItemPage';
const AUCTION_PAGE = '#auctionPage';

const SECTION_PAGE = '.page-section';

const loader = document.querySelector('#loader');

const ALLOWED_ROUTES = [
    LANDING_HOME_PAGE,
    VISITOR_HOME_PAGE,
    VISITOR_LISTING_PAGE,
    ARTIST_HOME_PAGE,
    ARTIST_ITEM_PAGE,
    AUCTION_PAGE,    
];


function handleRoute () {
    let locationHash = location.hash;
    let currentHash = locationHash ? locationHash : LANDING_HOME_PAGE;
    
    if (!ALLOWED_ROUTES.includes(currentHash)) {
        currentHash = LANDING_HOME_PAGE;
    } else if (currentHash === "") {
        // to set as home page
        LANDING_HOME_PAGE.style.display = "block";
        }
            
    document.querySelectorAll(SECTION_PAGE).forEach((page) => page.style.display = "none");

    document.querySelector(currentHash).style.display = "block";


    switch (currentHash) {
        case LANDING_HOME_PAGE:
            fetchArtists();
            navigateVisitorHomePage()
            break;
        case VISITOR_HOME_PAGE:
            // renderVisitorHomePage();
            navigateAuctionPage();
            break;
        case VISITOR_LISTING_PAGE:
            renderVisitorListingPage();
            renderVistiorListingFiltersPage();
            navigateAuctionPage();
            break;
        case ARTIST_HOME_PAGE:
            mainMenu();
            break;
        default:
            break;
        }


       
};








window.addEventListener("load", handleRoute);
window.addEventListener("hashchange", handleRoute);




