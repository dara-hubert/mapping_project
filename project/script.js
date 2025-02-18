// The value for 'accessToken' begins with 'pk...'
 mapboxgl.accessToken = "pk.eyJ1IjoiZGFyYWh1YmVydCIsImEiOiJjbTV3Ymo4OG8wOTBqMmpzYXNod3VxbGMzIn0.ndeMxV7H5HcBUWtYUtgs8A";

// Initialise mapbox map 
        const map = new mapboxgl.Map({
            container: 'map', 
            style: 'mapbox://styles/darahubert/cm76mqlmr01w301qx3ld0aj0w',
            center: [-5.081, 50.418], 
            zoom: 8 
        });

        // Interactive scale - mapbox.n.d
        const scale = new mapboxgl.ScaleControl({
            maxWidth: 50,  
        });
        map.addControl(scale); 

// Set styles for 2023 and 2024 layers
    const style_2023 = "mapbox://styles/darahubert/cm79okig8001i01s7hsay4t5l";
    const style_2024 = "mapbox://styles/darahubert/cm76mqlmr01w301qx3ld0aj0w";
    
// Toggle interaction between years    

const layerList = document.getElementById("toggle");
    const inputs = layerList.getElementsByTagName("input");

    for (const input of inputs) {
      input.onclick = (layer) => {
        if (layer.target.id == "style_2024") {
          map.setStyle(style_2024);
        }
        if (layer.target.id == "style_2023") {
          map.setStyle(style_2023);
        }
      };
    }

// Construct the legend - style in css legend-key - colorBrewewer 2.0
    map.on('load', () => {
      const layers = [
        "Excellent", "Good", "Satisfactory", "Poor"
      ];
      const colors = [
        "#2c7bb6", "#abd9e9", "#fdae61", "#d7191c"
      ];
      const legend = document.getElementById("legend");

      layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;
        const value = document.createElement('span');
        value.innerHTML = `${layer}`;

        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
      });

      // Add in nav, geocoder. set position in css. 
     
    });  
      map.addControl(new mapboxgl.NavigationControl(), "top-right");
      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true
      }), "top-right");

     
