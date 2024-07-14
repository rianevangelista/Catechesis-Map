// create map
const map = L.map('map').setView([-3.724669, -38.524657], 15);

// create and add titleLayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function addMarker({ id, name, lat, lng }) {

    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`<span class="choose-church">${name}</span><a href="/church?id=${id}"><img src="./assets/arrow-white.svg"> </a>`);
    
    // create and add marker
    L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(popup);
}

const churchsSpan = document.querySelectorAll('.churchs span')

churchsSpan.forEach( span => {
    const church = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(church)
})