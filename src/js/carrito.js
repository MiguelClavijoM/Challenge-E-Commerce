let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Abrir carrito
cartIcon.onclick = () => {
  cart.classList.add("active");
};

//Cerrar carrito
closeCart.onclick = () => {
  cart.classList.remove("active");
};

//Eliminar producto del carrito
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //Cambios realizados
  let quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
}

//Agregar al carrito
let addCart = document.getElementsByClassName("add-cart")
for (let i = 0; i < addCart.length; i++){
    let button = addCart[i]
    button.addEventListener('click', addCartClicked);

}

//Click para eliminar
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

//Comprar minimo 1
function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

//Agregar al carrito 2
function addCartClicked(event){
    let button = event.target
    let shopProducts = button.parentElement
    let shopProductsParent = shopProducts.parentElement
    let title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    let price = shopProducts.getElementsByClassName("price")[0].innerText;
    let productImg = shopProductsParent.getElementsByClassName("product-img")[0].src;
    console.log(title, price);
    console.log(productImg)

    addProductToCart(title, price, productImg);
    updatetotal();
}


function addProductToCart(title, price, productImg){
    let cartShopBox = document.createElement('div')
    // cartShopBox.classList.add("cart-box")
    let cartItems = document.getElementsByClassName("cart-content")[0]
    let cartItemsNames = cartItems.getElementsByClassName("cart-product-title")
    for (let i = 0; i < cartItemsNames.length; i++){
        alert("Ya has agregado este producto al carrito.")
    }

}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    alert("Ya has agregado este producto al carrito.");
    return;
  }
}

let cartBoxContent = `
                      <img src="./src/img/white-label.jpg" alt="" class="cart-img">
                      <div class="detail-box">
                          <div class="cart-product-title">Whithe Label</div>
                          <div class="cart-price">$30500</div>
                          <input type="number" value="1" class="cart-quantity">
                      </div>  
                      <i class='bx bxs-trash-alt cart-remove'></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
.getElementsByClassName("cart-remove")[0]
.addEventListener("click", removeCartItem);
cartShopBox
.getElementsByClassName("cart-quantity")[0]
.addEventListener("change", quantityChanged);


//Actualizar el precio total
function updatetotal() {
  let cartContent = document.getElementsByClassName("cart-content")[0];
  let cartBoxes = cartContent.getElementsByClassName("cart-box");
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    let cartBox = cartBoxes[i];
    let priceElement = cartBox.getElementsByClassName("cart-price")[0];
    let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}
