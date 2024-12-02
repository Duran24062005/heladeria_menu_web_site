const menuItems = [
    {
        name: 'Cono de Helado',
        description: "3 bolas de helado por 7.500 mil, 2 bolas de helado por 4.000 mil",
        image: '/assets/four-scoops-ice-cream.jpg'
    },
    {
        name: 'Limonada cerezada',
        description: "Licuado de limón y cerezas con leche condesada. 14.000mil",
        image: '/assets/vista-frontal-color-rojo-cereza-coctel-pajitas-dentro-pequena-lata-enfriamiento-fresco-escritorio-madera-junto-cerezas-frescas-flores-escritorio-rosa.png'
    },
    // {
    //     name: 'Copa de Helado',
    //     description: "2 bolas y media con fruta variada por 12.000 mil",
    //     image: '/assets/1000_F_312360554_CD4jAXwx5hKMnNFCZktgDaHWrF0DJO8M.jpg'
    // },
    {
        name: 'Canasta',
        description: "3 bolas de helado por 10.000 mil",
        image: '/assets/1000_F_50866103_nga6ooBmpWVNnsdrqqH5uDxf2xnUwq3a.jpg'
    },
    {
        name: 'Copa Fruta',
        description: "2 bola y media con fruta variada 12.000mil",
        image: '/assets/1000_F_55362648_xzL2X1RYeZACfIJSoZuuBV87QAetfNNT.jpg'
    },
    {
        name: 'Ensalada de frutas',
        description: "Fruta variada con una bola de helado, queso, leche condensada y crema chantilly. 15.000mil",
        image: '/assets/1000_F_312360554_CD4jAXwx5hKMnNFCZktgDaHWrF0DJO8M.jpg'
    },
    {
        name: 'Milo Frappe',
        description: "Granizado de Milo con salsa de chocolate y crema chantilly. Pequeño 8.500 Grande 12.000mil",
        image: '/assets/1000_F_472583524_OUMweeIXxuqFptsf9AVEYaTTnbnUbQ2g.jpg'
    },
    {
        name: 'Helado Vaso',
        description: "Grande: 6.000mil Mediano: 3.500",
        image: '/assets/delicious-chocolate-ice-cream-cup.jpg'
    },
    {
        name: 'Helado Brawnie',
        description: "Brawnie con una bola de helado y salsas. 10.000mil",
        image: '/assets/brownie-sundae-with-scoop-vanilla-ice-cream.jpg'
    },
    {
        name: 'Helado Barquillo',
        description: "3 bolas de helado con barquillos de chocolate. 10.000mil",
        image: '/assets/chocolate-ice-cream-dessert.jpg'
    },
    {
        name: 'Batido de Helado',
        description: "Licuado de helado con leche con crema chantilly. Pequeño: 8.500 grande: 12.000mil",
        image: '/assets/creamy-vanilla-milkshake-with-chocolate-sauce-white-saucer.jpg'
    },
    {
        name: 'Banana Split',
        description: "Banano con 3 bolas de helado y crema chantilly con salsa de chocolate. 7.500",
        image: '/assets/ice-cream-dessert-with-banana.jpg'
    },
    {
        name: 'Copa Galleta',
        description: "3 bolas de helado con galleta de chocolate Normal: 7.500 Con fruta: 9.000mil",
        image: '/assets/three-color-icecream-gelato-buns-glass.jpg'
    },
    {
        name: 'Helado creps',
        description: "Creps con una bola de helado y salsa de frutas por 10.000 mil",
        image: '/assets/pancakes-with-chocolate-jam-berries-tasty-breakfast-flat-lay-top-view (1).jpg'
    }
];



function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'bg-white rounded-lg overflow-hidden shadow-lg shadow-pink-700 flex flex-col h-full';
    div.innerHTML = `
        <div class="relative h-48">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover data-twe-lazy-load-init">
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

