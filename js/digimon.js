const cardTemplate = document.querySelector("[data-digimon-template]")
const cardContainer = document.querySelector("[data-digimon-cards-container]")
const searchInput = document.querySelector("[data-search]")

let digimonList = [];

getData();

async function getData(){

    const url = 'https://digimon-api.vercel.app/api/digimon';
    const result = await fetch(`${url}`)
    digimon = await result.json();

    createElements(digimon);
}

function createElements(digimon){

    digimonList = digimon.map(el => {

        const card = cardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const body = card.querySelector("[data-body]");
        const image = card.querySelector("[data-img]");

        header.textContent = 'Name: ' + el.name
        image.src = el.img
        body.textContent = 'Level: ' + el.level

        cardContainer.append(card)
        return {name: el.name, img: el.img, level: el.level, element: card}
    })
}

searchInput.addEventListener('input', e => {

    const value = e.target.value.toLowerCase();
    digimonList.forEach(item => {

        const isVisible = item.name.toLowerCase().includes(value)
        item.element.classList.toggle('hide', !isVisible)
    })
})