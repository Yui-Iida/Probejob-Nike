const newValue = document.querySelector(".size-selector");
const price = document.querySelector(".price");
const dropdown = document.querySelector(".dropdown");
const lebronPrice = 249;

const mobileMenu = document.querySelector(".mobile-menu");
const mobileOpen = document.querySelector(".icon-mobile-open");
const mobileClose = document.querySelector(".icon-mobile-close");

const clickDropdown = () => {
  dropdown.classList.toggle("active");
};

const show = (value) => {
  newValue.value = value;
};

const changePrice = () => {
  if (newValue.value) {
    price.innerHTML = `$ ${lebronPrice}`;
  }
};

const clickOpen = () => {
  mobileMenu.classList.toggle("is-active");
  mobileOpen.classList.toggle("is-active");
  mobileClose.classList.add("is-active");
};

const clickClose = () => {
  mobileMenu.classList.remove("is-active");
  mobileOpen.classList.remove("is-active");
  mobileClose.classList.remove("is-active");
};
