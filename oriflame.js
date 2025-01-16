// Purchase function for WhatsApp link
function purchase(productName, price) {
    const message = `Hello Cindy'sbeautyandmore, I am interested in ${encodeURIComponent(productName)}.%0A%0AMy name is:`;
    const whatsappLink = `https://wa.me/233551972704?text=${message}`;
    window.open(whatsappLink, '_blank');
}

// Open modal for product details
function openModal(productName, description, price) {
    console.log('openModal called'); // Debugging statement
    const modalName = document.getElementById('modal-product-name');
    const modalDescription = document.getElementById('modal-product-description');
    const modalPrice = document.getElementById('modal-product-price');
    const modal = document.getElementById('product-modal');

    if (!modalName || !modalDescription || !modalPrice || !modal) {
        console.error('Modal elements not found!'); // Debugging statement
        return;
    }

    modalName.innerText = productName;
    modalDescription.innerText = description;
    modalPrice.innerText = `Price: GHC ${price}`;
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

// Attach event listeners to product buttons
document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const purchaseButton = product.querySelector('.purchase-button');
        const viewDetailsButton = product.querySelector('.view-details-button');

        if (purchaseButton) {
            purchaseButton.onclick = () => {
                const productName = product.querySelector('h3').innerText;
                const price = product.querySelector('p').innerText.split(' ')[1];
                purchase(productName, price);
            };
        }

        if (viewDetailsButton) {
            viewDetailsButton.onclick = () => {
                const productName = product.querySelector('h3').innerText;
                const description = product.querySelector('.description') ? product.querySelector('.description').innerText : '';
                const price = product.querySelector('p').innerText.split(' ')[1];
                openModal(productName, description, price);
            };
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
});