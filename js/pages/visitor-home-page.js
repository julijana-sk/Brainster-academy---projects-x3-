// function renderVisitorHomePage() {

// }

const carouselImg = document.querySelector('.carousel-wrapper', 'img');


carouselImg.addEventListener('click', () => {
    // console.log('you clicked on an img from sliders')
    location.hash = "#visitorListingPage";
});

function navigateAuctionPage () {
const auctionSymbol = document.querySelector('#auctionSymbol');

auctionSymbol.addEventListener('click', () => {
    location.hash = "#auctiongPage";
});
}

document.querySelector('#navigateVisitorListingPage').addEventListener('click', () => {
    location.hash = "#visitorListingPage";
})