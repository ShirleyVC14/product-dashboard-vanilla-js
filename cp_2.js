// Step 3: Fetching and Logging Products with .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name); // fixed field access
            });
        })
        .catch(error => console.error("Error fetching products:", error));
}

// Step 4: Async/Await
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Step 5: Display Products
function displayProducts(products) {
    const container = document.getElementById("product-container");

    // Clear previous products
    container.innerHTML = "";

    // Display first 5 products
    products.slice(0, 5).forEach(product => {
        const { name, price, image } = product.fields;

        const card = document.createElement("div");
        card.classList.add("product");

        card.innerHTML = `
            <img src="${image[0].url}" alt="${name}">
            <h3>${name}</h3>
            <p>$${(price / 100).toFixed(2)}</p>
        `;

        container.appendChild(card);
    });
}

// Step 6: Error Handling
function handleError(error) {
    console.error(`An error occurred: ${error.message}`);
}

// Step 7: Call both functions
fetchProductsThen();
fetchProductsAsync();