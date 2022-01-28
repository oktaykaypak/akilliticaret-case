const product = {
  state: {
    products: [],
  },
  mutations: {
    setProduct(state, data) {
      state.products = data
    },
  },
  actions: {
    async getProduct({ commit }, payload) {
      const { data, status } = await this.$axios.get(
        `Product/ListProducts/${payload.page}`
      )
      console.log(data.data)
      commit('setProduct', status === 200 ? data.data : [])
      if (status === 401) {
        localStorage.removeItem('token')
      }
    },
  },
}
export default product
