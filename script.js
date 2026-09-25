const productsContainer =
    document.getElementById("productsContainer");


const searchInput =
    document.getElementById("searchInput");


const searchBtn =
    document.getElementById("searchBtn");


const cartCount =
    document.getElementById("cartCount");


const menuBtn =
    document.getElementById("menuBtn");


const closeBtn =
    document.getElementById("closeBtn");


const navLinks =
    document.getElementById("navLinks");


const welcomeText =
    document.getElementById("welcomeText");


let cart = 0;



const products = [

    {
        id: 1,

        title: "Lipstick",

        price: "15",

        image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80"
    },


    {
        id: 2,

        title: "Makeup Brush",

        price: "12",

        image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80"
    },


    {
        id: 3,

        title: "Eyeshadow",

        price: "25",

        image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
    },


    {
        id: 4,

        title: "Foundation",

        price: "30",

        image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80"
    },


    {
        id: 5,

        title: "Perfume",

        price: "40",

        image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80"
    },


    {
        id: 6,

        title: "Face Powder",

        price: "20",

        image:
        "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=600&q=80"
    }

];



function displayProducts(data) {

    productsContainer.innerHTML = "";


    if (data.length === 0) {

        productsContainer.innerHTML =
            "Sorry, product not found.";

        productsContainer.classList.add("sorry");

        return;
    }


    productsContainer.classList.remove("sorry");


    data.forEach(function(product) {

        productsContainer.innerHTML += `

            <div class="card">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >


                <div class="card-content">

                    <h3>
                        ${product.title}
                    </h3>


                    <p class="price">
                        $${product.price}
                    </p>


                    <button
                        class="add-btn"
                        onclick="addToCart()"
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        `;

    });

}



function searchProducts() {

    const searchValue =
        searchInput.value.toLowerCase();


    const result =
        products.filter(function(product) {

            return product.title
                .toLowerCase()
                .includes(searchValue);

        });


    displayProducts(result);

}



function addToCart() {

    cart++;

    cartCount.innerHTML = cart;

}



menuBtn.addEventListener(
    "click",
    function() {

        navLinks.classList.add("show");

    }
);



closeBtn.addEventListener(
    "click",
    function() {

        navLinks.classList.remove("show");

    }
);



searchBtn.addEventListener(
    "click",
    searchProducts
);



searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            searchProducts();

        }

    }
);



window.addEventListener(
    "load",
    function() {

        displayProducts(products);


        const name =
            localStorage.getItem("userName");


        if (name) {

            welcomeText.innerHTML =
                "Welcome " + name + " 💄";

        }

    }
);