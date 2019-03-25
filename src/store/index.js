import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// export default new Vuex.Store
export const store = new Vuex.Store({
  state: {
    peoples: [],
    test: 'Sort table'
  },
  getters: {
    peoples: state => state.peoples,
    test: state => state.test
  },
  mutations: {
    addArr (state, data) {
      for (let i = 0; i < data.length; i++) {
        state.peoples.push(data[i])
      }
    }
  },
  actions: {
    loadServer (context) {
      return new Promise((resolve, reject) => {
        fetch('https://gist.githubusercontent.com/bunopus/f48fbb06578003fb521c7c1a54fd906a/raw/e5767c1e7f172c6375f064a9441f2edd57a79f15/test_users.json')
          .then(response => response.json())
          .then(response => {
            context.commit('addArr', response)
            resolve('ok')
          }).catch((error) => {
            console.log(error)
            reject(error)
          })
      })
    }
  }
})
