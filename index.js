import { menuData }
from "./menuData.js";
import { restaurants } from "./restaurants.js";
import { postsfull } from "./bebidas.js";

/*Getting HTML elements*/
const restaurantInfo = document.getElementById("info-section")
const menuSection = document.getElementById("menu-section")
const closeModal = document.getElementById("modal-close-btn")
const modal = document.getElementById("modal")
const modalInner = document.getElementById("modal-inner")

/*Variables*/
let postPosition = 0;

/*Main code*/
renderRestaurantInfo("Marcus Davis")
renderMenu()

const comboSectionDivElements = document.querySelectorAll(".combo-section")

comboSectionDivElements.forEach((elementDiv) =>
    elementDiv.addEventListener("click",
        function() {
            modal.style.display = "flex"
            const idObject = elementDiv.getAttribute("id")
            console.log(idObject)
            console.log(idObject.split("-", 2).join("-"))
            const selectedMenu = getObjectMenu(idObject.split("-", 2).join("-"))
            modalInner.innerHTML = `
            <div>
            <div>
            <img src="${selectedMenu.img}" class="modal-img">
            <div class="modal-info">
                <div class="line"></div>
                <h1 class="modal-title">${selectedMenu.name}</h1>
                <div class="line"></div>
                <p class="modal-text"> ${selectedMenu.post}</p>
            <div class="line"></div>
            </div>
            </div>
            </div>`
        }))


closeModal.addEventListener("click", function() {
    modal.style.display = "none"
})

/*Functions */

function displayOther(position) {

}

function getObjectMenu(idMenu) {
    let menuSelected = {}

    for (let menus of menuData) {
        if (menus.code == idMenu) {
            menuSelected = menus
        }
    }

    return menuSelected

}

function renderRestaurantInfo(restaurantName) {
    let selectedRestaurant
    for (let restaurant of restaurants) {
        if (restaurant.name === restaurantName) {
            selectedRestaurant = restaurant
        }
    }
    restaurantInfo.innerHTML = ` 
    <div id="restaurant-info">
     <img src="${selectedRestaurant.imgbanner}" class="enterprise-banner">
     <div class="restaurant-name-logo">
        <img id="restaurant-logo" class="restaurant-logo" src="${selectedRestaurant.imglogo}">
        <h1 id="restaurant-name">${selectedRestaurant.name}</h1>
     </div>
    </div>
    <div id="delivery-info" class="delivery-info">
     <div>
        <div class="light-grey">
            <p>Tiempo</p>
         <i class="fa-regular fa-clock"></i>
        </div>
        <p id="delivery-time" class="text-bolder">${selectedRestaurant.deliveryTime} año</p>
    </div>

    <div>
        <div class="light-grey">
         <p>Rol actual</p>
         <i class="fa-solid fa-user"></i>
        </div>
        <p id="delivery-shipping" class="text-bolder">${selectedRestaurant.shipping}</p>
      </div>
    <div>
    <div class="light-grey">
        <p>Calificación</p>
        <i class="fa-solid fa-star"></i>
        </div>
        <p id="delivery-shipping" class="text-bolder">${selectedRestaurant.calification}</p>
    </div>
    </div>`

}

function renderMenu() {
    menuSection.innerHTML = `
    <div id="combos" class="combos">
        ${renderCombo()}
    </div>
    
`
}

function renderCombo() {
    let theCombos = []
    let comboCode = ""
    for (let menus of menuData) {
        if (menus.category == "combo") {
            theCombos.push(menus)
        }
    }

    for (let i = 0; i < theCombos.length; i++) {
        comboCode += `
        <div class="combo-section" id="${theCombos[i].code}-combo-section-div">
            <div>
                <p class="text-bolder">${theCombos[i].name}</p>
                <p>${theCombos[i].text}</p>
            </div>
            <img src=${theCombos[i].img} id="${theCombos[i].code}-img" class="${theCombos[i].code}-img img-selector">
        </div>
`

    }

    return comboCode

}

function openModal(idforlistener) {
    document.getElementById("idforlistener").addEventListener("click", function() {
        modal.style.display = "flex"
    })
}