// Hardcoded data for bathing waters - AI used for formatting - OpenAI.2025
const bathingWaters = [ { id: 'bw1', name: "Booby’s Bay", lat: 50.53903716125394, lng: -5.025858085, classification: "Excellent" }, { id: 'bw2', name: "Carbis Bay", lat: 50.198743487111486, lng: -5.464979858, classification: "Good" }, { id: 'bw3', name: "Cawsand", lat: 50.330855517949935, lng: -4.20137746, classification: "Satisfactory" }, { id: 'bw4', name: "Chapel Porth", lat: 50.30041024758236, lng: -5.234876016, classification: "Excellent" }, { id: 'bw5', name: "Charlestown", lat: 50.33118443987883, lng: -4.755341207, classification: "Good" }, { id: 'bw6', name: "Church Cove", lat: 50.03856677687165, lng: -5.267924543, classification: "Satisfactory" }, { id: 'bw7', name: "Constantine Bay", lat: 50.53323640833779, lng: -5.022692245, classification: "Excellent" }, { id: 'bw8', name: "Coverack", lat: 50.02436158631497, lng: -5.097157135, classification: "Good" }, { id: 'bw9', name: "Crackington Haven", lat: 50.74192286553918, lng: -4.633803991, classification: "Satisfactory" }, { id: 'bw10', name: "Crantock", lat: 50.40681791797864, lng: -5.119221504, classification: "Excellent" }, { id: 'bw11', name: "Crinnis Beach", lat: 50.33609981662796, lng: -4.733841448, classification: "Good" }, { id: 'bw12', name: "Crooklets", lat: 50.83580233992227, lng: -4.554007949, classification: "Satisfactory" }, { id: 'bw13', name: "Daymer Bay", lat: 50.56133257, lng: -4.926484246, classification: "Excellent" }, { id: 'bw14', name: "Downderry", lat: 50.360983061814046, lng: -4.370798314, classification: "Good" }, { id: 'bw15', name: "Duporth", lat: 50.3274314, lng: -4.761868908, classification: "Satisfactory" }, { id: 'bw16', name: "East Looe", lat: 50.35256267635997, lng: -4.451498081, classification: "Excellent" }, { id: 'bw17', name: "Fistral North", lat: 50.41771612760746, lng: -5.098537125, classification: "Good" }, { id: 'bw18', name: "Fistral South", lat: 50.41415464410884, lng: -5.10154263, classification: "Satisfactory" }, { id: 'bw19', name: "Godrevy Towans", lat: 50.232735440965584, lng: -5.392071943, classification: "Excellent" }, { id: 'bw20', name: "Gorran Haven Little Perhaver", lat: 50.24082249654092, lng: -4.787575467, classification: "Good" }, { id: 'bw21', name: "Great Western", lat: 50.41595984701269, lng: -5.076600419, classification: "Satisfactory" }, { id: 'bw22', name: "Gwithian Towans", lat: 50.22798045801165, lng: -5.39193069, classification: "Excellent" }, { id: 'bw23', name: "Gwynver", lat: 50.089302054564136, lng: -5.688927671, classification: "Good" }, { id: 'bw24', name: "Gyllyngvase", lat: 50.14461889183703, lng: -5.067404244, classification: "Satisfactory" },{ id: 'bw25', name: 'Harlyn Bay', lat: 50.5403, lng: -4.9973, classification: 'Excellent' }, { id: 'bw26', name: 'Hayle Towans', lat: 50.2048, lng: -5.4171, classification: 'Good' }, { id: 'bw27', name: 'Holywell Bay', lat: 50.3919, lng: -5.1455, classification: 'Good' }, { id: 'bw28', name: 'Kennack Sands', lat: 50.0051, lng: -5.1636, classification: 'Good' }, { id: 'bw29', name: 'Kingsand', lat: 50.3336, lng: -4.1994, classification: 'Satisfactory' }, { id: 'bw30', name: 'Long Rock', lat: 50.1275, lng: -5.5053, classification: 'Excellent' }, { id: 'bw31', name: 'Lusty Glaze', lat: 50.4218, lng: -5.0650, classification: 'Excellent' }, { id: 'bw32', name: 'Maenporth', lat: 50.1249, lng: -5.0936, classification: 'Good' }, { id: 'bw33', name: 'Marazion', lat: 50.1265, lng: -5.4808, classification: 'Excellent' }, { id: 'bw34', name: 'Mawgan Porth', lat: 50.4675, lng: -5.0334, classification: 'Good' }, { id: 'bw35', name: 'Mexico Towans', lat: 50.2010, lng: -5.4238, classification: 'Good' }, { id: 'bw36', name: 'Millendreath', lat: 50.3611, lng: -4.4363, classification: 'Satisfactory' }, { id: 'bw37', name: 'Mother Ivey\'s Bay', lat: 50.5441, lng: -5.0155, classification: 'Excellent' }, { id: 'bw38', name: 'Northcott Mouth', lat: 50.8480, lng: -4.5569, classification: 'Good' }, { id: 'bw39', name: 'Par Sands', lat: 50.3470, lng: -4.6929, classification: 'Good' }, { id: 'bw40', name: 'Pendower', lat: 50.2057, lng: -4.9478, classification: 'Good' }, { id: 'bw41', name: 'Pentewan', lat: 50.2875, lng: -4.7826, classification: 'Satisfactory' }, { id: 'bw42', name: 'Penzance', lat: 50.1147, lng: -5.5356, classification: 'Satisfactory' }, { id: 'bw43', name: 'Perranporth', lat: 50.3494, lng: -5.1551, classification: 'Excellent' }, { id: 'bw44', name: 'Perranporth Penhale Sands', lat: 50.3594, lng: -5.1514, classification: 'Good' }, { id: 'bw45', name: 'Perranuthnoe', lat: 50.1122, lng: -5.4425, classification: 'Good' }, { id: 'bw46', name: 'Poldhu Cove', lat: 50.0335, lng: -5.2613, classification: 'Excellent' }, { id: 'bw47', name: 'Polkerris', lat: 50.3379, lng: -4.6815, classification: 'Good' }, { id: 'bw48', name: 'Polstreath', lat: 50.2744, lng: -4.7842, classification: 'Satisfactory' }, { id: 'bw49', name: 'Polurrian Cove', lat: 50.0233, lng: -5.2563, classification: 'Excellent' }, { id: 'bw50', name: 'Polzeath', lat: 50.5748, lng: -4.9164, classification: 'Excellent' }, { id: 'bw51', name: 'Porth', lat: 50.4247, lng: -5.0570, classification: 'Good' }, { id: 'bw52', name: 'Porthallow', lat: 50.0686, lng: -5.0793, classification: 'Satisfactory' }, { id: 'bw53', name: 'Porthcothan', lat: 50.5090, lng: -5.0235, classification: 'Excellent' }, { id: 'bw54', name: 'Porthcurnick', lat: 50.1861, lng: -4.9725, classification: 'Good' }, { id: 'bw55', name: 'Porthcurno', lat: 50.0429, lng: -5.6504, classification: 'Excellent' }, { id: 'bw56', name: 'Porthgwidden', lat: 50.2172, lng: -5.4767, classification: 'Good' }, { id: 'bw57', name: 'Porthkidney Sands', lat: 50.1941, lng: -5.4394, classification: 'Good' }, { id: 'bw58', name: 'Porthleven Sands', lat: 50.0810, lng: -5.3149, classification: 'Satisfactory' }, { id: 'bw59', name: 'Porthluney', lat: 50.2368, lng: -4.8433, classification: 'Good' }, { id: 'bw60', name: 'Porthmeor', lat: 50.2153, lng: -5.4834, classification: 'Excellent' }, { id: 'bw61', name: 'Porthminster', lat: 50.2087, lng: -5.4764, classification: 'Excellent' }, { id: 'bw62', name: 'Porthoustock', lat: 50.0556, lng: -5.0642, classification: 'Good' }, { id: 'bw63', name: 'Porthpean', lat: 50.3236, lng: -4.7657, classification: 'Good' }, { id: 'bw64', name: 'Porthtowan', lat: 50.2875, lng: -5.2425, classification: 'Excellent' }, { id: 'bw65', name: 'Portmellon', lat: 50.2618, lng: -4.7856, classification: 'Satisfactory' }, { id: 'bw66', name: 'Portreath', lat: 50.2612, lng: -5.2937, classification: 'Good' }, { id: 'bw67', name: 'Portwrinkle', lat: 50.3614, lng: -4.3077, classification: 'Good' }, { id: 'bw68', name: 'Praa Sands East', lat: 50.0993, lng: -5.3788, classification: 'Excellent' }, { id: 'bw69', name: 'Praa Sands West', lat: 50.1032, lng: -5.3909, classification: 'Excellent' }, { id: 'bw70', name: 'Readymoney Cove', lat: 50.3295, lng: -4.6452, classification: 'Good' },{ id: 'bw74', name: 'Sharrow', lat: 50.347591, lng: -4.259644, classification: 'Good' }, { id: 'bw75', name: 'Shorthorn Beach', lat: 50.337614, lng: -4.722966, classification: 'Good' }, { id: 'bw76', name: 'Summerleaze', lat: 50.831168, lng: -4.552051, classification: 'Excellent' }, { id: 'bw77', name: 'Swanpool', lat: 50.140618, lng: -5.075827, classification: 'Good' }, { id: 'bw78', name: 'Tolcarne', lat: 50.417662, lng: -5.073473, classification: 'Excellent' }, { id: 'bw79', name: 'Towan', lat: 50.415044, lng: -5.084326, classification: 'Good' }, { id: 'bw80', name: 'Trebarwith Strand', lat: 50.644967, lng: -4.761636, classification: 'Excellent' }, { id: 'bw81', name: 'Tregonhawke', lat: 50.340855, lng: -4.242880, classification: 'Good' }, { id: 'bw82', name: 'Trevaunance Cove', lat: 50.320387, lng: -5.201232, classification: 'Good' }, { id: 'bw83', name: 'Trevone Bay', lat: 50.545737, lng: -4.977469, classification: 'Excellent' }, { id: 'bw84', name: 'Treyarnon Bay', lat: 50.526131, lng: -5.022661, classification: 'Excellent' }, { id: 'bw85', name: 'Upton Towans', lat: 50.215181, lng: -5.402912, classification: 'Good' }, { id: 'bw86', name: 'Vault Beach', lat: 50.234884, lng: -4.787650, classification: 'Good' }, { id: 'bw87', name: 'Watergate Bay', lat: 50.443751, lng: -5.042622, classification: 'Excellent' }, { id: 'bw88', name: 'Wherry Town', lat: 50.108917, lng: -5.544901, classification: 'Satisfactory' }, { id: 'bw89', name: 'Widemouth Sand', lat: 50.793089, lng: -4.557637, classification: 'Excellent' }];

