var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");


//Initialisation du local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(produitLocalStorage);

// Récupération des articles de l'API
fetch("http://localhost:3000/api/products/")
    .then(function (res) {
        return res.json();
    })
    .catch((error) => {
        console.log("Erreur de la requête API");
    })

    // Répartition des données de l'API dans le DOM
    .then(function (resultatAPI) {
        let article = resultatAPI;
        console.table(article);

for (let product in produitLocalStorage){
    // Insertion de l'élément "article"
    let productArticle = document.createElement("article");
    document.querySelector("#cart__items").appendChild(productArticle);
    productArticle.className = "cart__item";

    //MODIFIER {product-ID} AVEC ELEMENT DYNAMIQUE
    productArticle.setAttribute('data-id', "${product-ID}");

    // Insertion de l'élément "div"
    let productDivImg = document.createElement("div");
    productArticle.appendChild(productDivImg);
    productDivImg.className = "cart__item__img";

    // Insertion de l'image
    let productImg = document.createElement("img");
    productDivImg.appendChild(productImg);
    productImg.src = article.imageUrl;
    
    // Insertion de l'élément "div"
    let productItemContent = document.createElement("div");
    productArticle.appendChild(productItemContent);
    productItemContent.className = "cart__item__content";
    
    // Insertion du titre h3
    let productTitle = document.createElement("h2");
    productItemContent.appendChild(productTitle);
    productTitle.innerHTML = resultatAPI.name;

    // Insertion du prix
    let productPrice = document.createElement("p");
    productItemContent.appendChild(productPrice);
    productPrice.innerHTML = resultatAPI.price;
}
});