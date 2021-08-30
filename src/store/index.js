import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testbtn:false,
  },
  mutations: {
    updatetestbtn:(state,value)=>{
      state.testbtn=value;
    }
    },
})
