// const populateContentVistiorAuctionPage = () => {
//     // TODO: The item which has its ID stored in session (sent for auction)
//     // should be found and used here instead of using the first item in the list.
//     const storedItemsJson = localStorage.getItem(ITEMS_SESSION_KEY);
//     const storedItems = JSON.parse(storedItemsJson);
//     const currentAuctioningItem = storedItems[0];
//     console.log(currentAuctioningItem);

//     const contentImg = document.querySelector('.content img');
//     const contentTitle = document.querySelector('.content h4');

//     contentImg.src = currentAuctioningItem.image;
//     contentTitle.textContent = currentAuctioningItem.title;

//     const highestBid = document.querySelector('#highestBid');
//     const biddingInput = document.querySelector('#biddingInput');
//     const biddingBtn = document.querySelector('#biddingBtn');
//     const biddingHistory = document.querySelector('#biddingHistory');

//     biddingInput.min = currentAuctioningItem.price;
//     biddingInput.value = currentAuctioningItem.price;

//     // https://projects.brainster.tech/bidding/api
//     biddingBtn.addEventListener('click', function () {

//         highestBid.textContent = biddingInput.value;
//         biddingHistory.innerHTML += `<li>${biddingInput.value}</li>`;

//         const formData = new FormData();
//         formData.set('2000', biddingInput.value);

//         fetch('https://projects.brainster.tech/bidding/api', {
//             method: 'POST',
//             body: formData
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.isBidding) {
//                     highestBid.textContent = data.bidAmount;
//                     biddingHistory.innerHTML += `<li style="margin-left: 150px">${data.bidAmount}</li>`;

//                     biddingInput.min = data.bidAmount;
//                     biddingInput.value = data.bidAmount;
//                 } else {
//                     biddingHistory.innerHTML += `<li style="margin-left: 150px">I give up!</li>`;
//                 }
//             })
//     });

//     function clearAuction() {
//         // TODO: Auction finished.
//         // Set dateSold: new Date().
//         // Set priceSold: highestBid.textContent.
//         // Disable bid button and input.
//         // Clear global variable for sent for auction item ID.
//     };

//     initAuctionTimer(clearAuction);
// };


// function initAuctionTimer(whenDone) {
//     // TODO: Actual counting should be used which uses 2 minutes for the initial countdown.
//     let time = 5;

//     const contentTimer = document.querySelector('.content h2');
//     const biddingBtn = document.querySelector('#biddingBtn');
//     const highestBid = document.querySelector('#highestBid');
//     contentTimer.textContent = time;

//     // TODO: For bonus points, the remaining time should be stored in session.
//     const intervalId = setInterval(() => {
//         time -= 1;
//         contentTimer.textContent = time;

//         if (time == 0) {
//             clearInterval(intervalId);
//             whenDone();
//             // TODO: Auction finished.
//             // Set dateSold: new Date().
//             // Set priceSold: highestBid.textContent.
//             // Disable bid button and input.
//             // Clear global variable.
//         }
//     }, 1000);

//     biddingBtn.addEventListener('click', () => {
//         // TODO: Should add one more minute after adding a new bid.        
//         time = 5;
//     });
// }