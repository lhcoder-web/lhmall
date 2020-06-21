import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //全局的tabbar是否显示
    showTabbar: true,
    //添加到购物车的商品
    cartList: []
  },
  mutations: {
    SETSHOWTABBAR(state,payload) {
      state.showTabbar = payload
    },
    SETCARTLIST(state,payload) {
       //判断是否重复 直接将重复的项的指向赋值给变量
      let repeat = state.cartList.find(item => item.iid === payload.iid);
      // console.log(repeat)
      if (repeat) {
        repeat.count ++;
      } else {
        state.cartList.push(payload);
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
