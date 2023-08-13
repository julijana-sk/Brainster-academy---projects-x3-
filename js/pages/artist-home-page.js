// const currentURLArtistHomePage = window.location.href;


// export const currentURLAHP = () => {
//   location.href = currentURLArtistHomePage;
// }












function myFunction() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

myFunction();



/* horizontal bar chart */
 var options = {
          series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
          chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

// filter layer display
// const filterBtnBasic = document.getElementById("filter-button-basic");
// const filterBtnChecked = document.getElementById("filter-button-checked");

// function openNav() {
//     document.getElementById("filter-layer").style.width = "100%";
//     filterBtnBasic.style.display = "none";
//     filterBtnChecked.style.display = "flex";
//     filterBtnChecked.style.justifyContent = "end";

        
// }

// function closeNav() {
//     document.getElementById("filter-layer").style.width = "0%";
//     filterBtnBasic.style.display = "flex";
//     filterBtnChecked.style.display = "none";
// }