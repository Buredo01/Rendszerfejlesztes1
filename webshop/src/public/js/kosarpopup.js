 
    function handleFormSubmit(event) {
        event.preventDefault(); 
        const form = event.target;
        const formData = new FormData(form); 
        const hiddenFrame = document.querySelector('iframe[name="hiddenFrame"]');
        const url = form.action + '?' + new URLSearchParams(formData).toString();
        hiddenFrame.src = url;
        showCartModal();
        return false;  
    }

    function showCartModal() {
        const cartModalElement = document.getElementById('cartModal');
        const cartModal = new bootstrap.Modal(cartModalElement);
        cartModal.show();

        const kosarhoz = document.getElementById('kosarhoz');
        kosarhoz.addEventListener('click', () => {
            window.location.href = '/kosar';
            cartModal.hide();
        });

        document.getElementById("marad").addEventListener("click", () => {
            cartModal.hide();
        });

        document.getElementById("tovabbikonyvek").addEventListener("click", () => {
            window.location.href = '/konyveink';
            cartModal.hide();
        });
    }

    function showLoginModal() {
        const loginModalElement = document.getElementById('loginModal');
        const loginModal = new bootstrap.Modal(loginModalElement);
        loginModal.show();
    }