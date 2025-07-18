const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);
navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  const lon = pos.coords.longitude;
  marker.setLatLng([lat, lon]).update() ;
  map.setView([lat, lon], 13);

  
});
