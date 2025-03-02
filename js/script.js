var btn_show = document.querySelectorAll(".btn-outline-info");
var price = document.querySelectorAll(".text-warning");

btn_show.forEach(function(button, index) {
  button.addEventListener("click", function() {
    price[index].style.display = "block"; // إظهار السعر المقابل للزر
  });
});





var allproducts = document.querySelectorAll(".card-body");
var productButtons = document.querySelectorAll(".btn-item");

var tproducts = document.querySelector("#tproducts");
var tpriceButton = document.querySelector("#tprice-button");

var preprice = 0;

productButtons.forEach(function(button, index) {
  button.onclick = function() {
    var priceElement = allproducts[index].querySelector("span[data-price]"); // احصل على عنصر السعر الصحيح
    var price = parseFloat(priceElement.getAttribute("data-price"));
    
    if (!isNaN(price)) {
      tproducts.innerHTML += allproducts[index].querySelector(".card-title").textContent + "<br>";
      preprice += price;
    }

    if (tproducts.innerHTML != "") {
      tpriceButton.style.display = "block";
    }
  }
});

tpriceButton.onclick = function() {
  tproducts.innerHTML += "<hr><strong>Total Price:</strong> " + preprice + "$";
};

