var app = new Vue ({
    el: '#app',
    data: {
        product: 'meias',
        description: 'melhores meias que você ja vue',
        details: ['80% algodão', '20% poliester', 'Gender-neutral'],
        image: './assets/vmSocks-green-onWhite.jpg',
        altText: 'um par de meia',
        inStock: false,
        inventory: 9,
        variants: [
            {
                variantId: 2234,
                variantColor: 'verde'
            },
            {
                variantId: 2235,
                variantColor: 'azul'
            }
        ],
    }
})