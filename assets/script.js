
////////////popup/////////////
window.addEventListener("load", function(){
  setTimeout(
      function open(){
          document.querySelector(".popup").style.display="block";
      },
      1000
  )
});

document.querySelector("#close").addEventListener( "click" , function(){
  document.querySelector(".popup").style.display="none";
})




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






////////////////cards////////////////////
const result = fetch('https://dummyjson.com/products') 
  .then(function (result) {
    return result.json();
  }) 
  .then(function (result) {
    displayData(result.products);
  }); 

function displayData(arr) {
  arr.forEach(function (item) {
    const cardsArea = document.querySelector(".cards-area");

    const div1 = document.createElement("div");
    div1.classList = "swiper-slide col-md-4 col-sm-12";

    const div2 = document.createElement("div");
    div2.classList = "card  mb-3";

    const img = document.createElement("img");
    img.src = item.images[0];
    img.classList = "card-img-top img";

    const div3 = document.createElement("div");
    div3.classList = "card-body card-content center";

    const h5 = document.createElement("h5");
    h5.classList = "card-title";
    h5.innerText = item.title;

    const p = document.createElement("p");
    p.classList = "card-text price";
    p.innerText = item.price;

     const r = document.createElement("p");
     r.classList = "card-text";
     r.innerText = item.rating;

    div3.append(h5);
    div3.append(p);
    div3.append(r);


    div2.append(img);
    div2.append(div3);

    div1.append(div2);

    cardsArea.append(div1);

    
  });
}


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});