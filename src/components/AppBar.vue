<template>
    <v-container>
        <nav class="d-flex justify-space-between align-center px-5 ">
            <v-app-bar-nav-icon class="order-0" @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title class="order-1">Cristy</v-toolbar-title>
            <div class="order-2 ">
                <!-- <router-link class="black--text text-decoration-none" to="/">Home</router-link> |
                    <router-link class="black--text text-decoration-none" to="/about">About</router-link> -->
                <v-btn icon class="mx-3" @click="drawerCart = true">
                    <v-icon>mdi-cart-outline</v-icon>
                    <v-badge class="cart_length" v-if="$store.state.basket.length" :content="$store.state.total_items">
                    </v-badge>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </div>
            <v-navigation-drawer v-model="drawerCart" absolute temporary right width="600">
                <v-list class="test" nav dense>
                    <v-list-item-group v-model="group" class="drawerCart_list">
                        <p class="py-5 mx-10">Your Cart ({{ totalItems }} items)</p>
                        <v-list-item link class="justify-center mb-5" v-for="(product, i) in $store.state.basket"
                            :key="product.id">
                            <v-card width="90%" elevation="0">
                                <v-row>
                                    <v-col cols="4">
                                        <div :style="{ width: 100 + 'px', height: 100 + 'px' }">
                                            <img height="100$" :src="product.image">
                                        </div>
                                    </v-col>
                                    <!-- <v-col cols="8" class="d-flex justify-space-between align-center"> -->
                                    <v-col cols="8">
                                        <v-row class="px-5">
                                            <v-col cols="12" class="d-flex justify-space-between  align-center">
                                                <span>{{ product.title }}</span>
                                                <span v-if="true">{{ (product.price).toFixed(2) }} $</span>
                                                <!-- <span v-else-if="false" class="text-decoration-line-through red--text">{{ (product.price).toFixed(2) }} $</span>
                                                <span v-else class="">{{ (product.price-50).toFixed(2) }} $</span> -->
                                            </v-col>
                                            <v-col cols="12" class="d-flex justify-space-between  align-center">
                                                <v-btn-toggle>
                                                    <v-btn @click="increase(product, i)">
                                                        <v-icon>mdi-plus</v-icon>
                                                    </v-btn>
                                                    <v-btn>
                                                        <!-- <v-icon>{{$store.state.total_items}}</v-icon> -->
                                                        <v-icon>{{ product.count }}</v-icon>
                                                    </v-btn>
                                                    <v-btn @click="decrease(product, i)">
                                                        <v-icon>mdi-minus</v-icon>
                                                    </v-btn>
                                                </v-btn-toggle>
                                                <v-btn icon @click="delete_item(i)">
                                                    <v-icon>mdi-close-thick </v-icon>
                                                </v-btn>
                                            </v-col>


                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-list-item>

                        <div class="subtotal mx-10 d-flex justify-space-between align-center text-h5 font-weight-bold">
                            <span>Subtotal: </span>
                            <span>{{ totalPrices }} $</span>
                        </div>
                        <v-col cols="12" class="mt-16 px-9">
                            <v-text-field label="Discount Value" type="number" solo
                                @input="discount_value = $event"></v-text-field>
                        </v-col>
                        {{ discount_value }}
                        <v-col cols="12" class="mt-16 px-9">
                            <v-text-field label="Voucher Number" type="text" solo
                                @input="voucher = $event"></v-text-field>
                        </v-col>
                        {{ voucher }}
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list nav dense>
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <router-link to="/">Home</router-link>
                            </v-list-item-title>
                        </v-list-item>

                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <router-link to="/about">About</router-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-navigation-drawer>
        </nav>
    </v-container>
</template>

<script>

export default {
    name: "AppBar",
    data: () => ({
        drawer: false,
        drawerCart: false,
        group: null,
        oldPrice: 0,
        discount_value: null,
        voucher: null
    }),
    methods: {
        increase(item, index) {
            this.$store.state.basket[index].count++
            this.oldPrice = this.$store.state.products.filter(e => {
                return e.id === item.id ? e.price : ""
            })
            this.$store.state.basket[index].price += this.oldPrice[0].price
        },
        decrease(item, index) {
            this.$store.state.basket[index].count--
            if (this.$store.state.basket[index].count <= 0) {
                this.$store.state.basket.splice(index, 1)
            }
            this.oldPrice = this.$store.state.products.filter(e => {
                return e.id === item.id ? e.price : ""
            })
            this.$store.state.basket[index].price -= this.oldPrice[0].price
        },
        delete_item(index) {
            this.$store.state.basket.splice(index, 1)
        }
    },
    computed: {
        totalPrices() {
            return (this.$store.state.basket.reduce((prev, current) => prev + current.price, 0) - this.discount_value).toFixed(2)
        },
        totalItems() {
            return this.$store.state.basket.reduce((prev, current) => prev + current.count, 0)
        }
    }
}
</script>

<style lang="scss" scoped>
// .cart_length{
//     position: relative;

// }
.drawerCart_list {
    position: relative;
}

.subtotal {
    position: relative;
    bottom: -47px;
}
</style>

