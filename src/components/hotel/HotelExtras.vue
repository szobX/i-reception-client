<template>
  <div
    class="form-group  flex"
  >
    <label :for="extras.id">Extras name</label>
    <div class="d-flex">
      <input
        :id="extras.id"
        v-model="extras.name"
        type="text"
        class="form-control"
        placeholder="Enter Extras name"
      >
    </div>
    <!-- children -->
    <template v-if="true">
      <HotelExtrasProperty
        v-for="(extra,idx) in extras.properties"
        :key="`extras`+idx"
        :extras-property="extra"
        @addNew="addNewProperty"
      />
      <button
        class="btn w-25 btn-success"
        @click.prevent="addNewProperty"
      >
        {{ true ? 'ADD NEW PROPERTY TO PARENT' :'ADD NEW PROPERTY' }}
      </button>
    </template>
  </div>
</template>

<script>
import HotelExtrasProperty from './HotelExtrasProperty.vue'
import { mapFields,mapMultiRowFields } from 'vuex-map-fields';

export default {
    name:'HotelExtras',
    components:{HotelExtrasProperty},
    props:{
      extras:{
        type:Object,
        required:true,
      },
      extrasArray:{
        type:Array,
        required:false,
        default:()=>[]
      },
      arrayId:{
        type:Number,
        required:true,

      }
    },
    data(){
        return{
            s:this.arrayId
           
        }
    },
    computed:{
      propsy(){
return this.extras.properties
      },
      // ...mapFields({extrasName:'extrasList[0].name'}),
      // ...mapMultiRowFields([`extrasList[${this.s}].properties`])
    },
    watch:{
        // 'extras.valueType'(newVal){
        // console.log(newVal)
        // if(newVal==='boolean'){
        //     this.extras.value = true
        // }
        // if(newVal ==='text'){
        //     this.extras.value = ''
        // }
        // if(newVal ==='object'){
        //     this.extras.value = {
        //         name:'',
        //         valueType:'text',
        //         value:''
        //     }
        // }
        // }
    },
    beforeMount(){

    },
    methods:{
      addNewProperty(target,e){
         this.extras.properties.push( {
            label:'',
            type:'text',
            value:''
          })
      },
    }
}
</script>

<style>
.extras{
    min-height:38px;
    display: flex;
    align-items: center;
}
</style>