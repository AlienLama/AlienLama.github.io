Vue.component('cart', {
    data(){
      return {
          imgCart: 'https://placehold.it/50x100',
          cartItems: [],
          showCart: false,
          sum: 0,
      }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
                this.sumCart == 2;
                alert("Количество товара "+ find.product_name + " в корзине теперь "+ find.quantity);
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.sumCart;
                            this.cartItems.push(prod);
                            alert("Ваш товар успешно добавлен в корзину!");
                        }
                    });
            }
        },
        
        remove(item) {
            if (item.quantity > 1) {
                this.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
                    .then(data => {
                        if (data.result === 1) {
                            item.quantity--;
                        }
                    });
            } else {
                this.$parent.deleteJson(`/api/cart/${item.id_product}`)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    });
            }
        },
    },
    mounted(){
        this.$parent.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template: `
    <details>
        <summary class="account">My account</summary>
        <div class="cart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="imgCart"
                @remove="remove">
                </cart-item>

                <div class="cart-last__bl" v-if="cartItems.length">
                    <a href="pay.html" class="total__link">go to cart</a>
                </div>
            </div>
    </details>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
            <div class="cart-bl">
                <a href="detail.html" class="cart__link">
                    <img :src="cartItem.product_img" class="cart_userProducts" alt="product" onerror="this.src='./img/noImage.jpg';">
                </a>
                <div class="cart__desc">
                    <a href="detail.html" class="cart__link">
                        <h3 class="cart__h3">{{cartItem.product_name}}</h3>
                    </a>
                    <div class="cart__price">{{cartItem.quantity}} x &dollar;{{cartItem.price}}</div>
                </div>
                <div class="cart-clear">
                    <button class="del-btn" @click="$emit('remove', cartItem)"><i class="fas fa-times-circle"></i></button>
                </div>
            </div>
    `
});

