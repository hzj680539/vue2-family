import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user
  }
})
