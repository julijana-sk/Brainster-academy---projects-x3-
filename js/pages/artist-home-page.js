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

const ITEMS_CHART = '#itemChart';

function renderArtistHomePage () {
    let chosenArtistName = localStorage.getItem('CHOSEN_ARTIST');
    document.querySelector('#chosen-artist-name').innerText = chosenArtistName;

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


