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
          <div class="col-6">
            <div class="form-group">
              <label for="roomNumber">Room number</label>
              <input
                id="roomNumber"
                v-model="room.number"
                type="text"
                class="form-control"
                placeholder="Enter Room Number"
              >
            </div>
          </div>
          <div class="col-6">
            <div class="form-group">
              <label for="roomNumber">Bulding ID</label>

              <b-form-select
                v-model="room.buildingId"
                :options="['a','b']"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="roomFlor">Floor </label>
              <input
                id="roomFlor"
                v-model="room.floor"
                type="number"
                class="form-control"
                placeholder="Enter Floor"
              >
            </div>
          </div>
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="pricePerday">Price per day  </label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  id="pricePerday"
                  v-model="room.pricePerDay"
                  type="text"
                  class="form-control"
                >
                <div class="input-group-append">
                  <span class="input-group-text">.00</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-6">
            <div class="form-group">
              <label for="tt">Image link</label>
              <input
                id="tt"
                v-model="room.image"
                type="text"
                class="form-control"
                placeholder="Enter Image link"
              >
            </div>
          </div>
        </div>
        <div class="d-flex my-3">
          <div class="mr-5">
            <div class="text-bold">
              isAvailable
            </div>
            <b-form-checkbox
              v-model="room.isAvailable"
              name="cn"
              switch
            />
          </div>
         
         
          <div class="mr-5">
            <div class="text-bold">
              is Clean
            </div>
            <b-form-checkbox
              v-model="room.isClean"
              name="check-button"
              switch
            />
          </div>

          <div class="mr-5">
            <div class="text-bold">
              Demaged
            </div>
            <b-form-checkbox
              v-model="room.isDamaged"
              name="check-button"
              switch
            />
          </div>
          <div class="mr-5">
            <div class="text-bold">
              Rent
            </div>
            <b-form-checkbox
              v-model="room.isRent"
              name="check-button"
              switch
            />
          </div>
        </div>
        <div class="row">
          <div class="col-xl-12 col-12">
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                id="description"
                v-model="room.description"
                type="text"
                class="form-control"
                placeholder="Enter Description "
              />
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
        CREATE room
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
        room:{
        id:'',
        number:'',
        floor:1,
        pricePerDay:0,
        buildingId:'',
        description:'',
        image:'',
        isAvailable:true,
        isClean:true,
        isRent:false,
        isDamaged:false,
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
       // console.log(t)
      newArr.push({
        name:extras.name,
        properties:{...t}
      })
    })

    console.log(newArr)
    console.log(JSON.stringify(newArr))
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

