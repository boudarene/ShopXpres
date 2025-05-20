// Base de données des produits
const produitsParCategorie = {
    vetement: {
        title: "Collection Vêtements",
        produits: [
            {
                id: 1,
                title: "Levi's Sunset 1-Pocket Standard Shirt Homme (lot de 1)",
                image: "images/sunset.webp",
                rating: "★★★★★",
                ratingCount: "12,845",
                price: "24,99 €",
                delivery: "Livraison GRATUITE mer. 9 avr.",
                badges: ["Offre de printemps","Éco-responsable"]
            },
            {
                id: 2,
                title: "EVAEVA Robe vintage rockabilly pour femme - Mini robe élégante - Robe de Noë",
                image: "images/robe.webp",
                rating: "★★★★☆",
                ratingCount: "3,422",
                price: "39,90 €",
                delivery: "Livraison à 5,99 € demain",
                badges: ["Nouvelle collection"]
            },
            {
                id: 3,
                title: "THE NORTH FACE Quest Zip-in Veste de pluie Homme (lot de 1)",
                image: "images/face.webp",
                rating: "★★★★★",
                ratingCount: "8,763",
                price: "129,95 €",
                delivery: "Livraison GRATUITE ven. 5 avr."
            },
            {
                id: 4,
                title: "ShopXpress Essentials - Pantalon Chino sans Pince Infroissable",
                image: "images/pontalon.webp",
                rating: "★★★★☆",
                ratingCount: "6,912",
                price: "79,50 €",
                delivery: "Livraison GRATUITE mer. 9 avr.",
                badges: ["Offre de printemps","1 caractéristique plus durable","Dernières pièces"]
            },
            {
                id: 5,
                title: "Nike BV6855 - Short De Football - Homme",
                image: "images/short.webp",
                rating: "★★★★★",
                ratingCount: "15,237",
                price: "32,00 €",
                delivery: "Livraison GRATUITE mer. 9 avr."
            },
            {
                id: 6,
                title: "Pull classique à col rond pour homme 100 % laine mérinos Pull chaud à manches longues",
                image: "images/pull.webp",
                rating: "★★★★☆",
                ratingCount: "2,845",
                price: "45,90 €",
                delivery: "Livraison à 4,99 € demain",
                badges: ["1 caractéristique plus durable","Hiver 2025"]
            },
            {
                id: 7,
                title: "COOFANDY à manches longues Chemise en lin pour homme - Col Henley",
                image: "images/chemisel.webp",
                rating: "★★★★☆",
                ratingCount: "9,431",
                price: "29,99 €",
                delivery: "Livraison GRATUITE sam. 6 avr."
            },
            {
                id: 8,
                title: "PUMA Rebound V6 BasketsMixte",
                image: "images/chausseur.webp",
                rating: "★★★★★",
                ratingCount: "7,658",
                price: "54,95 €",
                delivery: "Livraison GRATUITE mer. 9 avr.",
                badges: ["Tendance"]
            }
        ]
    },
    
    cuisine: {
        title: "Équipement de Cuisine",
        produits: [
            {
                id: 1,
                title: "KESSER® Dutch Oven - Ensemble de casseroles en fonte",
                image: "images/marmette.jpg",
                rating: "★★★★★",
                ratingCount: "3,456",
                price: "49,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Offre de printemps", "Meilleure vente"]
            },
            {
                id: 2,
                title: "VINATO Couteau Cuisine, Couteau de Cuisine 14 Pièces avec Aiguiseur ",
                image: "images/couteau.webp",
                rating: "★★★★☆",
                ratingCount: "2,134",
                price: "59,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Haut de gamme"]
            },
            {
                id: 3,
                title: "KB-ELEMENTS Robot Cuiseur 3 en 1, 2500 W, 8,5 l, hachoir à viande, pétrisseur",
                image: "images/robotcuiseur.webp",
                rating: "★★★★★",
                ratingCount: "4,321",
                price: "129,99 €",
                delivery: "Livraison à 5,99 €",
                badges: ["Offre de printemps","Nouveauté"]
            },
            {
                id: 4,
                title: "Daniks Planche Set de 3 Planches à Découper | Bambou Planche a Decouper avec Trous de Suspension",
                image: "images/planche.webp",
                rating: "★★★★☆",
                ratingCount: "1,987",
                price: "24,90 €",
                delivery: "Livraison GRATUITE",
                badges: ["Écologique"]
            },
            {
                id: 5,
                title: "Bonsenkitchen Mixeur Plongeant, 4-en-1 Mixeur Plongeur Multifonction Batteur Mélangeur 1000W",
                image: "images/mixeur.webp",
                rating: "★★★★★",
                ratingCount: "3,210",
                price: "39,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Meilleure vente"]
            },
            {
                id: 6,
                title: "Machine à pain en acier inoxydable, 650 W, entièrement automatique",
                image: "images/pain.webp",
                rating: "★★★★☆",
                ratingCount: "1,543",
                price: "79,99 €",
                delivery: "Livraison à 7,99 €",
                badges: ["Offre spéciale"]
            },
            {
                id: 7,
                title: "SEVERIN - Combinaison de raclette et fondue 1400 W Noir RG 2347",
                image: "images/tefal.webp",
                rating: "★★★★☆",
                ratingCount: "876",
                price: "49,95 €",
                delivery: "Livraison GRATUITE",
                badges: ["Promotion"]
            },
            {
                id: 8,
                title: "WALDWERK Cafetière à expresso (300 ml) - Compatible avec tous les types de plaques de cuisson ",
                image: "images/cafetiria.webp",
                rating: "★★★★★",
                ratingCount: "2,345",
                price: "29,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Classique"]
            }
        ]
    },
    fournitures: {
        title: "Fournitures de Bureau",
        produits: [
            {
                id: 1,
                title: "YPLUS Ensemble de géométrie pour étudiants, rapporteur de mathématiques",
                image: "images/maped.webp",
                rating: "★★★★☆",
                ratingCount: "1,245",
                price: "24,90 €",
                delivery: "Livraison GRATUITE",
                badges: ["1 caractéristique plus durable","Pack économique"]
            },
            {
                id: 2,
                title: "Stylos à Bille Pack de 12 - Couleurs Assorties",
                image: "images/stylo.webp",
                rating: "★★★★★",
                ratingCount: "3,456",
                price: "9,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["1 caractéristique plus durable","Offre de Printemps","Meilleure vente"]
            },
            {
                id: 3,
                title:"Clairefontaine 8570Cpack Lot de 5 Cahiers à Spirale Studium - A5+ 16x21 cm - 160 Pages ",
                image: "images/cahier.webp",
                rating: "★★★★☆",
                ratingCount: "2,134",
                price: "14,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Recyclé"]
            },
            {
                id: 4,
                title: "Calculatrice scientifique avec fonctions graphiques - Plusieurs modes avec interface intuitive",
                image: "images/calculatrice.webp",
                rating: "★★★★★",
                ratingCount: "1,987",
                price: "29,99 €",
                delivery: "Livraison à 4,99 €",
                badges: ["Professionnel"]
            },
            {
                id: 5,
                title: "Esselte - Classeurs à Levier, Capacité 500 Feuilles, Dos de 75 mm, Classeur A4 Léger & Solide, Maison/Bureau",
                image: "images/classeurs.webp",
                rating: "★★★★☆",
                ratingCount: "876",
                price: "19,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Offre de printemps","Durable"]
            },
            {
                id: 6,
                title: "Staedtler 364 WP8 Textsurfer Classic, Surligneurs Fluorescents De Haute Qualité Résistants ",
                image: "images/posca.webp",
                rating: "★★★★★",
                ratingCount: "3,210",
                price: "7,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["1 caractéristique plus durable","Sans toxique"]
            },
            {
                id: 7,
                title: "POPRUN Agenda Professionnel 2025, 22 x 16,5cm EU-25 Couverture Rigide - Avec Boucle de Stylo Amovible",
                image: "images/agenda.webp",
                rating: "★★★★☆",
                ratingCount: "1,543",
                price: "12,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Offre de printemps","Organisation"]
            },
            {
                id: 8,
                title: "Naruto Fourniture Scolaire, Set Papeterie, Trousse, Cahier, Carnet, Crayon, Stylo",
                image: "images/naruto.webp",
                rating: "★★★★★",
                ratingCount: "2,345",
                price: "14,95 €",
                delivery: "Livraison GRATUITE",
                badges: ["Offre de printemps","Design moderne"]
            }
        ]
    },
    immersive: {
        title: "Expérience Immersive",
        produits: [
            {
                id: 1,
                title: "PC de Jeu Haut de Gamme - AMD Ryzen 7 7800X3D",
                image: "images/pcgamer.jpg",
                rating: "★★★★★",
                ratingCount: "5,678",
                price: "1 299,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Meilleure vente", "Performance Extrême"]
            },
            {
                id: 2,
                title: "Casque de réalité virtuelle avec contrôleur",
                image: "images/casque.webp",
                rating: "★★★★☆",
                ratingCount: "3,212",
                price: "349,99 €",
                delivery: "Livraison à 9,99 €",
                badges: ["Offre Spéciale"]
            },
            {
                id: 3,
                title: "Gawfolk Moniteur de jeu incurvé de 32 , 180 Hz, 165 Hz, 144 Hz, Full HD 1080p",
                image: "images/Gawfolk.webp",
                rating: "★★★★★",
                ratingCount: "4,321",
                price: "399,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Technologie QHD"]
            },
            {
                id: 4,
                title: "EMPIRE GAMING - Nouveau 2025 - K248 Clavier Mécanique Gaming Filaire Switches MX Red (FR AZERTY)",
                image: "images/clavier.webp",
                rating: "★★★★☆",
                ratingCount: "2,987",
                price: "89,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Offre de printemps","Réponse rapide"]
            },
            {
                id: 5,
                title: "Newskill EOS Ratón Gaming Professional RGB 16000DPI",
                image: "images/souris.webp",
                rating: "★★★★★",
                ratingCount: "3,456",
                price: "59,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Précision extrême"]
            },
            {
                id: 6,
                title: "Devoko LED Chaise Gaming avec Massage en Cuir PU, Chaise Gamer Ergonomique avec Repose-Pieds ",
                image: "images/fet.webp",
                rating: "★★★★☆",
                ratingCount: "1,543",
                price: "249,99 €",
                delivery: "Livraison à 19,99 €",
                badges: ["Confort optimal"]
            },
            {
                id: 7,
                title: "FIFINE Table de mixage audio pour PC, RVB, interface microphone XLR, contrôle individue",
                image: "images/table.webp",
                rating: "★★★★★",
                ratingCount: "876",
                price: "499,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Offre de printemps","Haute fidélité"]
            },
            {
                id: 8,
                title: "LEICKE Enceinte Bluetooth Portable Étanche Haut Parleur de Douche sans Fil Haute stéréo LED Lumière Ventouse puissante",
                image: "images/baf.webp",
                rating: "★★★★☆",
                ratingCount: "2,134",
                price: "179,99 €",
                delivery: "Livraison GRATUITE",
                badges: ["Son immersif"]
            }
        ]
    }
};

