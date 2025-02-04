const burgerMenu = document.querySelector(".burger-menu");
const sideBar = document.querySelector("#sidebar");
const closeSideBar = document.querySelector("#sidebar .close");

burgerMenu.addEventListener("click" , (event) => {
    sideBar.classList.remove("slideOutSidebar-animation");
    sideBar.classList.add("slideInSidebar-animation");
})

closeSideBar.addEventListener("click" , (event) => {
    sideBar.classList.remove("slideInSidebar-animation");
    sideBar.classList.add("slideOutSidebar-animation");
})