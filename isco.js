document.addEventListener("DOMContentLoaded", function () {
    console.log("ShopXpress prêt !");

    // Exemple : Mettre à jour le nombre d'articles dans le panier
    let panierBadge = document.querySelector(".panier .badge");
    let nombreArticles = 0; // Exemple : simulateur d'ajout au panier
    panierBadge.textContent = nombreArticles;

    // Charger la langue sauvegardée
    const langueSauvegardee = localStorage.getItem("langue") || "fr";
    changerLangue(langueSauvegardee);

    // Mettre à jour le sélecteur de langue
    const selectLangue = document.getElementById("select-langue");
    if (selectLangue) {
        selectLangue.value = langueSauvegardee;
    }
});

const traductions = {
    fr: {
        deliver_to: "Livrer à",
        hello: "Bonjour, connectez-vous",
        account_list: "Compte et listes ▼",
        returns: "Retours",
        orders: "et commandes",
        cart: "Panier"
    },
    en: {
        deliver_to: "Deliver to",
        hello: "Hello, sign in",
        account_list: "Account & Lists ▼",
        returns: "Returns",
        orders: "and orders",
        cart: "Cart"
    },
    ar: {
        deliver_to: "التوصيل إلى",
        hello: "مرحبًا، قم بتسجيل الدخول",
        account_list: "الحساب والقوائم ▼",
        returns: "المرتجعات",
        orders: "والطلبات",
        cart: "عربة التسوق"
    }
};

function changerLangue(langue) {
    localStorage.setItem("langue", langue);
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (traductions[langue] && traductions[langue][key]) {
            element.textContent = traductions[langue][key];
        }
    });

    // Changer l'image du drapeau
    const drapeau = document.getElementById("drapeau");
    if (drapeau) {
        if (langue === "fr") {
            drapeau.src = "logo/france.png";
        } else if (langue === "en") {
            drapeau.src = "logo/anglais.svg";
        } else if (langue === "ar") {
            drapeau.src = "logo/Flag.svg";
        }
    }
}
// Gestion du formulaire en deux étapes
document.getElementById('continueBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    if(email) {
        document.getElementById('step1').classList.remove('active');
        document.getElementById('step2').classList.add('active');
        document.getElementById('display-email').innerHTML = email + ' <span class="change-email" onclick="goBackToStep1()">Modifier</span>';
    }
});

function goBackToStep1() {
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step1').classList.add('active');
}
document.getElementById("loginBtn").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Simuler une authentification réussie
    if (email === "iboudarene82@gmail.com" && password === "123456") {
        alert("Connexion réussie !");
        window.location.href = "dashboard.html"; // Redirection vers une autre page
    } else {
        alert("Email ou mot de passe incorrect !");
    }
});
document.getElementById("loginBtn").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    fetch("login.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data.includes("Connexion réussie")) {
            window.location.href = "dashboard.html";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne les éléments nécessaires
    const loginBtn = document.getElementById("loginBtn");
    const emailInput = document.getElementById("email");
    const accountButton = document.getElementById("account-button");

    // Écoute le clic sur le bouton de connexion
    loginBtn.addEventListener("click", function () {
        const email = emailInput.value.trim(); // Récupère l'email entré par l'utilisateur

        if (email) {
            const username = email.split("@")[0]; // Extrait le nom avant le @
            accountButton.innerHTML = `Bonjour ${username}<br><strong>Compte et listes ▼</strong>`;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const emailInput = document.getElementById("email");
    const accountButton = document.getElementById("account-button");

    // Vérification que les éléments existent avant d'ajouter des événements
    if (loginBtn && emailInput && accountButton) {
        // Exemple d'événement pour le bouton de connexion
        loginBtn.addEventListener("click", function(e) {
            e.preventDefault();
            const email = emailInput.value;
            
            if (email) {
                console.log("Tentative de connexion avec:", email);
                // Ici vous ajouteriez votre logique de connexion
            } else {
                alert("Veuillez entrer votre email");
            }
        });

        // Exemple pour le bouton du compte
        accountButton.addEventListener("click", function() {
            console.log("Bouton compte cliqué");
            // Ici vous ajouteriez la logique pour afficher le menu déroulant
        });
    } else {
        console.error("Un ou plusieurs éléments n'ont pas été trouvés dans le DOM");
    }
}); // <-- Ici on ferme la fonction DOMContentLoaded

document.getElementById("loginBtn").addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Simuler une authentification réussie
    if (email === "iboudarene82@gmail.com" && password === "123456") {
        alert("Connexion réussie !");
        localStorage.setItem("emailUtilisateur", email); // Stocke l'email
        window.location.href = "dashboard.html"; // Redirection vers le dashboard
    } else {
        alert("Email ou mot de passe incorrect !");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const accountButton = document.getElementById("account-button");
    const emailStocke = localStorage.getItem("emailUtilisateur");

    if (emailStocke) {
        const username = emailStocke.split("@")[0]; // Récupère la partie avant "@"
        accountButton.innerHTML = `Bonjour ${username}<br><strong>Compte et listes ▼</strong>`;
    }
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("ShopXpress prêt !");
    
    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const accountButton = document.getElementById("account-button");
    
    // Vérifier si l'utilisateur est connecté
    const emailStocke = localStorage.getItem("emailUtilisateur");
    
    if (emailStocke) {
        const username = emailStocke.split("@")[0]; 
        if (accountButton) {
            accountButton.innerHTML = `Bonjour ${username}<br><strong>Compte et listes ▼</strong>`;
        }
        if (logoutBtn) logoutBtn.style.display = "block"; // Afficher bouton déconnexion
    } else {
        if (logoutBtn) logoutBtn.style.display = "none"; // Cacher bouton déconnexion
    }

    // Gestion de la connexion
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            let email = emailInput.value.trim();
            let password = passwordInput.value.trim();

            if (email === "" || password === "") {
                alert("Veuillez remplir tous les champs.");
                return;
            }

            if (email === "iboudarene82@gmail.com" && password === "123456") {
                alert("Connexion réussie !");
                localStorage.setItem("emailUtilisateur", email);
                window.location.href = "dashboard.html";

            } else {
                alert("Email ou mot de passe incorrect !");
            }
        });
    }

    // Gestion de la déconnexion
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
                localStorage.removeItem("emailUtilisateur");
                window.location.href = "web.html"; // Retour à la page d'accueil
            }
        });
    }
});






