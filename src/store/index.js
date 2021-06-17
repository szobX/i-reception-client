import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user:{
    //   name:"Szobi"
    // },
    user:null,
    extras:[
      {
        id:'bedzieuuid4',
          name:"Łazienka",
          properties:{
              'jacuzzi':true,
              'prysznic':{
                "dlugosc":4,
                "szerokosc":2,
                "masazer":true,
              },
              "reczniki":true
          },
      },
  ]
  },
  mutations: {
    SET_USER(state,user){
      state.user = user
    },
    SET_NEW_EXTRAS(state,{object,id}){
        const finded = state.extras.find(e=>e.id ===id)
        finded.properties = {...object}
        debugger
        state.extras = [...state.extras,finded]
    }
  },
  actions: {
    login({state,commit},data){
      console.log(this)
       localStorage.setItem("ireceptionAccount",JSON.stringify(data));

      commit('SET_USER',data)
    },
    checkAuth({commit}){
      const t = localStorage.getItem("ireceptionAccount");
      if(t){
        commit('SET_USER',JSON.parse(t))
      }
    },
    register(){
      
    },
    logOut({commit}){
      localStorage.removeItem("ireceptionAccount");
      commit('SET_USER',null)
    }
  },
  modules: {
  }
})
