import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // count: 0,
    // counter: {
    //   count: 0
    // },
    name: "i love Vue",
    store_products: {},
    basket: [],
    unique: [],
    id: ""
  },
  mutations: {
    increment(state) {
      state.count++
    },
    love(state) {
      state.name += " Too match"
    },
    store_basket(state) {
      state.basket.push(state.store_products)
      const checkId = []
      state.unique = state.basket.filter(e => {
        const removeDuplicate = checkId.includes(e.id)
        if (removeDuplicate === false) {
          return checkId.push(e.id)
        }
      })
      state.basket = state.unique
      console.log("basket", state.basket);
      // console.log("unique", state.unique);
    }
  }
})