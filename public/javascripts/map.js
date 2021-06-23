var mymap = L.map('main-map').setView([-34.5986,-58.3813],14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiaWFuZHJhZGU5MCIsImEiOiJja3FhM2h3ejAwdnloMm9tcXZoYmFqeDQ5In0.mK07HNHuRqDAoZiD7f8R0g'
}).addTo(mymap);

var marker = L.marker([-34.6011,-58.3832]).addTo(mymap);
