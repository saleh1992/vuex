<template>
    <v-carousel cycle hide-delimiters  >
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
            <v-sheet>

            </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>

export default {
    name: 'Carousel',
    data: () => ({
        items: [
            {
                src:require('../assets/img/png/shoe1.png'),
            },
            {
                src: require('../assets/img/png/shoe3.png'),
            },
            {
                src: require('../assets/img/png/shoe4.jpg'),
            },
        ],
    }),
    computed: {
    //   height() {
    //     switch (this.$vuetify.breakpoint.name) {
    //       case 'xs': return 220
    //       case 'sm': return 400
    //       case 'md': return 500
    //       case 'lg': return 600
    //       case 'xl': return 800
    //       default:
    //       return console.log(this.$vuetify.breakpoint.name,"yes");
    //     }
        
    //   },
    },
}
</script>

<style lang="scss" scoped>

</style>