// Gestion du panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Mettre à jour le compteur du panier
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = count;
    });
}

// Ajouter un produit au panier
function addToCart(productId, productName, price, image) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Afficher une notification
    alert('Produit ajouté au panier !');
    
    // Rediriger vers le panier après 1 seconde
    setTimeout(() => {
        window.location.href = 'pagespanier.html';
    }, 1000);
}

// Initialiser le compteur du panier au chargement
document.addEventListener('DOMContentLoaded', updateCartCount);

// Menu mobile
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
}

// Gestion des filtres
function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Vider le panier
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (document.getElementById('cart-items')) {
        document.getElementById('cart-items').innerHTML = '<p style="text-align: center; color: #666;">Votre panier est vide</p>';
        document.getElementById('cart-summary').style.display = 'none';
    }
}

// Validation formulaire contact
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            if (name && email && message) {
                alert('Message envoyé avec succès !');
                form.reset();
            } else {
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    }
}

// Initialiser les formulaires
document.addEventListener('DOMContentLoaded', () => {
    validateForm('contactForm');
});
