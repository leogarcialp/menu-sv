
// Variables
const sectionCenter = document.querySelector('.section-center');

let btnAll = document.querySelector("[data-id='all']");
let btnTipical = document.querySelector("[data-id='tipical']");
let btnBreakfast = document.querySelector("[data-id='breakfast']");
let btnDrinks = document.querySelector("[data-id='drinks']");
let btnDessert = document.querySelector("[data-id='dessert']");

let article = document.querySelectorAll('article');




window.addEventListener('DOMContentLoaded', () => {
   // console.log('cargando contenido xd');
   sectionCenter.style.display = 'grid';
});


// Iterate through buttons to choose data-id
// btnFilter.forEach( button => {
//    console.log(button.getAttribute('data-id') );

//    // if(button.includes("[data-id='all']") ) {
//    //    console.log(button);
//    // }
// });



// event to filter/includes/contains items based on category

// all
btnAll.addEventListener('click', () => {
   let allItems;
   
   article.forEach( item => {
      if(item.classList.contains('menu-item')) {
         console.log(item);

         allItems = item;

         sectionCenter.appendChild = allItems;
      }
   });
});


// tipical food
btnTipical.addEventListener('click', () => {
   let tipicalItems;

   article.forEach( item => {
      if(item.getAttribute().contains('menu-item')) {
         console.log(item);

         allItems = item;

         sectionCenter.appendChild = allItems;
      }
   });
});
