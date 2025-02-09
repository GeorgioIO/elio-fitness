const burgerMenu = document.querySelector(".burger-menu");
const sideBar = document.querySelector("#sidebar");
const closeSideBar = document.querySelector("#sidebar .close");
const allSection = document.querySelectorAll(".section");
const cards = document.querySelectorAll("#services .card");
const themeTogglerButton = document.querySelector(".toggler-button");
const sunIcon = document.querySelector("[alt='sun']")
const moonIcon = document.querySelector("[alt='moon']")
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const upButton = document.querySelector(".go-up");
const adBanner = document.querySelector(".ad-container");
const adText = document.querySelector(".ad-container p");


window.addEventListener("DOMContentLoaded" , () => {    
    adBanner.classList.add("showAdBanner-animation")

    setTimeout(() => {
        adText.classList.add("ad-animation");
    } , 300)

})

upButton.addEventListener("click" , () => {
    window.scroll({
        top : 0,
        behavior : 'smooth'
    });
})

sidebarLinks.forEach(link => {
    link.addEventListener("click" , () => {
        collapseSidebar();
    })
})

burgerMenu.addEventListener("click" , showSidebar)

closeSideBar.addEventListener("click" , collapseSidebar)

themeTogglerButton.addEventListener("click" , (event) => {
    // Theme is light change to dark
    if(event.target.dataset.theme === "light")
    {
        toggleDarkTheme(event);
    }
    else
    {
    // Theme is dark change to light
        toggleLightTheme(event);
    }
})

cards.forEach(card => {
    card.addEventListener("mousemove" , (event) => {
        const box = card.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;

        const centerX = box.width / 2;
        const centerY = box.height / 2;

        const rotateX = ((y - centerY) / centerY) * - 15;
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = `rotateX(0) rotateY(0)`;
    });
});

function toggleDarkTheme(eve)
{
    eve.target.style.backgroundColor = "green";
    document.body.classList.add("dark-theme")
    sunIcon.classList.remove("appear-animation")
    sunIcon.classList.add("disappear-animation")
    setTimeout(() => {
        sunIcon.style.display="none";
        sunIcon.style.opacity = "0"
    } , 300)
    
    setTimeout(() => {
        moonIcon.classList.remove("disappear-animation")
        moonIcon.classList.add("appear-animation")
    } , 300)

    moonIcon.style.display="block";
    setTimeout(() => {
        eve.target.classList.remove("togglerleft-animation")
        eve.target.classList.add("togglerright-animation")
    } , 100)

    eve.target.dataset.theme = "dark"  
}

function toggleLightTheme(eve)
{
    eve.target.style.backgroundColor = "black";
    document.body.classList.remove("dark-theme")
    moonIcon.classList.remove("appear-animation");
    moonIcon.classList.add("disappear-animation");
    setTimeout(() => {
        moonIcon.style.display="none";
        moonIcon.style.opacity = "0"
    } , 300)

    setTimeout(() => {
        sunIcon.classList.remove("disappear-animation")
        sunIcon.classList.add("appear-animation")
    } , 300)

    sunIcon.style.display="block";
    setTimeout(() => {
        eve.target.classList.remove("togglerright-animation")
        eve.target.classList.add("togglerleft-animation")
    } , 100)

    eve.target.dataset.theme = "light" 
}

function showSidebar()
{
    sideBar.classList.remove("slideOutSidebar-animation");
    sideBar.classList.add("slideInSidebar-animation");
}

function collapseSidebar()
{
    sideBar.classList.remove("slideInSidebar-animation");
    sideBar.classList.add("slideOutSidebar-animation");
}

function goTo(button , link)
{
    window.location.href = link;
    setTimeout(() => {
        button.blur();
    }, 500)
}