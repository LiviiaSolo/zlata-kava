// Mobile menu
const menu = document.querySelector(".nav__menu");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav__menu .nav__link");

menuOpenButton.addEventListener("click", () => {
  menu.classList.add("active");
});

menuCloseButton.addEventListener("click", () => {
  menu.classList.remove("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Closing outside the menu
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !menuOpenButton.contains(e.target)) {
    menu.classList.remove("active");
  }
});




// Scroll to Top Button

document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  console.log("JS працює!");

  const scrollBtn = document.getElementById("scrollTopBtn");
  console.log("scrollBtn =", scrollBtn);
});




//  Reservation modal (Rezervovať stôl)
  
const reservationOpenBtn = document.querySelector(".reservation-btn");
const reservationModal = document.getElementById("reservationModal");
const reservationCloseBtn = document.getElementById("closeReservation");

reservationOpenBtn.addEventListener("click", () => {
  reservationModal.classList.add("active");
});

reservationCloseBtn.addEventListener("click", () => {
  reservationModal.classList.remove("active");
});




  //  Order modal (Objednať kávu)

const orderButtons = document.querySelectorAll(".order-btn");
const orderModal = document.getElementById("orderModal");
const orderClose = document.querySelector(".order-close");
const coffeeInput = document.getElementById("coffeeName");

orderButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const coffee = btn.dataset.coffee;

    coffeeInput.value = coffee;

    orderModal.classList.add("active");

  });

});

orderClose.addEventListener("click", () => {
  orderModal.classList.remove("active");
});




  //  Discount modal (-10% kupón)

const discountBtn = document.querySelector(".discount-btn");
const discountModal = document.getElementById("discountModal");
const discountClose = document.querySelector(".discount-close");

discountBtn.addEventListener("click", () => {
  discountModal.classList.add("active");
});

discountClose.addEventListener("click", () => {
  discountModal.classList.remove("active");
});




  //  Close modals When click outside

window.addEventListener("click", (e) => {

  if (e.target === reservationModal) {
    reservationModal.classList.remove("active");
  }

  if (e.target === orderModal) {
    orderModal.classList.remove("active");
  }

  if (e.target === discountModal) {
    discountModal.classList.remove("active");
  }

});




  //  People select buttons (Výber počtu ľudí)

const peopleButtons = document.querySelectorAll(".people-btn");
const peopleInput = document.getElementById("peopleInput");

peopleButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    peopleButtons.forEach(b => b.classList.remove("active"));

    btn.classList.add("active");

    peopleInput.value = btn.innerText;

  });

});