// Build the interactive panel - code for this interaction generated by OpenAI 2025, troubleshoot Pradeep., 2024. Integrate Leaflet in the future. 
function buildPanel() {
  const panel = document.getElementById("panel");
  panel.innerHTML = ""; 

  bathingWaters.forEach((item) => {
    // Create a list item for each bathing water
    const li = document.createElement("li");
    li.innerText = item.name; // Assign the name
    li.id = item.id; // Ensure that the ID corresponds to the feature ID
    li.style.cursor = "pointer";

    // Mouse hover event to show additional info about the bathing water
    li.onmouseover = function () {
      li.style.backgroundColor = '#f0f0f0'; // Highlight the item on hover
    };

    li.onmouseout = function () {
      li.style.backgroundColor = ''; // Remove highlight on mouse out
    };

    // Click event to center the map on the selected location
    li.onclick = function () {
      map.setCenter([item.lng, item.lat]); // Set the center of the map to the coordinates
      map.flyTo({
        center: [item.lng, item.lat],
        zoom: 12,
        essential: true 
      });

      //  Add a popup when the item is clicked to display information
      new mapboxgl.Popup()
        .setLngLat([item.lng, item.lat])
        .setHTML(`<h3>${item.name}</h3><p>Classification: ${item.classification}</p>`)
        .addTo(map);
    };

    panel.appendChild(li); // Append list item to panel
  });
}
map.on('load', buildPanel);

