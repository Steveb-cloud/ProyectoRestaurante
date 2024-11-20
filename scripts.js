
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.menu-category ul li');
    items.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Has seleccionado: ${item.querySelector('strong').textContent}`);
        });
    });
});
