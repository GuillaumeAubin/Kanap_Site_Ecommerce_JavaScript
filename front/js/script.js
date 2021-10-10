getArticles();

// Récupération des articles de l'API
function getArticles() {
    fetch("http://localhost:3000/api/products")
    .then(function (res) {
        return res.json();
    })
    .catch((error) => {
        let items = document.querySelector("#items");
        items.innerHTML = `Accès à l'API impossible, veuillez réessayer ultérieurement.<br><br>Ou alors j'ai juste oublié de lancer "node server" sur le Terminal du back...`;
    })

    // Répartition des données de l'API dans le DOM
    .then(function (resultatAPI) {
        const articles = resultatAPI;
        console.table(articles);
        for (let article in articles) {

            // Insertion de l'élément "a"
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${resultatAPI[article]._id}`;

            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);

            // Insertion de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = resultatAPI[article].imageUrl;
            productImg.alt = resultatAPI[article].altTxt;

            // Insertion du titre "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = resultatAPI[article].name;

            // Insertion de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = resultatAPI[article].description;
        }
    });
}