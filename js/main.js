import {renderingVisitorListingPage} from './visitor-listing-page.js';

const findMasterpieceBtn = document.querySelector('#findMasterpieceBtn');

findMasterpieceBtn.addEventListener('click', function () {
    renderingVisitorListingPage();
    return;
})