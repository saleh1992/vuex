import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

    name: "i love Vue",
    products_api: [],
    products: [],
    store_products: {},
    basket: [],
    unique: [],
    total_items: 0,
    total_price: 0,
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
      console.log(state.products);
      state.basket.push(state.store_products)

      const checkId = []
      state.unique = state.basket.filter(e => {
        const removeDuplicate = checkId.includes(e.id)
        if (removeDuplicate === false) {
          return checkId.push(e.id)
        }
        return false
      })
      state.basket = state.unique
      state.total_items = state.basket.reduce((prev, current) => prev + current.count, 0)
      state.total_price = state.basket.reduce((prev, current) => prev + current.price, 0).toFixed(2)

    },
    addItems(state) {
      state
    }
  }
})