// Add hover interaction over Markers on map
map.on("mousemove", (event) => {
  const dzone = map.queryRenderedFeatures(event.point, {
    layers: ["cornwall2024-6bcxna"]
  });

  document.getElementById("hover-box").innerHTML = dzone.length
    ? `<h3>${dzone[0].properties.bathingwater}</h3>`
    : "<h3>Hover over a marker</h3>";
});


// Add weather API for Fistral North - API documentation, StackOverflow and AI assisted - OpenWeather API documents, OpenAI2025, Rascia., T n.d, 
const bathingSiteCoordinates = { lat: 50.41771612, lng: -5.0985371 }; // Fistral north coordinate

const weatherAPIKey = 'faf7e698d057a52a23a444fe9aa462ad'; // OpenWeatherMap API key
const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${bathingSiteCoordinates.lat}&lon=${bathingSiteCoordinates.lng}&exclude=alerts&appid=${weatherAPIKey}`; // URL for API

function getWeather() {
    fetch(weatherURL)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.json();
      })
      .then(data => {
          
          const weatherInfo = `
              <strong>Weather at Fistral North, Cornwall</strong><br>
              Temperature: ${(data.current.temp - 273.15).toFixed(2)} °C<br> <!-- Convert from Kelvin -->
              Weather: ${data.current.weather[0].description}<br> 
              Wind Speed: ${data.current.wind_speed} m/s
          `;
          document.getElementById('weather-info').innerHTML = weatherInfo; 
      })
      .catch(error => {
          console.error('Error fetching weather data:', error);
          document.getElementById('weather-info').innerText = 'Weather data unavailable.'; // Provide user feedback in case of an error
      });
}
map.on('load', getWeather); 

//HIde weather unless there is a hover interaction
document.getElementById('weather-info').style.display = 'none';

// Create a marker for Fistral
const marker = new mapboxgl.Marker()
  .setLngLat(bathingSiteCoordinates)
  .addTo(map);


marker.getElement().addEventListener('mouseenter', () => {
    getWeather();
    document.getElementById('weather-info').style.display = 'block';
});

marker.getElement().addEventListener('mouseleave', () => {
    document.getElementById('weather-info').style.display = 'none';

});