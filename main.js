var app = new Vue ({
    el: '#app',
    data: {
        cart: 0,
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
                variantColor: 'verde',
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'azul',
                variantImage: './assets/vmSocks-blue-onWhite.jpg'
            }
        ],
    },
    methods: {
        addToCart(){
            this.cart +=1
        },
        removeToCart(){
            if(this.cart > 0)
                this.cart -=1
        },
        updateProduct(img){
            this.image = img
        }
    },
})