document.addEventListener("DOMContentLoaded", function () {
    const orderItemsContainer = document.getElementById("orderItems");
    const orderTotalContainer = document.getElementById("orderTotal");
    const checkoutForm = document.getElementById("checkoutForm");
  
    function displayOrderSummary() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        orderItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        orderTotalContainer.innerHTML = "";
      } else {
        let orderItemsHtml = "";
        let total = 0;
  
        cart.forEach((item) => {
          total += item.price + item.shipping;
          orderItemsHtml += `
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
  
        orderItemsContainer.innerHTML = orderItemsHtml;
        orderTotalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
      }
    }
  
    displayOrderSummary();
  
    checkoutForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      alert("Your order has been placed!");
      checkoutForm.reset();
      localStorage.removeItem("cart");
      window.location.href = "index.html";
    });
  });
  