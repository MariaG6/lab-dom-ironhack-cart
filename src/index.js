// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;

  let subtotalPrice = price * quantity;

  product.querySelector(".subtotal span").innerHTML = subtotalPrice;

  return subtotalPrice;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName("product");
  const allProductsArray = [...allProducts];
  //allProductsArray.forEach((el) => updateSubtotal(el));

  // ITERATION 3
  let total = document.querySelector("#total-value span")
  let sum = 0;

  allProductsArray.forEach((el) => sum += updateSubtotal(el))
  total.innerText = sum
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  console.log("The target in remove is:", target);
  const removeBtn = document.querySelectorAll('.btn-remove')
  const removeBtnArray = [...removeBtn]

  removeBtnArray.forEach((btn) => {
    let event = btn.addEventListener('click',removeProduct)
    let product = btn.parentElement
    product.removeChild(btn)
  })
   
  calculateAll()

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
