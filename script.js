document.addEventListener('DOMContentLoaded', () => {
    const openMenuButton = document.getElementById('open-menu');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (openMenuButton && closeMenuButton && mobileMenu) {
        openMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            openMenuButton.style.display = 'none'; // Hide menu button when menu is open
        });

        closeMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            openMenuButton.style.display = 'block'; // Show menu button when menu is closed
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Select all support items
    const supportItems = document.querySelectorAll('.support-item');

    // Add click event listener to each support item
    supportItems.forEach(item => {
      item.addEventListener('click', function() {
        // Retrieve data attributes
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');
        const productImage = this.getAttribute('data-image');

        // Store data in local storage
        localStorage.setItem('productName', productName);
        localStorage.setItem('productPrice', productPrice);
        localStorage.setItem('productImage', productImage);

        // Redirect to the product detail page
        window.location.href = 'product-detail.html';
      });
    });
  });