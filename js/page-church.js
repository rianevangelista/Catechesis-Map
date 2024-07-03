const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map('map', options).setView([-3.724669, -38.524657], 15);

// create and add titleLayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// create and add marker
L.marker([-3.724669, -38.524657], { icon })
.addTo(map);

/* image gallery */
function selectImage(event) {
    const button = event.currentTarget;

    console.log(button.children);

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass);

    function removeActiveClass(button) {
        button.classList.remove("active");
    }

    // selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".church-details > img");

    // atualizar o container de image
    imageContainer.src = image.src;

    // adicionar a classe .active para este botao
    button.classList.add('active');
}






















