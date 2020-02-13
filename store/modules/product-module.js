import Vue from "vue";
const state = {
  motion: "",
  timeOut: 15000,
  product: []
};
const getters = {
  RETURN_GET_PRODUCT(state) {
    return state.product
  }
};
const mutations = {
  SET_PRODUCT(state, product) {
    state.product = product;

  },
};
const actions = {
  getProduct(vuexContext) {
    this.$axios.$get()
      .then((response) => {
        vuexContext.commit('SET_PRODUCT', response)
      })
      .catch((error) => {
      })
  },
  getProductById(vuexContext, info) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(info, {})
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  deleteProduct(vuexContext, info) {
    return new Promise((resolve, reject) => {
      this.$axios.$delete(info, {})
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  updateProductById(vuexContext, info) {
    return new Promise((resolve, reject) => {
      this.$axios.$put(info.id, info)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  createProductById(vuexContext, info) {
    return new Promise((resolve, reject) => {
      this.$axios.$post(info.id, info)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },




};
export default {
  state,
  getters,
  mutations,
  actions
}
