<template>
    <v-container>
        <div class="text-center py-10">
            <h2 class="text-h3 py-5">Our Collections</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga suscipit omnis dolor. Dolore incidunt
                nemo molestias ab ducimus quibusdam sint vitae soluta, enim, quas velit consequatur. Omnis, dolore
                architecto.
            </p>
        </div>
        <!-- <span>Total Items {{this.$store.state.basket.reduce((prev,current)=> prev + current.count ,0)}}</span>
        <span>Total Price {{this.$store.state.basket.reduce((prevPrice,CurrentPrice)=> prevPrice + CurrentPrice.price,0 )}}</span> -->
        <span>Total Items {{   $store.state.total_items   }}</span> <br>
        <span>Total Price {{   $store.state.total_price   }}</span>

        <v-row>
            <v-card class="mx-auto my-12" max-width="374" v-for="product in products" :key="product.id">
                <v-img height="250" :src="product.image"></v-img>

                <v-card-title>{{   product.title   }}</v-card-title>

                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating v-model="product.rating" background-color="orange lighten-3" color="orange" dense
                            size="14"></v-rating>

                        <div class="grey--text ms-4">
                            {{   product.rating   }}
                        </div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">
                        $ • {{   product.price   }}
                    </div>

                    <div>
                        {{   product.title   }}
                    </div>
                    <!-- {{$store.state.count}} -->
                    <!-- {{$store.state.basket}} -->
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                    <v-btn color="deep-purple lighten-2" @click="handelAdd(product)">
                        buy
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>

</template>

<script>

export default {
    name: 'Products',
    data: () => ({
        loading: false,
        count: 1,
        selection: 1,
        products: [
            {
                id: 1,
                image: require('../assets/img/jpg/toy1.jpg'),
                title: "Construction Set",
                price: 101.99,
                rating: 4,
                loading: false
            },
            {
                id: 2,
                image: require('../assets/img/jpg/toy2.jpg'),
                title: "Soft Pink Bunny",
                price: 59.99,
                rating: 5,
                loading: false
            },
            {
                id: 3,
                image: require('../assets/img/jpg/toy3.jpg'),
                title: "Ring Stacker Toy",
                price: 77.99,
                rating: 3,
                loading: false
            },
            {
                id: 4,
                image: require('../assets/img/jpg/toy4.jpg'),
                title: "Coil Spring Toy",
                price: 8.99,
                rating: 1,
                loading: false
            },
        ]
    }),
    methods: {
        getData() {
            // const webApi = this.Products
            // this.$http.get(this.Products)
            //     .then(res => {
            //         console.log(res);
            //     })
            // console.log(this.Products);
        },
        handelAdd(param) {
            // add && increase count and price  in basket
            this.$store.state.basket.map(e => {
                if (e.id === param.id) {
                    return { ...e, ...e.count++, ...e.price += param.price }
                }
            })

            this.$store.state.id = param.id
            this.$store.state.store_products = { ...param, ...{ count: this.count } } // push product to basket
            this.$store.commit('store_basket')
        },

    },
    mounted() {
        this.$store.state.products = this.products
    }
}
</script>

<style lang="scss" scoped>

</style>