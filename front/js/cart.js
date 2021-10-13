//Initialisation du local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(produitLocalStorage);
const positionEmptyCart = document.querySelector("#cart__items");

// Si le panier est vide
if (produitLocalStorage === null || produitLocalStorage == 0) {
    const emptyCart = `<p>Votre panier est vide</p>`;
    positionEmptyCart.innerHTML = emptyCart;
} else {
for (let produit in produitLocalStorage){
    // Insertion de l'élément "article"
    let productArticle = document.createElement("article");
    document.querySelector("#cart__items").appendChild(productArticle);
    productArticle.className = "cart__item";
    productArticle.setAttribute('data-id', produitLocalStorage[produit].idProduit);

    // Insertion de l'élément "div"
    let productDivImg = document.createElement("div");
    productArticle.appendChild(productDivImg);
    productDivImg.className = "cart__item__img";

    // Insertion de l'image
    let productImg = document.createElement("img");
    productDivImg.appendChild(productImg);
    productImg.src = produitLocalStorage[produit].imgProduit;
    productImg.alt = produitLocalStorage[produit].altImgProduit;
    
    // Insertion de l'élément "div"
    let productItemContent = document.createElement("div");
    productArticle.appendChild(productItemContent);
    productItemContent.className = "cart__item__content";

    // Insertion de l'élément "div"
    let productItemContentTitlePrice = document.createElement("div");
    productItemContent.appendChild(productItemContentTitlePrice);
    productItemContentTitlePrice.className = "cart__item__content__titlePrice";
    
    // Insertion du titre h3
    let productTitle = document.createElement("h2");
    productItemContentTitlePrice.appendChild(productTitle);
    productTitle.innerHTML = produitLocalStorage[produit].nomProduit;

    // Insertion du prix
    let productPrice = document.createElement("p");
    productItemContentTitlePrice.appendChild(productPrice);
    productPrice.innerHTML = produitLocalStorage[produit].prixProduit + " €";

    // Insertion de l'élément "div"
    let productItemContentSettings = document.createElement("div");
    productItemContent.appendChild(productItemContentSettings);
    productItemContentSettings.className = "cart__item__content__settings";

    // Insertion de l'élément "div"
    let productItemContentSettingsQuantity = document.createElement("div");
    productItemContentSettings.appendChild(productItemContentSettingsQuantity);
    productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";

    // Insertion de "Qté : "
    let productQte = document.createElement("p");
    productItemContentSettingsQuantity.appendChild(productQte);
    productQte.innerHTML = "Qté : ";

    // Insertion de la quantité
    let productQuantity = document.createElement("input");
    productItemContentSettingsQuantity.appendChild(productQuantity);
    productQuantity.value = produitLocalStorage[produit].quantiteProduit;
    productQuantity.className = "itemQuantity";
    productQuantity.setAttribute("type", "number");
    productQuantity.setAttribute("min", "1");
    productQuantity.setAttribute("max", "100");
    productQuantity.setAttribute("name", "itemQuantity");

    // Insertion de l'élément "div"
    let productItemContentSettingsDelete = document.createElement("div");
    productItemContentSettings.appendChild(productItemContentSettingsDelete);
    productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

    // Insertion de "p" supprimer
    let productSupprimer = document.createElement("p");
    productItemContentSettingsDelete.appendChild(productSupprimer);
    productSupprimer.className = "deleteItem";
    productSupprimer.innerHTML = "Supprimer";
}
}
// Modification du total des quantités
var elemsQtt = document.getElementsByClassName('itemQuantity');
var myLength = elemsQtt.length,
totalQtt = 0;

for (var i = 0; i < myLength; ++i) {
    totalQtt += elemsQtt[i].valueAsNumber;
}

let productTotalQuantity = document.getElementById('totalQuantity');
productTotalQuantity.innerHTML = totalQtt;
console.log(totalQtt);

// Modification du prix total
totalPrice = 0;

for (var i = 0; i < myLength; ++i) {
    totalPrice += (elemsQtt[i].valueAsNumber * produitLocalStorage[i].prixProduit);
}

let productTotalPrice = document.getElementById('totalPrice');
productTotalPrice.innerHTML = totalPrice;
console.log(totalPrice);

// Modification d'une quantité de produit


// Suppression d'un produit
let btn_supprimer = document.querySelectorAll(".deleteItem");
console.log(btn_supprimer);

for (let j = 0; j < btn_supprimer.length; j++){
    btn_supprimer[j].addEventListener("click" , (event) => {
        event.preventDefault();

        //Selection de l'id à supprimer
        let idDelete = produitLocalStorage[j].idProduit;
        console.log("idDelete");
        console.log(idDelete);

        produitLocalStorage = produitLocalStorage.filter( el => el.idProduit !== idDelete);
        console.log(produitLocalStorage);

        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));

        alert("Ce produit a bien été supprimé du panier");
        window.location.href = "cart.html";
    })
}