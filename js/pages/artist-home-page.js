
function myFunction() {
  const menuBtn = document.querySelector("#menuBtn");
  const x = document.querySelector('#myLinks');
  menuBtn.addEventListener('click', () => {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  });
}

myFunction();

/* horizontal bar chart */

// 33:19 video explanation!!!!!   < -------------

// fetchArtists(); 
// artistNamesDropdown.addEventListener('click', () => {

// let chosenArtistName = localStorage.getItem('CHOSEN_ARTIST_NAME');
// document.getElementById('chosen-artist-name').innerText = chosenArtistName;
// })

// Function to calculate the date range based on the selected option
function getDateRange(option) {
  const today = new Date();
  const startDate = new Date(today);
  const endDate = new Date(today);

  if (option === "last7days") {
      startDate.setDate(today.getDate() - 7);
  } else if (option === "last14days") {
      startDate.setDate(today.getDate() - 14);
  } else if (option === "lastmonth") {
      startDate.setMonth(today.getMonth() - 1);
  } else if (option === "lastyear") {
      startDate.setFullYear(today.getFullYear() - 1);
      startDate.setMonth(0); // Set to January of last year
      startDate.setDate(1); // Set to the first day of January
      endDate.setMonth(11); // Set to December of last year
      endDate.setDate(31); // Set to the last day of December
  }

  return { startDate, endDate };
}

// Function to filter the items based on the selected option
 function filterItems(option) {
    const { startDate, endDate } = getDateRange(option);

    return items.filter((item) => {
        const itemDate = new Date(item.dateSold);
        return itemDate >= startDate && itemDate <= endDate;
    });

  }

// Function to group the items by date and accumulate the amounts
function groupItemsByDateAndAccumulate(items) {
  const groupedData = {};

  items.forEach((item) => {
    const date = item.dateSold;
    if (!groupedData[date]) {
      groupedData[date] = item.priceSold;
    } else {
      groupedData[date] += item.priceSold;
    }
  });

  return groupedData;
}

// Function to handle the option change event
function handleOptionChange(option) {
  const filteredItems = filterItems(option);
  const groupedData = groupItemsByDateAndAccumulate(filteredItems);
  createChart(groupedData);
}

handleOptionChange()

// Example usage:
// const option = document.querySelector('');
// handleOptionChange(option);

function configureButtonHandlers() {
  const buttons = document.getElementsByClassName("btnDays");

  Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
      const option = event.target.getAttribute("data-option");
      handleOptionChange(option);
    });
  });
}

configureButtonHandlers();

// Function to create the chart based on the grouped data
function createChart(groupedData) {
  const labels = Object.keys(groupedData);
  const data = Object.values(groupedData);

  // Get the existing chart by id
  const existingChart = Chart.getChart('myChart');

  // Destroy the existing chart if it exists
  if (existingChart) {
    existingChart.destroy();
  }

// Create a new chart using the canvas with id 'myChart'
const canvas = document.getElementById('myChart').getContext('2d');
const newChart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Amount",
          data: data,
          backgroundColor: "rgba(161, 106, 94, 1)",
          borderColor: "transparent",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
