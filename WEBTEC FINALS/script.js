const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = []; // Array to store cart items

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            name: button.parentElement.querySelector('h2').textContent,
            // Add other product details like price, image, etc.
        };

        // Add product to cart array
        cartItems.push(product);

        // Update cart counter (example)
        const cartCounter = document.getElementById('cart-counter'); // Assuming you have a cart counter element
        cartCounter.textContent = cartItems.length;

        // Display a success message (example)
        alert(`${product.name} added to cart!`);

        // You can also:
        // - Update a cart display on the page
        // - Save cart items to local storage
        // - Send a request to a server-side cart
    });
});