<template>
    <v-container>
        <nav class="d-flex justify-space-between align-center px-5 ">
            <v-app-bar-nav-icon class="order-0" @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title class="order-1">Cristy</v-toolbar-title>
            <div class="order-2 ">
                <!-- <router-link class="black--text text-decoration-none" to="/">Home</router-link> |
            <router-link class="black--text text-decoration-none" to="/about">About</router-link> -->
                <v-btn icon>
                    <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </div>
            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-list nav dense>
                    <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                        <v-list-item link>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>
                                <router-link  to="/">Home</router-link>
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
        group: null,
    }),
}
</script>

