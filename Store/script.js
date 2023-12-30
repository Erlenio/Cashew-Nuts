//Cart Logic
var openCart = document.querySelector("#open-cart");
var cartMenu = document.querySelector(".cart");
var closeCart = document.querySelector("#close-cart");
openCart.onclick = closeCart.onclick = () => {
  cartMenu.classList.toggle("active");
}

let cartContent = document.getElementsByClassName("cart-content");
if (cartContent.length == 0) {
  document.querySelector(".empty-cart").style.display = "flex";
}

//Header Buttons
let userIC = document.querySelector("#user");
let header = document.querySelector("header");

let toast = document.querySelector(".toast");
let closeToast = document.querySelector(".close-toast");

userIC.onclick = () => {
    showUpToast("Succes", "Loged with succes");
};

/*
//upload image profile
let imageprf = document.querySelector(".img-prf-reg");
let inputImg = document.querySelector(".pick-img");

inputImg.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    fullUrl = reader.result;
    imageprf.src = fullUrl;
  });
  reader.readAsDataURL(inputImg.files[0]);
});
*/

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready();
}


function ready() {

  //Remove Item
  updateTotal();
  var removeButton = document.getElementsByClassName('remove-cart');
  console.log(removeButton);
  for (var i = 0; i < removeButton.length; i++) {
    var button = removeButton[i];
    button.addEventListener('click', removeItem);
  }
  

  //quantity changes
  var buttons = document.getElementsByClassName('buttons');
  console.log(buttons.length);
  for (var i = 0; i < buttons.length; i++) {
    console.log(i);
    var minius = buttons[i].querySelector(".minius");
    var value = buttons[i].querySelector(".value");
    var add = buttons[i].querySelector(".add");
    console.log(minius);
    minius.addEventListener('click', miniusClicked);
    add.addEventListener('click', addClicked);

    value.addEventListener('change', quantityChanged)
  }



  //addTo the Cart
  var addCart = document.getElementsByClassName('addCart');
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }

  //buy button
  document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

//When button clicked
function buyButtonClicked() {
  var cartContent = document.getElementsByClassName("cart-container")[0];
  /*while (cartContent.hasChildNodes()) {
    let item = cartContent.firstChild;
    console.log(item);
    cartContent.removeChild(cartContent.firstChild);
  }*/
  let ctn = document.getElementsByClassName("cart-content");
  for (let index = 0; index < ctn.length; index++) {
    console.log({"title":ctn[index].querySelector(".title").innerText,"price":ctn[index].querySelector(".item-price").innerText});
  }
  cartContent.innerHTML ="";

  cartMenu.classList.toggle("active");
  if (!cartContent.hasChildNodes()) {
    document.querySelector(".empty-cart").style.display = "flex";
  }
  updateTotal();
  showUpToast("succes", "Your ask was submited");
}

//When cart button clicked
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("product-price")[0].innerText;
  var image = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, image);

  updateTotal();
}

//Add cart code
function addProductToCart(title, price, image) {
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  var cartItems = document.getElementsByClassName("cart-container")[0];

  let ist = false;
  var cartItemsNames = document.getElementsByClassName("cart-content");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].querySelector(".title").innerText == title) {
      alert("You already have this item");
      ist = true;
      return;
    }
  }
  let storage = window.localStorage;
  if(storage.getItem("cart")){
    let st = JSON.parse(storage.getItem("cart"));
    console.log(st);
    //storage.setItem("cart", JSON.stringify(((JSON.parse(storage.getItem("cart"))).push({"price": price, "tilte": title}))));
  }else{
    storage.setItem("cart", JSON.stringify([{"price": price, "tilte": title}]));
  }
  console.log(Array(JSON.parse(storage.getItem("cart"))));
  var cartBoxContent = `
                  <div class="cart-content">
                  <img src="${image}" alt="">
                  <div class="details">
                    <div class="title">${title}</div>
                    <div class="item-price">${price}</div>
                    <div class="buttons">
                      <span class="minius">&minus;</span><input type="text" value="01" id="value" class="value"><span class="add">&plus;</span>
                    </div>
                  </div>
                  <i class="fa-solid fa-trash remove-cart" id="remove-cart"></i>
                  </div>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox.getElementsByClassName("remove-cart")[0].addEventListener('click', removeItem);
  cartShopBox.getElementsByClassName("value")[0].addEventListener('change', quantityChanged);

  cartShopBox.getElementsByClassName("minius")[0].addEventListener('click', miniusClicked);
  cartShopBox.getElementsByClassName("add")[0].addEventListener('click', addClicked);

  let num = document.getElementsByClassName("cart-content").length;
  if (num > 0) {
    document.querySelector(".empty-cart").style.display = "none";
  }

}

//When quantitiy of product changed
function quantityChanged(event) {
  let input = event.target;
  
  input.value = format(parseInt(Number(input.value)));
  updateTotal();
  
}

//Remove item from cart
function removeItem(event) {
  var btclicked = event.target;
  btclicked.parentElement.remove();
  updateTotal();
  let num = document.getElementsByClassName("cart-content").length;

  if (num == 0) {
    document.querySelector(".empty-cart").style.display = "flex";
  }
}

document.querySelector("#e-cart").onclick = () => {
  cartMenu.classList.toggle("active");
}

//update total
function updateTotal() {
  var cartContainer = document.getElementsByClassName("cart-container")[0];
  var cartContents = document.getElementsByClassName("cart-content");
  var total = 0;
  for (var i = 0; i < cartContents.length; i++) {
    var cContent = cartContents[i];
    var priceElement = cContent.getElementsByClassName("item-price")[0];
    var quantityElement = cContent.getElementsByClassName("value")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantitiy = quantityElement.value;
    total += price * quantitiy;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

function miniusClicked(event) {
  let value = event.target.parentElement.getElementsByClassName("value")[0];
  if (parseInt(value.value) == 0) {
    value.value = format(0);
  } else {
    value.value = format(parseInt(value.value) - 1);
  }
  updateTotal();
}

function addClicked(event) {
  let value = event.target.parentElement.getElementsByClassName("value")[0];
  value.value = format(parseInt(value.value) + 1);
  updateTotal();
}

var format = (value) => { return value > 9 ? value : "0" + value };
//Function to show toast
function showUpToast(title, message) {
  let messageBox = toast.getElementsByClassName("message")[0];
  messageBox.getElementsByClassName("title")[0].textContent = title;
  messageBox.getElementsByClassName("message-content")[0].textContent = message;

  toast.classList.add("active");
  toast.classList.add(title.toLowerCase());
  setTimeout(() => {
    toast.classList.remove("active");
    toast.classList.remove(title.toLowerCase());
  }, 3000)
}
