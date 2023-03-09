function showNav (data) {

    const searchBar = document.getElementById("search");
    const restaurantFoodMenu = document.getElementById("restaurant-food-menu");
    const restaurantFoodMenuMb = document.getElementById("restaurant-mb-menu");
  
    if(data === "open") {
        searchBar.classList.add("d-none")
        restaurantFoodMenu.classList.add("d-none")
        restaurantFoodMenuMb.classList.add("d-none")
    }
    if(data === "close") {
        searchBar.classList.remove("d-none")
        restaurantFoodMenu.classList.remove("d-none")
        restaurantFoodMenuMb.classList.remove("d-none")
    }

    document.getElementsByClassName("mobile-menu-wrapper")[0].classList.toggle("d-none")
}