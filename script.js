//items
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancake",
        category: "Breakfast",
        price: "$15",
        img: "./images/item-1.jpeg",
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id: 2,
        title: "Diner Double",
        category: "Breakfast",
        price: "$13",
        img: "./images/item-2.jpeg",
        desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"

    }
]

const sectionCenter = document.querySelector('.section-center');
console.log(sectionCenter);

window.addEventListener("DOMContentLoaded" , function () {
    displayMenuItems(menu);
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        //console.log(item);
        return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
    </article>`;
    })
    displayMenu = displayMenu.join("");
    //console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
}