<template>
  <div class="bg-white">
    <div class="card card-primary">
      <div class="card-header">
        <h3 class="card-title  text-bold">
          Basic Data
        </h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="hotelname">Building name</label>
              <input
                id="hotelname"
                v-model="bulding.name"
                type="text"
                class="form-control"
                placeholder="Enter Bulding name"
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="street">Street name</label>
              <input
                id="street"
                v-model="bulding.streetName"
                type="text"
                class="form-control"
                placeholder="Enter Street name"
              >
            </div>
          </div>
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="houseNumber">House number </label>
              <input
                id="houseNumber"
                v-model="bulding.houseNumber"
                type="text"
                class="form-control"
                placeholder="Enter House number"
              >
            </div>
          </div>
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="hotelCity">City</label>
              <input
                id="hotelCity"
                v-model="bulding.city"
                type="text"
                class="form-control"
                placeholder="Enter City "
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="hotelZipCode">Zip code</label>
              <input
                id="hotelZipCode"
                v-model="bulding.zipCode"
                type="text"
                class="form-control"
                placeholder="Enter Zip Code"
              >
            </div>
          </div>
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="hotelLatitude">Latitude</label>
              <input
                id="hotelLatitude"
                v-model="bulding.latitude"
                type="text"
                class="form-control"
                placeholder="Enter Hotel latidute "
              >
            </div>
          </div>
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="hotelLongitude">Longitude</label>
              <input
                id="hotelLongitude"
                v-model="bulding.longitude"
                type="text"
                class="form-control"
                placeholder="Enter Hotel longitude "
              >
            </div>
          </div>
          <div class="col-xl-6 col-6">
            <div class="form-group">
              <label for="hotelLink">Link image</label>
              <input
                id="hotelLink"
                v-model="bulding.image"
                type="text"
                class="form-control"
                placeholder="Enter Hotel image link "
              >
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div
      v-for="(extra,idx) in extrasList"
      :key="extra.id"
      class="card card-primary mt-5"
    >
      <div class="card-header d-flex align-items-center">
        <h3 class="card-title  text-bold">
          EXTRAS #{{ idx+1 }}
        </h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <hotel-extras
              key="first"
              :extras="extra"
              :array-id="findId(extra.id)"
            />
          </div>
        </div>
      </div>
    </div>
    <button
      class="btn btn-success"
      @click.prevent="$store.commit('ADD_NEW_EXTRAS')"
    >
      ADD EXTRAS
    </button>
    <div class="d-flex ml-auto pr-5 my-4 justify-content-end">
      <button
        class="  btn btn-xl btn-outline-primary  btn-lg "
        @click="sendForm"
      >
        CREATE BULDING
      </button>
    </div>
  </div>
</template>

<script>
import HotelExtras from '@/components/hotel/HotelExtras.vue'
import { mapMultiRowFields,mapFields } from 'vuex-map-fields';

export default {
  name:'HotelForm',
components: {
    HotelExtras,
  },
 data(){
    return{
        bulding:{
        name:'',
        streetName:'',
        houseNumber:'',
        city:'',
        zipCode:'',
        latitude:'',
        longitude:'',
        image:'',
    },
    }
  
},
  computed:{
    // ...mapMultiRowFields(['extrasList']),
    ...mapFields(['extrasList'])

    // extras(){
    //   return    this.$store.state.extrasList
    // }
  },
methods:{
  findId(id){
        return this.$store.state.extrasList.findIndex(e=>e.id === id)
      },
  newExtras(){
    this.extras.push( {
      id:new Date().valueOf,
            name:"test",
            properties:{

            },
            value:'text',
            valueType:'text',
        },)
  },
  // check(arr,t=[],parent=null){
  
  //   arr.forEach(e=>{
  //     // console.log(e)

  //     if(e.type ==='object'){
  //       this.check(e.value,t,arr)
  //     }else{
  //       if(parent){
  //         t.push({[parent.label]:{[e.label]:e.value}})
  //       }else{
  //         t.push({[e.label]:e.value})

  //       }
      
  //     }
  //   })
  //   return t
  // },
 
 toObject(arr) {
  var rv = {};
  // debugger
  for (var i = 0; i < arr.length; ++i)
    rv[arr[i].label] = arr[i].value;
  return rv;
},
getSerialize(arr,parentLabel,propsy={}){
  const serialize = {}
  arr.forEach((t,idx)=>{

      if(t.type=='object'){
         const s = this.getSerialize(t.value,t.label)
        //  console.log(s,'s callback')
        serialize[t.label] = {...s}
      }else{
        serialize[t.label] = t.value
      }
    })
        return serialize
},
  sendForm(){
    const newArr = []
    
    this.extrasList.forEach((extras,idx)=>{
      const propsy = {name:extras.name,properties:{}}
      // console.log(extras.name)
       const t = this.getSerialize(extras.properties,'properties',propsy)
      console.log(t)
      
    })
   
    // console.log(serialize)
    //  console.log('arr',arr)
//   console.log('parent',parentLabel)
//   const serialize = {}
//   arr.forEach((t,idx)=>{
//       console.log({[t.label]:t.value})

//       if(t.type=='object'){
//         console.log(t.label,'--- object:')
//          const s = this.getSerialize(t.value,t.label, propsy[t.label])
//         //  console.log(s,'s callback')
//          propsy[t.label] = {...s}
//          console.log(propsy)
//       }else{
//         serialize[t.label] = t.value
//       }
      
//     })
//       // console.log(serialize)
//       // debugger
//         // propsy[parentLabel]={...propsy[parentLabel],...serialize}
//         console.log(serialize)
//         return serialize
// //  DROGA

  }

}
}
</script>

<style>

</style>

