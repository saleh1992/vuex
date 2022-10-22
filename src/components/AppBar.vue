<template>
    <v-container>
        <nav class="d-flex justify-space-between align-center px-5 ">
            <v-app-bar-nav-icon class="order-0" @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title class="order-1">Cristy</v-toolbar-title>
            <div class="order-2 ">
                <!-- <router-link class="black--text text-decoration-none" to="/">Home</router-link> |
                    <router-link class="black--text text-decoration-none" to="/about">About</router-link> -->
                    <v-btn icon class="mx-3">
                        <v-icon @click="drawerCart = true">mdi-cart-outline</v-icon>
                        <v-badge class="cart_length" v-if="$store.state.basket.length" :content="$store.state.basket.length"></v-badge>
                    </v-btn>
          
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </div>
            <v-navigation-drawer v-model="drawerCart" absolute temporary right>
                <v-list nav dense>
                    <v-list-item-group  v-model="group" >
                        <v-list-item link class="justify-center" >
                            <v-card>
                                <p>Construction Set</p>
                                <img width="200" src="../assets/img/jpg/toy1.jpg">
                            </v-card>
                        </v-list-item>


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
    }),
}
</script>

<style lang="scss" scoped>
// .cart_length{
//     position: relative;

// }
</style>

