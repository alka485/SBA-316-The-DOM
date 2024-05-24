//items
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancake",
        category: "Breakfast",
        price: 15,
        img: "./images/item-1.jpeg",
        desc:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id: 2,
        title: "Diner Double",
        category: "Breakfast",
        price: 13,
        img: "./images/item-2.jpeg",
        desc:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"

    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
      {
        id: 10,
        title: "bison steak",
        category: "dinner",
        price: 22.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
]

const sectionCenter = document.getElementById('section-center');
//console.log(sectionCenter);

const filterBtns = document.querySelectorAll('.filter-btn');
//load items
window.addEventListener("DOMContentLoaded" , function () {
    displayMenuItems(menu);
});
//filter items
filterBtns.forEach(function(btn){
    btn.addEventListener('click', function (e){
          //console.log(e.currentTarget.dataset.id);
          const category = e.currentTarget.dataset.id;
          const menuCategory = menu.filter(function(menuItem) {
            //console.log(menuItem.category);
            if(menuItem.category === category){

                return menuItem;
            }
          });
          //console.log(menuCategory);
          if(category === 'all'){
            displayMenuItems(menu)
          }
          else{
            displayMenuItems(menuCategory)
          }
    })
})

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

const loginlink = document.getElementById('login');
//console.log(loginlink);

loginlink.addEventListener("click" ,(e)=>{
  e.preventDefault();
  console.log("clicked");
  window.location.pathname = "../login.html"
  //Create a form dynamically
//  var form = document.createElement("form");
//  form.setAttribute("method","post");
//  form.setAttribute("action","submit.php");

 //Create an input element for username
//  let userName = document.createElement("input");
//  userName.setAttribute("type", "text");
//  userName.setAttribute("name", "userName");
//  userName.setAttribute("placeholder","userName");

 //Create an input element for password
//  let PWD = document.createElement("input");
//  PWD.setAttribute("type", "password");
//  PWD.setAttribute("placeholder","Password");


 
//Append username to the form
//  form.appendChild(userName);

 //Append password to the form
//  form.appendChild(PWD);

//  document.getElementsByTagName("body")[0].appendChild(form)

 

})





