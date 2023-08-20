const carouselImg = document.querySelector('.carousel-wrapper', 'img');

carouselImg.addEventListener('click', () => {
    location.hash = "#visitorListingPage";
});


function navigateAuctionPage1 () {
const auctionSymbol1 = document.querySelector('#auctionSymbol1');
auctionSymbol1.addEventListener('click', () => {
    location.hash = "#auctionPage";
});
}

document.querySelector('#navigateVisitorListingPage').addEventListener('click', () => {
    location.hash = "#visitorListingPage";
});

