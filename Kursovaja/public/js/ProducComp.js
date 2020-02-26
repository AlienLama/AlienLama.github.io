Vue.component('products', {
    data(){
        return {
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <product v-for="item of filtered" :key="item.id_product" :product="item"></product>
        </div>
    `
});

Vue.component('product', {
    props: ['product'],
    data() {
      return {
          cartAPI: this.$root.$refs.cart,
      };
    },

    template: `
    <div class="bl">
        <img :src="product.product_img" class="block_main__image" alt="product" onerror="this.src='./img/noImage.jpg';">
        <div class="product-bl-bg">
            <div class="product_add">
                    <button class="flex product_addCart" @click="cartAPI.addProduct(product)">
                        <img src="img/shop_white.svg" alt="Add to cart">
                        <p class="product_add_title">
                            Add to Cart
                        </p>
                    </button>
            </div>
        </div>
        <h2 class="product-title">{{product.product_name}}</h2>
        <p class="product-price">&dollar;{{product.price}}</p>
    </div>


    `
});
