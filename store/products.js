const product = {
  state: { products: [] },
  mutations: {
    setProduct(state, data) {
      state.products = data
    },
  },
  actions: {
    async getProduct(commit, payload) {
      const { data, status } = await this.$axios.get(
        `Product/ListProducts/${payload.page}`
      )
      commit('setProducts', status ? data : [])
    },
  },
}
export default product
