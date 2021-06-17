<template>
  <div class="form-group  flex">
    <label for="hotelname">Extras name</label>
    <div class="d-flex">
      <input
        id="hotelname"
        v-model="extras.name"
        type="text"
        class="form-control"
        placeholder="Enter Extras name"
      >
    </div>
    <!-- children -->
    
    <HotelExtrasProperty
      v-for="(value,key) in extras.properties"
      :key="key"
      :extras="extras"
      :current-props="[key,value]"
    />
    <div class="btn btn-success">
      add new 
    </div>
  </div>
</template>

<script>
import HotelExtrasProperty from './HotelExtrasProperty.vue'

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
      }
    },
    data(){
        return{
            
           
        }
    },
    watch:{
        'extras.valueType'(newVal){
        console.log(newVal)
        if(newVal==='boolean'){
            this.extras.value = true
        }
        if(newVal ==='text'){
            this.extras.value = ''
        }
        if(newVal ==='object'){
            this.extras.value = {
                name:'',
                valueType:'text',
                value:''
            }
        }
        }
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