// ... (le reste du code inchangé)

function genererBadges(badges) {
    if (!badges) return '';
    return badges.map(badge => {
        if (badge.includes("Offre") || badge.includes("Promo")) {
            return `<div class="promo-badge">${badge}</div>`;
        } else if (badge.includes("durable") || badge.includes("écolo")) {
            return `<div class="eco-badge">${badge}</div>`;
        } else {
            return `<div class="popularity-badge">${badge}</div>`;
        }
    }).join('');
}

function chargerProduits() {
    const urlParams = new URLSearchParams(window.location.search);
    const categorie = urlParams.get('category') || 'vetement';
    
    if (!produitsParCategorie[categorie]) {
        document.getElementById('products-list').innerHTML = `
            <div class="alert alert-warning w-100">
                Catégorie non trouvée
            </div>
        `;
        return;
    }

    document.title = `ShopXpress - ${produitsParCategorie[categorie].title}`;
    document.getElementById('category-title').textContent = produitsParCategorie[categorie].title;

    const container = document.getElementById('products-list');
    container.innerHTML = '';

    produitsParCategorie[categorie].produits.forEach(produit => {
        const cardHTML = `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${produit.image}" alt="${produit.title}" class="product-image">
                </div>
                <div class="product-details">
                    <div class="product-title">${produit.title}</div>
                    <div class="rating">${produit.rating} <span class="rating-count">${produit.ratingCount}</span></div>
                    ${genererBadges(produit.badges)}
                    <div class="price">${produit.price}</div>
                    <div class="delivery-info">${produit.delivery}</div>
                    <button class="add-to-cart">Ajouter au panier</button>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

document.addEventListener('DOMContentLoaded', chargerProduits);

// Gestion du panier
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
        const productCard = e.target.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        alert(`${productTitle} a été ajouté à votre panier !`);
    }
});
function chargerProduits() {
    const urlParams = new URLSearchParams(window.location.search);
    const categorie = urlParams.get('category') || 'vetement';
    
    if (!produitsParCategorie[categorie]) {
        document.getElementById('products-list').innerHTML = `
            <div class="alert alert-warning w-100">
                Catégorie non trouvée
            </div>
        `;
        return;
    }

    document.title = `ShopXpress - ${produitsParCategorie[categorie].title}`;
    document.getElementById('category-title').textContent = produitsParCategorie[categorie].title;

    const container = document.getElementById('products-list');
    container.innerHTML = '';

    produitsParCategorie[categorie].produits.forEach(produit => {
        const cardHTML = `
            <div class="product-card">
                <div class="product-image-container">
                    <img src="${produit.image}" alt="${produit.title}" class="product-image">
                </div>
                <div class="product-details">
                    <div class="product-title">${produit.title}</div>
                    <div class="rating">${produit.rating} <span class="rating-count">${produit.ratingCount}</span></div>
                    ${genererBadges(produit.badges)}
                    <div class="price">${produit.price}</div>
                    <div class="delivery-info">${produit.delivery}</div>
                    <button class="add-to-cart">Ajouter au panier</button>
                    <button class="buy-now">Acheter cet article</button>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}











///////////
///////////////////////////////

// Après avoir généré les cartes produits, ajoute un écouteur pour les boutons "Acheter cet article"
document.addEventListener("DOMContentLoaded", function() {
    // Attendre que toutes les cartes produits soient générées
    // Ici, on suppose que chaque carte produit contient un bouton avec la classe "buy-now"
    const buyNowButtons = document.querySelectorAll('.buy-now');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Récupérer la carte produit parente
            const card = this.closest('.product-card');

            // Vérifier que la carte possède bien les éléments attendus
            const titleElement = card.querySelector('.product-title');
            const priceElement = card.querySelector('.price');
            const imageElement = card.querySelector('img');
            const deliveryElement = card.querySelector('.delivery-info');

            // Créer un objet produit avec les informations récupérées
            const produitAchete = {
                title: titleElement ? titleElement.textContent : "",
                price: priceElement ? priceElement.textContent : "",
                image: imageElement ? imageElement.src : "",
                delivery: deliveryElement ? deliveryElement.textContent : ""
            };

            // Stocker l'objet dans localStorage
            localStorage.setItem('produitAchete', JSON.stringify(produitAchete));

            // Rediriger vers formulaire.html
            window.location.href = "formulaire.html";
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Gestion des options de paiement
    const paymentOptions = document.querySelectorAll('.payment-option input[type="radio"]');
    
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Masquer tous les contenus d'options
            document.querySelectorAll('.payment-option-content').forEach(content => {
                content.style.display = 'none';
            });
            
            // Afficher le contenu de l'option sélectionnée
            if (this.checked) {
                this.closest('.payment-option').querySelector('.payment-option-content').style.display = 'block';
            }
        });
    });
    
    // Afficher le contenu de l'option sélectionnée par défaut
    document.querySelector('.payment-option input[type="radio"]:checked')
        .closest('.payment-option')
        .querySelector('.payment-option-content')
        .style.display = 'block';
});