const productsData = [
    {
        id: 1,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-2-270x300.jpg",
        title: "American Marigold",
        price: 23
    },
    {
        id: 2,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-3-270x300.jpg",
        title: "Black Eyed Susan",
        price: 25
    },
    {
        id: 3,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-5-270x300.jpg",
        title: "Bleeding Heart",
        price: 30
    },
    {
        id: 4,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-7-270x300.jpg",
        title: "Bloody Cranesbill",
        price: 45
    },
    {
        id: 5,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-8-270x300.jpg",
        title: "Butterfly Weed",
        price: 50
    },
    {
        id: 6,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-6-270x300.jpg",
        title: "Common Yarrow",
        price: 65
    },
    {
        id: 7,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-1-270x300.jpg",
        title: "Doublefile Viburnum",
        price: 67
    },
    {
        id: 8,
        image: "https://htmldemo.net/pronia/pronia/assets/images/product/medium-size/1-8-270x300.jpg",
        title: "Feather Reed Grass",
        price: 20
    },
];

const productMain = document.querySelector("#product-main");

productsData.forEach(product => {
    const productCard = createProductCard(product);
    productMain.appendChild(productCard);
});

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="product-basket">
            <i class="fa-regular fa-heart" style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;"></i>
            <i class="fa-regular fa-eye" style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;"></i>
            <i style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;" class="fas fa-cart-shopping add-to-basket" data-product-id="${product.id}"></i>
        </div>
        <div class="product-info">
            <a href="#">${product.title}</a>
            <span>$${product.price}.00</span>
            <div class="star">
                <i class="fas fa-star" style="color: #ffe24d;"></i>
                <i class="fas fa-star" style="color: #ffe24d;"></i>
                <i class="fas fa-star" style="color: #ffe24d;"></i>
                <i class="fas fa-star" style="color: #ffe24d;"></i>
                <i class="fas fa-star" style="color: #ffe24d;"></i>
            </div>
        </div>`;

    const addToBasketButton = productCard.querySelector(".add-to-basket");
    addToBasketButton.addEventListener("click", () => {
        const productId = parseInt(addToBasketButton.getAttribute("data-product-id"));
        const product = productsData.find(product => product.id === productId);

        if (product) {
            basket.push(product);
            console.log(`${product.title} added to the basket.`);
        } else {
            console.log(`Product with ID ${productId} not found.`);
        }

        console.log("Basket:", basket);
        console.log("Total Price: $" + calculateTotalPrice());
    });

    return productCard;
}

const basket = [];

function calculateTotalPrice() {
    const totalPrice = basket.reduce((total, product) => total + product.price, 0);
    return totalPrice;
}

////////////////////////////////////////////

const newProductsMain = document.querySelector("#new-products-main");

productsData.slice(0, 4).forEach(product => {
    const newproductCard = createProductCard(product);
    newProductsMain.appendChild(newproductCard);
});

function createProductCard(product) {
    const newproductCard = document.createElement('div');
    newproductCard.classList.add('product-card');
    newproductCard.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="product-basket">
            <i class="fa-regular fa-heart" style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;"></i>
            <i class="fa-regular fa-eye" style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;"></i>
            <i style="color: #000000; width: 30px; height: 30px; background-color: #fff; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; padding: 7px;" class="fas fa-cart-shopping add-to-basket" data-product-id="${product.id}"></i>
        </div>
        <div class="product-info">
            <a href="#">${product.title}</a>
            <span>$${product.price}.00</span>
            <div class="star">
                <i class="fas fa-star" style="color: #ffe24d;"></i>
                <i class="fas fa-star" style="color: #ffe24d;"></i>
                <i class="fas fa-star" style="color: #ffe24d;"></i>
                <i class="fas fa-star" style="color: #ffe24d;"></i>
                <i class="fas fa-star" style="color: #ffe24d;"></i>
            </div>
        </div>`;

        const addToBasketButton = newproductCard.querySelector(".add-to-basket");
        addToBasketButton.addEventListener("click", () => {
            const productId = parseInt(addToBasketButton.getAttribute("data-product-id"));
            const product = productsData.find(product => product.id === productId);

            if (product) {
                newbasket.push(product);
                console.log(`${product.title} added to the basket.`);
            } else {
                console.log(`Product with ID ${productId} not found.`);
            }

            console.log("Basket:", newbasket);
            console.log("Total Price: $" + calculateTotalPrice());
        });

        return newproductCard;
    }

const newbasket = [];

function calculateTotalPrice() {
    const totalPrice = newbasket.reduce((total, product) => total + product.price, 0);
    return totalPrice;
}  

let shopx = document.getElementById("shopx")
let shoppingcart = document.getElementById("shoppingcart")
let shoppingopen = document.getElementById("shoppingopen")


shoppingopen.addEventListener("click",function(){
    shoppingcart.classList.add("active")
})
shopx.addEventListener("click",function(){
    shoppingcart.classList.remove("active")
})




///////////////////////////////////////////

const basketBtn = document.querySelector("#basket");
