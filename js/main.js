function showNav(data) {
  const searchBar = document.getElementById("search");
  const restaurantFoodMenu = document.getElementById("restaurant-food-menu");
  const restaurantFoodMenuMb = document.getElementById("restaurant-mb-menu");

  if (data === "close") {
    searchBar.classList.remove("d-none");
    restaurantFoodMenu.classList.remove("d-none");
    restaurantFoodMenuMb.classList.remove("d-none");
  }

  document
    .getElementsByClassName("mobile-menu-wrapper")[0]
    .classList.toggle("mobile-menu-active");
  const myTimeout = setTimeout(myGreeting, 2000);
  
  myTimeout();

  if (data === "open") {
    searchBar.classList.add("d-none");
    restaurantFoodMenu.classList.add("d-none");
    restaurantFoodMenuMb.classList.add("d-none");
  }
}
