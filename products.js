// Données des produits
const products = [
    {
        id: 1,
        name: "T-Shirt Essential Noir",
        price: 39.99,
        oldPrice: 59.99,
        image: "images/produit1.jpg",
        category: "homme",
        description: "T-shirt 100% coton, coupe regular. Le basique parfait pour toutes les occasions.",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Noir", "Blanc", "Gris"]
    },
    {
        id: 2,
        name: "Sweat à Capuche Gris",
        price: 79.99,
        oldPrice: 99.99,
        image: "images/produit2.jpg",
        category: "homme",
        description: "Sweat-shirt en coton premium, parfait pour un style décontracté et élégant.",
        sizes: ["M", "L", "XL"],
        colors: ["Gris", "Noir"]
    },
    {
        id: 3,
        name: "Robe Élégante",
        price: 89.99,
        oldPrice: 119.99,
        image: "images/produit3.jpg",
        category: "femme",
        description: "Robe midi en tissu fluide, idéale pour les occasions spéciales.",
        sizes: ["XS", "S", "M"],
        colors: ["Noir", "Bordeaux", "Bleu nuit"]
    },
    {
        id: 4,
        name: "Veste en Jean",
        price: 99.99,
        oldPrice: 129.99,
        image: "images/produit4.jpg",
        category: "femme",
        description: "Veste en denim premium, coupe ajustée pour un look moderne.",
        sizes: ["S", "M", "L"],
        colors: ["Bleu clair", "Bleu foncé"]
    },
    {
        id: 5,
        name: "Pantalon Chino",
        price: 69.99,
        oldPrice: 89.99,
        image: "images/produit5.jpg",
        category: "homme",
        description: "Pantalon chino en coton stretch, confort et élégance.",
        sizes: ["30", "32", "34", "36"],
        colors: ["Beige", "Marron", "Bleu marine"]
    },
    {
        id: 6,
        name: "Pull Cashmere",
        price: 129.99,
        oldPrice: 169.99,
        image: "images/produit6.jpg",
        category: "femme",
        description: "Pull en cashmere 100%, douceur et chaleur exceptionnelles.",
        sizes: ["XS", "S", "M"],
        colors: ["Crème", "Gris", "Rose poudré"]
    }
];

// Afficher les nouveaux produits sur la page d'accueil
function displayNewProducts() {
    const container = document.getElementById('new-products');
    if (!container) return;
    
    // Prendre les 4 premiers produits comme nouveautés
    const newProducts = products.slice(0, 4);
    
    container.innerHTML = newProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <div class="price">
                <span class="old-price">€${product.oldPrice}</span>
                <span>€${product.price}</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price}, '${product.image}')">
                Ajouter au panier
            </button>
        </div>
    `).join('');
}

// Initialiser l'affichage des produits
document.addEventListener('DOMContentLoaded', displayNewProducts);

// Fonction pour rechercher des produits
function searchProducts(query) {
    return products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
}

// Exporter les données pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, displayNewProducts, searchProducts };
}
