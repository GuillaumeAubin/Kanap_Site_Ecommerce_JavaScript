var str = window.location.href;
var url = new URL(str);
var idProduct = url.searchParams.get("id");
console.log(idProduct);

getArticle();

// Récupération des articles de l'API
function getArticle() {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then(function (res) {
        return res.json();
    })
    .catch((error) => {
        console.log("Erreur de la requête API");
    })

    // Répartition des données de l'API dans le DOM
    .then(function (resultatAPI) {
        const article = resultatAPI;
        console.table(article);

        // Insertion de l'image
        let productImg = document.createElement("img");
        document.querySelector(".item__img").appendChild(productImg);
        productImg.src = article.imageUrl;
        productImg.alt = article.altTxt;

        // Modification du titre "h1"
        let productName = document.getElementById('title');
        productName.innerHTML = article.name;

        // Modification du prix
        let productPrice = document.getElementById('price');
        productPrice.innerHTML = article.price;

        // Modification de la description
        let productDescription = document.getElementById('description');
        productDescription.innerHTML = article.description;

        // Insertion des options de couleurs
        for (let colors of article.colors){
            console.table(colors);
            let productColors = document.createElement("option");
            document.querySelector("#colors").appendChild(productColors);
            productColors.value = colors;
            productColors.innerHTML = colors;
        }
    });
}