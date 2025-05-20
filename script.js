
const musique = document.getElementById("background-music");
const notification = document.getElementById("notification-sound");
const bienvenue = document.getElementById("welcome-sound");

document.getElementById("play-music").addEventListener("click", () => musique.play());
document.getElementById("pause-music").addEventListener("click", () => musique.pause());
document.addEventListener("DOMContentLoaded", () => bienvenue.play());
document.querySelector(".panier").addEventListener("click", () => notification.play());


document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "https://m.media-amazon.com/images/I/81ljXMW0qIL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/71pJnJQGl3L._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/81+sHWOk3yL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/713UTo67XSL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/61A-FJoXloL._SX3000_.jpg", 
        "https://m.media-amazon.com/images/I/61AnASun+qL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/613bDAW3ffL._SX3000_.jpg",
        "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
    ];

    let index = 0;
    const bannerImg = document.getElementById("banner-img");

    function changerImage() {
        index = (index + 1) % images.length;
        bannerImg.src = images[index];
    }

    setInterval(changerImage, 3000);
});


document.addEventListener("DOMContentLoaded", function() {
    const livraisonBtn = document.querySelector(".livraison");
    const popup = document.getElementById("popup-livraison");
    const closeBtns = document.querySelectorAll(".close, #close-popup");
    const detectLocation = document.getElementById("detect-location");
    const currentLocation = document.getElementById("current-location");

    
    livraisonBtn?.addEventListener("click", () => popup.style.display = "flex");
    closeBtns.forEach(btn => btn.addEventListener("click", () => popup.style.display = "none"));
    window.addEventListener("click", (e) => e.target === popup && (popup.style.display = "none"));

   
    detectLocation?.addEventListener("click", () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
                        const data = await response.json();
                        
                        const ville = data.address?.city || data.address?.town || "";
                        const wilaya = data.address?.county || "";
                        currentLocation.textContent = [ville, wilaya, data.address?.country].filter(Boolean).join(", ");
                    } catch {
                        currentLocation.textContent = "Localisation non trouvée";
                    }
                },
                () => currentLocation.textContent = "Localisation refusée"
            );
        } else {
            currentLocation.textContent = "Géolocalisation non supportée";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    
    const usersDatabase = [
        { email: "prof@ecole.com", password: "motdepasseprof", name: "Madame Dupont" },
        { email: "eleve@ecole.com", password: "motdepasseeleve", name: "Élève Test" },
        { email: "iboudarene82@gmail.com", password: "123456", name: "Islam" }
    ];

    
    document.getElementById("loginBtn")?.addEventListener("click", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const user = usersDatabase.find(u => u.email === email && u.password === password);

        if (user) {
            document.getElementById("username-display").textContent = user.name;
            document.getElementById("user-greeting").style.display = "block";
            document.getElementById("login-prompt").style.display = "none";
            localStorage.setItem("currentUser", JSON.stringify(user));
            closeLoginModal();
            alert(`Bienvenue ${user.name} !`);
        } else {
            alert("Identifiants incorrects");
        }
    });

    
    document.getElementById("logoutBtn")?.addEventListener("click", function(e) {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        document.getElementById("user-greeting").style.display = "none";
        document.getElementById("login-prompt").style.display = "block";
    });

    
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
        const user = JSON.parse(savedUser);
        document.getElementById("username-display").textContent = user.name;
        document.getElementById("user-greeting").style.display = "block";
        document.getElementById("login-prompt").style.display = "none";
    }
});


function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    document.querySelector('.dropdown-content').style.display = 'none';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        closeLoginModal();
    }
}


function search() {
    const searchText = document.getElementById("searchInput").value.trim();
    if (!searchText) {
        alert("Veuillez entrer une recherche");
    } else {
        alert(`Recherche: ${searchText}`);
    }
}
   

const clickSound = document.getElementById("notification-sound");


function playClickSound() {
    clickSound.currentTime = 0; 
    clickSound.play();
}


document.querySelectorAll("button, .product-card").forEach(element => {
    element.addEventListener("click", playClickSound);
});





let verificationCode = "";
let userEmail = "";


function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}

function goBackToRegisterStep1() {
    document.getElementById('registerStep1').classList.add('active');
    document.getElementById('registerStep2').classList.remove('active');
}


document.getElementById('continueRegisterBtn').addEventListener('click', function() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const passwordConfirm = document.getElementById('register-password-confirm').value;
    
   
    if (!name || !email || !password || !passwordConfirm) {
        alert('Veuillez remplir tous les champs');
        return;
    }
    
    if (password !== passwordConfirm) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }
    
    if (password.length < 6) {
        alert('Le mot de passe doit contenir au moins 6 caractères');
        return;
    }
    
    
    userEmail = email;
    verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); 
    
    
    document.getElementById('display-register-email').textContent = email;
    document.getElementById('registerStep1').classList.remove('active');
    document.getElementById('registerStep2').classList.add('active');
    
   
    console.log(`Code de vérification pour ${email}: ${verificationCode}`);
    alert(`( le code de vérification est: ${verificationCode})`);
});


document.getElementById('verifyCodeBtn').addEventListener('click', function() {
    const enteredCode = document.getElementById('verification-code').value;
    
    if (enteredCode === verificationCode) {
        alert('Compte créé avec succès ! Redirection...');
        
        closeRegisterModal();
        
        document.getElementById('account-button').innerHTML = `Bonjour<br><strong>Compte et listes ▼</strong>`;
    } else {
        alert('Code incorrect. Veuillez réessayer.');
    }
});


function resendVerificationCode() {
    if (!userEmail) return;
    
    
    verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log(`Nouveau code pour ${userEmail}: ${verificationCode}`);
    alert(`( le nouveau code est: ${verificationCode})`);
}


document.querySelector('.dropdown-content p a').addEventListener('click', function(e) {
    e.preventDefault();
    closeLoginModal();
    openRegisterModal();
});



function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'block';
}


function closeRegisterModal() {
    document.getElementById('registerModal').style.display = 'none';
}


window.onclick = function(event) {
    if (event.target == document.getElementById('registerModal')) {
        closeRegisterModal();
    }
}


function handleRegistration() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    
    if(name && email && password) {
        
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        
       
        window.location.href = 'dashboard.html';
    } else {
        alert('Veuillez remplir tous les champs');
    }
}


if(window.location.pathname.includes('dashboard.html')) {
    const userName = localStorage.getItem('userName');
    if(userName) {
        document.getElementById('account-button').innerHTML = `
            Bonjour ${userName}<br>
            <strong>Compte et listes ▼</strong>
        `;
    } else {
        
        window.location.href = 'web.html';
    }
}

document.getElementById('logoutBtn')?.addEventListener('click', function() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    window.location.href = 'web.html';
});



document.getElementById('verifyCodeBtn').addEventListener('click', function() {
    const enteredCode = document.getElementById('verification-code').value;
    const userName = document.getElementById('register-name').value; 
    if (enteredCode === verificationCode) {
        
        localStorage.setItem('userName', userName);
        localStorage.setItem('userEmail', userEmail);
        
        
        closeRegisterModal();
        
        
        window.location.href = 'dashboard.html';
    } else {
        alert('Code incorrect. Veuillez réessayer.');
    }
});