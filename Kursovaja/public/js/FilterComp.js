Vue.component('filter-el', {
    data(){
        return {
            userSearch: ''
        }
    },
    template: `
            <form action="#" class="search-form header__form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
            <details>
                        <summary class="browse">Browse</summary>
                        <div class="drop__browse">
                            <h3 class="browse__h3">Women</h3>
                            <ul class="drop__ul">
                                <li><a href="" class="browse__link">Dresses</a></li>
                                <li><a href="" class="browse__link">Tops</a></li>
                                <li><a href="" class="browse__link">Sweaters/Knits</a></li>
                                <li><a href="" class="browse__link">Jackets/Coats</a></li>
                                <li><a href="" class="browse__link">Blazers</a></li>
                                <li><a href="" class="browse__link">Denim</a></li>
                                <li><a href="" class="browse__link">Leggings/Pants</a></li>
                                <li><a href="" class="browse__link">Skirts/Shorts</a></li>
                                <li><a href="" class="browse__link">Accessories</a></li>
                            </ul>
                            <h3 class="browse__h3">men</h3>
                            <ul class="drop__ul">
                                <li><a href="" class="browse__link">Tees/Tank tops</a></li>
                                <li><a href="" class="browse__link">Shirts/Polos</a></li>
                                <li><a href="" class="browse__link">Sweaters</a></li>
                                <li><a href="" class="browse__link">Sweatshirts/Hoodies</a></li>
                                <li><a href="" class="browse__link">Blazers</a></li>
                                <li><a href="" class="browse__link">Jackets/vests</a></li>
                            </ul>
                        </div>
                    </details>
                    <input type="text" placeholder="Search for Item..."  v-model="userSearch" required>
                    <button type="submit" onclick="location.href='#yakProducts'"><i class="fas fa-search" aria-hidden="true"></i></button>
            </form>
    `
});
