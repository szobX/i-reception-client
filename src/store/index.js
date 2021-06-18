import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

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
  ],
  extrasList:[
    {
      id:Math.ceil(Math.random()*33333),
      name:'',
      properties:[
        {
          label:'',
          type:'text',
          value:''
        }
      ]
    }
  ],
  // extrasList:[
  //   {
  //     id:'234234',
  //     name:"basen",
  //     properties:[
  //       {
  //         label:'długość',
  //         type:'number',
  //         value:40,
  //       },
  //       {
  //         label:'szerokość',
  //         type:'number',
  //         value:20
  //       },
  //       {
  //         label:'jacuzzi',
  //         type:'boolean',
  //         value:true
  //       },
  //       {
  //         label:'rodzaje',
  //         type:'object',
  //         value:[
  //           {
  //             label:'maly',
  //             type:'text',
  //             value:'brodzik max(150cm)',
  //           },
  //           {
  //             label:'olimpijski',
  //             type:'text',
  //             value:'basen duży (420cm)'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     id:'asdasd',
  //     name:"basen",
  //     properties:[
  //       {
  //         label:'długośćx12',
  //         type:'number',
  //         value:40,
  //       },
  //       {
  //         label:'szerokość',
  //         type:'number',
  //         value:20
  //       },
  //       {
  //         label:'jacuzzi',
  //         type:'boolean',
  //         value:true
  //       },
  //       {
  //         label:'rodzaje',
  //         type:'object',
  //         value:[
  //           {
  //             label:'maly',
  //             type:'text',
  //             value:'brodzik max(150cm)',
  //           },
  //           {
  //             label:'olimpijski',
  //             type:'text',
  //             value:'basen duży (420cm)'
  //           }
  //         ]
  //       }
  //     ]
  //   },
  // ]
  },
  getters:{
    getField
  },
  mutations: {
    updateField,
    ADD_NEW_EXTRAS(state){
      state.extrasList.push({
        id:Math.ceil(Math.random()*1000),
        name:'',
        properties:[
          {
            label:'',
            type:'text',
            value:''
          }
        ]
      })
    },
    SET_NEW_OBJECT(state,{arrId,obj}){
      const current = state.extrasList.find(e=>e.id === arrId)
    },
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
