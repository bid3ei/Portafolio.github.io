document.addEventListener('DOMContentLoaded', function () {
    const imageLinks = document.querySelectorAll('.image-link');
    const modalContainer = document.getElementById('modal-container');
    const modalContent = document.getElementById('modal-content');
    const modalImage = document.getElementById('modal-image');
    const modalClose = document.getElementById('modal-close');

    imageLinks.forEach(function (imageLink) {
        imageLink.addEventListener('click', function (e) {
            e.preventDefault();
            const highResImageSrc = this.querySelector('img').getAttribute('data-src');
            modalImage.src = highResImageSrc;
            modalContainer.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', function () {
        modalContainer.style.display = 'none';
    });
});
