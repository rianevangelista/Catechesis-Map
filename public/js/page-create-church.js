// create map
const map = L.map('map').setView([-3.724669, -38.524657], 15)

// create and add titleLayer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./assets/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

// create and add marker;
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
});

// adicionar o campo de fotos
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return
    }
    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

// select Yes or No
function toggleSelect(event) {
    // retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    });

    // colocar a class .active neste botao clicado
    const button = event.currentTarget;
    button.classList.add('active');

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}

// TODO: pensar em uma validação para o ponto do mapa
function validate(event) {

    // validar se lat e lng estao preenchidos
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
    
}