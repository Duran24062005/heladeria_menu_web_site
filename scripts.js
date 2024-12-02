const menuItems = [
    {
        name: 'Cono de Helado',
        description: "3 bolas de helado por 7.500 mil, 2 bolas de helado por 4.000 mil",
        image: '/assets/vista-frontal-color-rojo-cereza-coctel-pajitas-dentro-pequena-lata-enfriamiento-fresco-escritorio-madera-junto-cerezas-frescas-flores-escritorio-rosa.png'
    },
    {
        name: 'Copa de Helado',
        description: "2 bolas y media con fruta variada por 12.000 mil",
        image: '/assets/1000_F_312360554_CD4jAXwx5hKMnNFCZktgDaHWrF0DJO8M.jpg'
    },
    {
        name: 'Sundae',
        description: "3 bolas de helado por 10.000 mil",
        image: '/assets/1000_F_50866103_nga6ooBmpWVNnsdrqqH5uDxf2xnUwq3a.jpg'
    },
    {
        name: 'Bowl de Helado',
        description: "3 bolas de helado con barquillos de chocolate por 10.000 mil",
        image: '/assets/1000_F_1071069985_o3cxq0R3KWbmlyZkKR0UZbWQOtr6jDot.jpg'
    },
    {
        name: 'Sándwich de Helado',
        description: "Brownie con una bola de helado y salsas por 10.000 mil",
        image: '/assets/1000_F_472583524_OUMweeIXxuqFptsf9AVEYaTTnbnUbQ2g.jpg'
    },
    {
        name: 'Flotante de Helado',
        description: "Banano con 3 bolas de helado, crema chantilly y salsa de chocolate por 7.500 mil",
        image: 'https://via.placeholder.com/200x200?text=Flotante'
    },
    {
        name: 'Parfait de Helado',
        description: "Licuado de helado con leche y crema chantilly, pequeño por 8.500 mil, grande por 12.000 mil",
        image: 'https://via.placeholder.com/200x200?text=Parfait'
    },
    {
        name: 'Torta de Helado',
        description: "Creps con una bola de helado y salsa de frutas por 10.000 mil",
        image: 'https://via.placeholder.com/200x200?text=Torta'
    },
    {
        name: 'Cóctel de Helado',
        description: "Limonada cerezada con leche condensada por 14.000 mil",
        image: 'https://via.placeholder.com/200x200?text=Coctel'
    },
    {
        name: 'Batido de Helado',
        description: "Granizado de Milo con salsa de chocolate y crema chantilly, pequeño por 8.500 mil, grande por 12.000 mil",
        image: 'https://via.placeholder.com/200x200?text=Batido'
    },
    {
        name: 'Smoothie de Helado',
        description: "3 bolas de helado con galleta de chocolate normal por 7.500 mil, con fruta por 9.000 mil",
        image: 'https://via.placeholder.com/200x200?text=Smoothie'
    },
    {
        name: 'Paleta de Helado',
        description: "Helado servido en vaso, grande por 6.000 mil, mediano por 3.500 mil",
        image: 'https://via.placeholder.com/200x200?text=Paleta'
    }
];


function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-lg overflow-hidden shadow-lg shadow-pink-700 flex flex-col h-full';
    div.innerHTML = `
        <div class="relative h-48">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
        </div>
        <div class="p-2 flex-grow flex flex-col justify-between">
            <h3 class="text-lg font-semibold text-center mb-2">${item.name}</h3>
            <p class="text-sm text-center">${item.description}</p>
        </div>
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

