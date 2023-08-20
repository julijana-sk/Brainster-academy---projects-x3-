const LANDING_HOME_PAGE = '#landingPage';
const VISITOR_HOME_PAGE = '#visitorHomePage';
const VISITOR_LISTING_PAGE = '#visitorListingPage';
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
            navigateVisitorHomePage();
            break;
        case VISITOR_HOME_PAGE:
            navigateAuctionPage1();
            break;
        case VISITOR_LISTING_PAGE:
            renderVisitorListingPage();
            renderVistiorListingFiltersPage();
            navigateAuctionPage2();
            break;
        case ARTIST_HOME_PAGE:
            renderArtistItemChart();
            handleArtistNameChange();
            liveAuctioningItemCurrentBid ();
            mainMenu();
            redirectingMenu();
            break;
        case ARTIST_ITEM_PAGE:
            renderArtistItemsPage();
            // addItem();
            // takeSnapshot();
            redirectingMenu1();
            mainMenu1();
            break;
        case AUCTION_PAGE:
            // mainMenu();
            break;
        default:
            break;
        }       
};


window.addEventListener("load", handleRoute);
window.addEventListener("hashchange", handleRoute);

