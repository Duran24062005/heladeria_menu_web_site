const menuItems = [
    { name: 'Cono de Helado', description: "Helados por bolas", image: '/assets/vista-frontal-color-rojo-cereza-coctel-pajitas-dentro-pequena-lata-enfriamiento-fresco-escritorio-madera-junto-cerezas-frescas-flores-escritorio-rosa.png' },
    { name: 'Copa de Helado', description: "Helados por bolas", image: '/assets/1000_F_312360554_CD4jAXwx5hKMnNFCZktgDaHWrF0DJO8M.jpg' },
    { name: 'Sundae', description: "Helados por bolas", image: '/assets/1000_F_50866103_nga6ooBmpWVNnsdrqqH5uDxf2xnUwq3a.jpg' },
    { name: 'Bowl de Helado', description: "Helados por bolas", image: '/assets/1000_F_1071069985_o3cxq0R3KWbmlyZkKR0UZbWQOtr6jDot.jpg' },
    { name: 'Sándwich de Helado', description: "Helados por bolas", image: '/assets/1000_F_472583524_OUMweeIXxuqFptsf9AVEYaTTnbnUbQ2g.jpg' },
    { name: 'Flotante de Helado', description: "Helados por bolas", image: 'https://via.placeholder.com/200x200?text=Flotante' },
    { name: 'Parfait de Helado', description: "Helados por bolas", image: 'https://via.placeholder.com/200x200?text=Parfait' },
    { name: 'Torta de Helado', description: "Helados por bolas", image: 'https://via.placeholder.com/200x200?text=Torta' },
    { name: 'Cóctel de Helado', description: "Helados por bolas", image: 'https://via.placeholder.com/200x200?text=Coctel' },
    { name: 'Batido de Helado', description: "Helados por bolas", image: 'https://via.placeholder.com/200x200?text=Batido' },
    { name: 'Smoothie de Helado', description: "Helados por bolas", image: 'https://via.placeholder.com/200x200?text=Smoothie' },
    { name: 'Paleta de Helado', description: "Helados por bolas", image: 'https://via.placeholder.com/200x200?text=Paleta' },
];

function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-lg overflow-hidden shadow-md';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
        <p class="p-2 text-center">${item.name}</p>
        <p clas="p-2">${item.description}</p>
    `;
    return div;
}

function loadMenuItems() {
    const menuGrid = document.getElementById('menu-grid');
    menuItems.forEach(item => {
        menuGrid.appendChild(createMenuItem(item));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadMenuItems();
});

