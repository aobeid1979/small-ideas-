document.addEventListener('DOMContentLoaded', function() {
const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([50 , 50]).addTo(map);

navigator.geolocation.getCurrentPosition(function(position) {
    const {latitude, longitude} = position.coords;
    map.setView([latitude, longitude], 10);
    marker.setLatLng([latitude, longitude]);
    marker.bindPopup('You are here').openPopup();   

    });
});