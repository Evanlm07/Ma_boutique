// Données des produits
const products = [
    {
        id: 1,
        name: "T-Shirt Essential",
        price: 39.99,
        image: "images/produits/t-shirt1.jpg",
        category: "homme",
        new: true
    },
    {
        id: 2,
        name: "Jean Slim Noir",
        price: 89.99,
        image: "images/produits/jean1.jpg",
        category: "homme",
        new: true
    },
    {
        id: 3,
        name: "Robe Élégante",
        price: 129.99,
        image: "images/produits/robe1.jpg",
        category: "femme",
        new: true
    },
    {
        id: 4,
        name: "Sweat-shirt Oversize",
        price: 69.99,
        image: "images/produits/sweat1.jpg",
        category: "femme",
        new: false
    }
];

// Afficher les nouveaux produits
function displayNewProducts() {
    const container = document.getElementById('new-products');
    if (!container) return;
    
    const newProducts = products.filter(p => p.new);
    
    container.innerHTML = newProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">${product.price.toFixed(2)}€</p>
                <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                    Ajouter au panier
                </button>
            </div>
        </div>
    `).join('');
}

// Initialiser
document.addEventListener('DOMContentLoaded', () => {
    displayNewProducts();
});
