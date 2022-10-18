import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    name: "i love Sarddaaa",
    store_products: [],
    basket: []
  },
  mutations: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    },
    love(state) {
      state.name += " Too match"
    }
  }
})
