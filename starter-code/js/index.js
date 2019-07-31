function calculatePrices() {
  var sum = 0;
  for (
    let i = 0;
    i < document.getElementsByClassName("product-wraper").length;
    i++
  ) {
    var price = document.getElementsByClassName("price")[i].innerHTML;
    var quantity = document.getElementsByClassName("quantity")[i].value;
    var productPrice = price * quantity;
    var totalPrice = document.getElementsByClassName("total")[i];
    totalPrice.innerHTML = productPrice;
    sum += productPrice;
    var totalCartPrice = document.getElementById("total-cart-price");
    totalCartPrice.innerHTML = sum;
  }
}

function deleteProducts(event) {
  let button = event.currentTarget;
  var oneProduct = button.parentElement;
  var productsList = document.getElementById("all-products");
  productsList.removeChild(oneProduct);
}

function addDeleteButtons() {
  var allDeleteButtons = document.getElementsByClassName("btn-delete");
  for (let i = 0; i < allDeleteButtons.length; i++) {
    allDeleteButtons[i].addEventListener("click", deleteProducts);
  }
}

function addNewProduct() {
  var newName = document.getElementById("name").value;
  var newPrice = document.getElementById("price").value;

  var newProduct = document.createElement("div");
  newProduct.className = "product-wraper";

  var productNameContainer = document.createElement("div");
  var productName = document.createElement("span");
  productName.className = "product-name";
  var productNameText = document.createTextNode(newName);
  productName.appendChild(productNameText);
  productNameContainer.appendChild(productName);
  newProduct.appendChild(productNameContainer);

  var productPriceContainer = document.createElement("div");
  var productPrice = document.createElement("span");
  productPrice.className = "price";
  var productPriceText = document.createTextNode(newPrice);
  productPrice.appendChild(productPriceText);
  var currencySign = document.createTextNode("$");
  productPriceContainer.appendChild(currencySign);
  productPriceContainer.appendChild(productPrice);
  newProduct.appendChild(productPriceContainer);

  var quantityDiv = document.createElement("div");
  var quantityLabelDiv = document.createElement("div");
  quantityLabelDiv.className = "label";
  var quantityInput = document.createElement("input");
  quantityInput.className = "quantity";
  quantityInput.setAttribute("placeholder", "0");
  quantityInput.setAttribute("type", "number");
  quantityLabelDiv.appendChild(quantityInput);
  quantityDiv.appendChild(quantityLabelDiv);
  newProduct.appendChild(quantityDiv);

  var totalPriceDiv = document.createElement("div");
  var currencySignTotal = document.createTextNode("$");
  var totalPriceSpan = document.createElement("span");
  totalPriceSpan.className = "total";
  var totalPriceText = document.createTextNode("0");
  totalPriceDiv.appendChild(currencySignTotal);
  totalPriceSpan.appendChild(totalPriceText);
  totalPriceDiv.appendChild(totalPriceSpan);
  newProduct.appendChild(totalPriceDiv);

  var deleteButton = document.createElement("button");
  deleteButton.className = "btn-delete";
  deleteButton.setAttribute("type", "button");
  var deleteButtonText = document.createTextNode("Delete");
  deleteButton.appendChild(deleteButtonText);
  newProduct.appendChild(deleteButton);
  deleteButton.addEventListener("click", deleteProducts);

  var productsList = document.getElementById("all-products");
  productsList.appendChild(newProduct);
}

window.onload = function() {
  var calculatePriceButton = document
    .getElementById("calc-prices-button")
    .addEventListener("click", calculatePrices);
  // var deleteButtons = document.getElementsByClassName("btn-delete");
  addDeleteButtons();

  var createNewProductButton = document
    .getElementById("btn-add")
    .addEventListener("click", addNewProduct);
};
