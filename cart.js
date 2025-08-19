document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cartItems");
    const cartTotalContainer = document.getElementById("cartTotal");
    const clearCartButton = document.getElementById("clearCartButton");
    const checkoutButton = document.getElementById("checkoutButton");
  
    function displayCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalContainer.innerHTML = "";
        clearCartButton.style.display = "none";
        checkoutButton.style.display = "none";
      } else {
        clearCartButton.style.display = "block";
        checkoutButton.style.display = "block";
        let cartItemsHtml = "";
        let total = 0;
  
        cart.forEach((item) => {
          total += item.price + item.shipping;
          cartItemsHtml += `
            <div class="cart-item">
              <img src="${item.image}" alt="${item.name}" />
              <div>
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Shipping: $${item.shipping.toFixed(2)}</p>
              </div>
            </div>
          `;
        });
  
        cartItemsContainer.innerHTML = cartItemsHtml;
        cartTotalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
      }
    }
  
    displayCart();
  
    clearCartButton.addEventListener("click", function () {
      localStorage.removeItem("cart");
      displayCart();
    //  alert("Cart has been cleared.");
    });
  
    checkoutButton.addEventListener("click", function () {
      window.location.href = "checkout.html";
    });
  });
  