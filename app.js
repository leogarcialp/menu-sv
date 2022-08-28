// items
const menu = [
   {
      id: 1, 
      title: 'Pupusas',
      category: 'tipical',
      price: 1.00,
      img: "./assets/img/item1.jpg",
      desc: 'Order of three. The best known typical dish. A rice or corn flour tortilla filled with beans, cheese and/or chicharrón. Accompanied by "curtido" and tomato sauce.',
   },

   {
      id: 2, 
      title: 'Yuca Frita',
      category: 'tipical',
      price: 1.00,
      img: "./assets/img/item2.jpg",
      desc: 'Fried yucca. It is accompanied with "curtido", tomato sauce and "pepescas". You can include "chicharrones" if you wish.',
   },

   {
      id: 3, 
      title: 'Pasteles',
      category: 'tipical',
      price: 1.00,
      img: "./assets/img/item3.jpeg",
      desc: ' Order of three. Cakes stuffed with vegetables and meat. Made with corn flour. Served with "curtido" and tomato sauce.',
   },

   {
      id: 4, 
      title: 'Nuegados',
      category: 'tipical',
      price: 1.75,
      img: "./assets/img/item4.jpg",
      desc: 'Order of four. It is a sweet dish that is usually eaten as a snack or dessert. They are made of yucca dough',
   },

   {
      id: 5, 
      title: 'Tipical Breakfast',
      category: 'breakfast',
      price: 2.00,
      img: "./assets/img/item5.jpg",
      desc: 'Ground beans with cream and fried plantain slices or strips.',
   },

   {
      id: 6, 
      title: 'Tamales de Elote',
      category: 'breakfast',
      price: 2.00,
      img: "./assets/img/item6.jpg",
      desc: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
   },

   {
      id: 7, 
      title: 'Tamales de Chipilin',
      category: 'breakfast',
      price: 2.00,
      img: "./assets/img/item7.jpg",
      desc: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
   },

   {
      id: 8, 
      title: 'Horchata',
      category: 'drinks',
      price: 1.75,
      img: "./assets/img/item8.jpg",
      desc: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
   },

   {
      id: 9, 
      title: 'Atol de Elote',
      category: 'drinks',
      price: 1.75,
      img: "./assets/img/item9.jpg",
      desc: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
   },

   {
      id: 10, 
      title: 'Atol de Piñuela',
      category: 'drinks',
      price: 1.75,
      img: "./assets/img/item10.jpg",
      desc: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
   },

   {
      id: 11, 
      title: 'Empanadas',
      category: 'dessert',
      price: 2.00,
      img: "./assets/img/item11.jpg",
      desc: 'Order of four. Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
   },

   {
      id: 12, 
      title: 'Minuta',
      category: 'dessert',
      price: 1.00,
      img: "./assets/img/item12.jpg",
      desc: 'Im baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed',
   },
]

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


// when DOM loads
window.addEventListener('DOMContentLoaded', () => {
   displayMenuItems(menu);

   const categories = menu.reduce((values, item) => {
      if(!values.includes(item.category)) {
         values.push(item.category);
      }
      return values;      
   },['all']);

   const categoryBtns = categories.map((category) => {
      return `<button class="btn-filter" type="button" 
      data-id="${category}">
            ${category}
         </button>`
   }).join("");

   container.innerHTML = categoryBtns;

   const filterBtns = document.querySelectorAll('.btn-filter');

   // filtering menu items
   filterBtns.forEach( (btn) => {
      btn.addEventListener('click', (e) => {
         const category = e.currentTarget.dataset.id;

         const menuCategory = menu.filter( (menuItem) => {
            if(menuItem.category === category) {
               return menuItem;
            }
         });

         if(category === 'all') {
            displayMenuItems(menu);
         } else {
            displayMenuItems(menuCategory);
         }
      });
   });
});




// Functions

// display all menu items
function displayMenuItems(menuItems) {
   let displayMenu = menuItems.map( (item) => {
      // console.log(item);
      
      return `<article class="menu-item">
         <img src=${item.img} class="photo" alt=${item.title}>
         <div class="item-info">
            <header>
               <h4>${item.title}</h4>
               <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
         </div>
      </article>`;
   });

   displayMenu = displayMenu.join("");
   sectionCenter.innerHTML = displayMenu;
}