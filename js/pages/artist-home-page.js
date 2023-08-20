const ITEMS_CHART = '#itemChart';


const menuBtn = document.querySelector("#menuBtn");
const x = document.querySelector('.myLinksDisplay');

function mainMenu() {
  menuBtn.addEventListener('click', () => {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  });
}

const navBtnHome = document.querySelector('#navBtnHome');
const navBtnItem = document.querySelector('#navBtnItem');
const navBtnAuction = document.querySelector('#navBtnAuction');


function redirectingMenu () {
  navBtnHome.addEventListener('click', () => {
      location.hash = "#artistHomePage";
      x.style.display = "none";
    });

  navBtnItem.addEventListener('click', () => {
      location.hash = "#artistItemPage";
    });

  navBtnAuction.addEventListener('click', () => {
      location.hash = "#auctiongPage";
    });
}

//statistic labels

let chosenArtistName = localStorage.getItem('CHOSEN_ARTIST');
document.querySelector('#chosen-artist-name').innerText = chosenArtistName;
const totalSoldItem = document.querySelector('#totalSoldItem');
const totalIncomePrice = document.querySelector('#totalIncome');
let totalPublishedItems = 0;
let soldOutItems = 0;
let totalIncome = 0;

    totalPublishedItems = "";


function calculateSoldItems() {
    resetItemValues();
    totalPublishedItems = "";
    soldOutItems = 0;
    totalIncome = 0;
  
    items.forEach((artistItem) => {
        if (artistItem.artist === chosenArtistName) {
            totalPublishedItems++;

            if (artistItem.dateSold !== undefined && artistItem.isPublished) {
                soldOutItems++;
                totalIncome += artistItem.priceSold;
            }
        }
    });

    totalSoldItem.innerText = `${soldOutItems}/${totalPublishedItems}`;
    totalIncomePrice.innerText = "$" + totalIncome;
}

function resetItemValues() {
    totalPublishedItems = 0;
    soldOutItems = 0;
    totalIncome = 0;
}

function handleArtistNameChange() {
    chosenArtistName = localStorage.getItem('CHOSEN_ARTIST');
    document.querySelector('#chosen-artist-name').innerText = chosenArtistName;
    calculateSoldItems();
}

document.addEventListener('storage', handleArtistNameChange);

const liveAuctioningNav = document.querySelector('#liveAuctioningNav');

liveAuctioningNav.addEventListener('click', () => {
    location.hash = "#auctiongPage";
})

const liveAuctioningPrice = document.querySelector('#liveAuctioningPrice');

function liveAuctioningItemCurrentBid () {
    let amount = 0;

    items.forEach((artistItem) => {
        if (artistItem.artist === chosenArtistName) {

        if ((artistItem.isAuctioning === true)) {
            amount += artistItem.price;
        };
        liveAuctioningPrice.innerText = "$" + amount;
    }
});
}

// Horisontal bar chart for items
function renderArtistItemChart () {
    const itemChart = document.querySelector(ITEMS_CHART);
    const renderItemsJson = localStorage.getItem(RENDER_ITEMS_STORED);
    const storedItems = JSON.parse(renderItemsJson);
    const filteredArtistItems = storedItems.filter((artistItem) => artistItem.artist === chosenArtistName && Boolean(artistItem.priceSold));

    document.querySelector('#last14days').addEventListener('click', () => {
        const labels = generateDateLabels(14);
        const chartData = labels.map((label) => {
            let sum = 0;
            filteredArtistItems.forEach((artistItem) => {
                const artistItemDateSold = formatDate(artistItem.dateSold);

                if (label === artistItemDateSold) {
                    sum += artistItem.priceSold;
                }
            });

            return sum;
        });
      
      // Getting the existing chart
        const existingChart = Chart.getChart('itemChart');

      // Destroing the existing chart
        if (existingChart) {
          existingChart.destroy();
          }

        const displayChart = new Chart (itemChart, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: "Amount",
                    backgroundColor: "rgba(161, 106, 94, 1)",
                    hoverBackgroundColor: "rgba(212, 76, 46, 1)",
                    borderColor: "transparent",
                    data: chartData,
                }],
            },
            options: {
                indexAxis: 'y',
            },
          });

          displayChart.update();
    });

    document.querySelector('#last7days').addEventListener('click', () => {
        const labels = generateDateLabels(7);
        const chartData = labels.map((label) => {
            let sum = 0;
            filteredArtistItems.forEach((artistItem) => {
                const artistItemDateSold = formatDate(artistItem.dateSold);

                if (label === artistItemDateSold) {
                    sum += artistItem.priceSold;
                }
            });

            return sum;
        });

        const existingChart = Chart.getChart('itemChart');
        if (existingChart) {
          existingChart.destroy();
          }

        const displayChart = new Chart (itemChart, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: "Amount",
                    backgroundColor: "rgba(161, 106, 94, 1)",
                    hoverBackgroundColor: "rgba(212, 76, 46, 1)",
                    borderColor: "transparent",
                    data: chartData,
                }],
            },
            options: {
                indexAxis: 'y',
            },
          });

          displayChart.update();
    });

    document.querySelector('#lastmonth').addEventListener('click', () => {
        const labels = generateDateLabels(31);
        const chartData = labels.map((label) => {
            let sum = 0;
            filteredArtistItems.forEach((artistItem) => {
                const artistItemDateSold = formatDate(artistItem.dateSold);

                if (label === artistItemDateSold) {
                    sum += artistItem.priceSold;
                }
            });

            return sum;
        });

        const existingChart = Chart.getChart('itemChart');
        if (existingChart) {
          existingChart.destroy();
          }

        const displayChart = new Chart (itemChart, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: "Amount",
                    backgroundColor: "rgba(161, 106, 94, 1)",
                    hoverBackgroundColor: "rgba(212, 76, 46, 1)",
                    borderColor: "transparent",
                    data: chartData,
                }],
            },
            options: {
                indexAxis: 'y',
            },
          });

          displayChart.update();
    });

    document.querySelector('#lastyear').addEventListener('click', () => {
        const labels = generateDateLabels(365);
        const chartData = labels.map((label) => {
            let sum = 0;
            filteredArtistItems.forEach((artistItem) => {
                const artistItemDateSold = formatDate(artistItem.dateSold);

                if (label === artistItemDateSold) {
                    sum += artistItem.priceSold;
                }
            });

            return sum;
        });

        const existingChart = Chart.getChart('itemChart');
        if (existingChart) {
          existingChart.destroy();
          }

        const displayChart = new Chart (itemChart, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: "Amount",
                    backgroundColor: "rgba(161, 106, 94, 1)",
                    hoverBackgroundColor: "rgba(212, 76, 46, 1)",
                    borderColor: "transparent",
                    data: chartData,
                }],
            },
            options: {
                indexAxis: 'y',
            },
          });

          displayChart.update();
    });

}


function formatDate(dateNumber) {
    const date = new Date(dateNumber);
    return date.toLocaleDateString('en-gb', { day: 'numeric' });
}

function generateDateLabels(daysAgo) {

      const arr = []

      for (let i = 0; i < daysAgo; i++) {
          const now = new Date()
          const startDate = now.getDate()
          const relevantDate = now.setDate(startDate - i)
          const formattedDate = formatDate(relevantDate)
          arr.push(formattedDate)
      }
      return arr;
  }