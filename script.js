document.addEventListener("DOMContentLoaded", () => {
  // === MOBILE MENU ===
  const menu = document.querySelector(".nav__menu");
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");
  const navLinks = document.querySelectorAll(".nav__menu .nav__link");

  if (menu && menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener("click", () => menu.classList.add("active"));
    menuCloseButton.addEventListener("click", () => menu.classList.remove("active"));

    navLinks.forEach(link => {
      link.addEventListener("click", () => menu.classList.remove("active"));
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !menuOpenButton.contains(e.target)) {
        menu.classList.remove("active");
      }
    });
  }

  // === SCROLL TO TOP BUTTON ===
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      scrollBtn.classList.toggle("show", window.scrollY > 400);
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === MODALS INITIALIZATION ===
  const reservationModal = document.getElementById("reservationModal");
  const reservationOpenBtn = document.querySelector(".reservation-btn");
  const reservationCloseBtn = document.getElementById("closeReservation");

  const orderModal = document.getElementById("orderModal");
  const orderButtons = document.querySelectorAll(".order-btn");
  const orderCloseBtn = document.querySelector(".order-close");
  const coffeeInput = document.getElementById("coffeeName");

  const discountModal = document.getElementById("discountModal");
  const discountBtns = document.querySelectorAll(".discount-btn");
  const discountCloseBtn = document.querySelector(".discount-close");

  // Reservation modal open/close
  if (reservationOpenBtn && reservationModal) {
    reservationOpenBtn.addEventListener("click", () => reservationModal.classList.add("active"));
  }
  if (reservationCloseBtn && reservationModal) {
    reservationCloseBtn.addEventListener("click", () => reservationModal.classList.remove("active"));
  }

  // Order modal open/close
  if (orderModal) {
    orderButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (coffeeInput) coffeeInput.value = btn.dataset.coffee || "";
        orderModal.classList.add("active");
      });
    });

    if (orderCloseBtn) {
      orderCloseBtn.addEventListener("click", () => orderModal.classList.remove("active"));
    }
  }

  // Discount modal open/close
  if (discountModal) {
    discountBtns.forEach(btn => {
      btn.addEventListener("click", () => discountModal.classList.add("active"));
    });

    if (discountCloseBtn) {
      discountCloseBtn.addEventListener("click", () => discountModal.classList.remove("active"));
    }
  }

  // Close any modal on backdrop click
  window.addEventListener("click", (e) => {
    if (e.target === reservationModal) reservationModal.classList.remove("active");
    if (e.target === orderModal) orderModal.classList.remove("active");
    if (e.target === discountModal) discountModal.classList.remove("active");
  });

  // === RESERVATION FORM SUBMISSION ===
  const reservationForm = document.getElementById("reservationForm");
  const reservationFormFields = document.getElementById("reservationFormFields");
  const reservationSuccessMessage = document.getElementById("reservationSuccessMessage");

  if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (reservationFormFields) reservationFormFields.style.display = "none";
      if (reservationSuccessMessage) reservationSuccessMessage.style.display = "block";

      setTimeout(() => {
        if (reservationModal) reservationModal.classList.remove("active");

        setTimeout(() => {
          reservationForm.reset();

          const peopleButtons = document.querySelectorAll(".people-btn");
          const peopleInput = document.getElementById("peopleInput");

          peopleButtons.forEach(b => b.classList.remove("active"));
          if (peopleButtons[0]) peopleButtons[0].classList.add("active");
          if (peopleInput) peopleInput.value = "1";

          if (reservationFormFields) reservationFormFields.style.display = "flex";
          if (reservationSuccessMessage) reservationSuccessMessage.style.display = "none";
        }, 300);
      }, 2500);
    });
  }

  const phoneInput = document.getElementById("resPhone");
  if (phoneInput) {
    phoneInput.addEventListener("focus", () => {
      if (!phoneInput.value) {
        phoneInput.value = "+421 ";
      }
    });
  }

  // === SUBMIT ORDER FORM ===
  const orderForm = document.getElementById("orderForm");
  const orderFormFields = document.getElementById("orderFormFields");
  const orderSuccessMessage = document.getElementById("orderSuccessMessage");

  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (orderFormFields) orderFormFields.style.display = "none";
      if (orderSuccessMessage) orderSuccessMessage.style.display = "block";

      setTimeout(() => {
        if (orderModal) orderModal.classList.remove("active");

        setTimeout(() => {
          orderForm.reset();
          if (orderFormFields) orderFormFields.style.display = "block";
          if (orderSuccessMessage) orderSuccessMessage.style.display = "none";
        }, 300);
      }, 2500);
    });
  }

  // === PEOPLE SELECT BUTTONS ===
  const peopleButtons = document.querySelectorAll(".people-btn");
  const peopleInput = document.getElementById("peopleInput");

  peopleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      peopleButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      if (peopleInput) peopleInput.value = btn.innerText;
    });
  });


  // === CONTACTS FORM SUBMISSION ===
  const contactsForm = document.getElementById("contactsForm") || document.querySelector(".contacts-form form");
  const contactsSuccessMessage = document.getElementById("contactsSuccessMessage");

  if (contactsForm) {
    contactsForm.addEventListener("submit", function (e) {
      e.preventDefault();

      contactsForm.style.display = "none";
      if (contactsSuccessMessage) {
        contactsSuccessMessage.style.display = "block";
      }

      setTimeout(() => {
        contactsForm.reset(); 
        contactsForm.style.display = "flex"; 

        if (contactsSuccessMessage) {
          contactsSuccessMessage.style.display = "none"; 
        }
      }, 3000); 
    });
  }

  // === COPY COUPON LOGIC ===
  const copyBtn = document.getElementById("copyCoupon");
  const couponCode = document.getElementById("couponCode");

  if (copyBtn && couponCode) {
    copyBtn.addEventListener("click", () => {
      const textToCopy = couponCode.innerText.trim();
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "Copied!";

        setTimeout(() => {
          copyBtn.innerText = originalText;
        }, 2000);
      }).catch(err => {
        console.error("Copy failed: ", err);
      });
    });
  }
});

