const toggleMenuBtn = document.getElementById('toggle-menu');
const menuItems = document.getElementById('menu-items');

toggleMenuBtn.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');
});