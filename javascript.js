/* Lightbox */
lightbox.option({
      'fitImagesInViewport': true,
      'showImageNumberLabel': false,
      'alwaysShowNavOnTouchDevices': true,
      'fadeDuration': 1500,
      'wrapAround': true,
    })

/* Granim */
var granimInstance = new Granim({
    element: '#granim-canvas',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image : {
        source: "./images/logo.png", // Replace with your image URL
        blendingMode: 'multiply'          // Blending effect (multiply, screen, overlay, etc.)
    },
    states : {
        "default-state": {
            gradients: [
                ['#FFDBA8', '#FFF5E5'],
                ['#FFFFA3', '#FFFF2E'],
                ['#0AFF0A', '#C7FFC7']
            ],
            transitionSpeed: 6000
        }
    }
});

/* Chart.js */
const ctx = document.getElementById('visitors').getContext('2d');

new Chart(ctx, {
  type: 'line', // Sets the chart style to line
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [{
      label: 'Monthly Visitors',
      data: [100, 50, 250, 300, 200, 400], // Y-axis data points
      borderColor: 'rgb(0, 0, 193)', // Line color
      backgroundColor: 'rgba(149, 51, 3, 0.2)', // Fill color beneath the line
      tension: 0.3, // Curve smoothness (0 = straight lines)
      fill: true // Enables background fill area
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

/* Leaflet */
document.getElementById('map').style.height = '350px';
document.getElementById('map').style.width = '350px';

var map = L.map('map').setView([43.79379, -79.3503], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([43.7937915, -79.3503082]).addTo(map)
    .bindPopup('1750 Finch Avenue East<br> Toronto, Ontario M2J 5G3')
    .openPopup();