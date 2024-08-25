function updatePrice() {
    const ebookTypeSelect = document.getElementById('ebook-type');
    const selectedOption = ebookTypeSelect.options[ebookTypeSelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    document.getElementById('price').value = price + ' PLN';
}

document.getElementById('ebook-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Zakup zakończony sukcesem!');
});