<template>
  <div class="form-group  flex">
    <label for="hotelname">Extras name</label>
    <div class="d-flex">
      <input
        id="hotelname"
        type="text"
        class="form-control"
        placeholder="Enter Bulding name"
      >
      <div class=" ml-1 d-flex">
        <button class="btn btn-success">
          +
        </button>
        <button class="btn btn-danger">
          -
        </button>
      </div>
    </div>
    <!-- children -->
    <HotelExtrasProperty
      key="kaosdasd"
      :extras="extras"
    />
  </div>
</template>

<script>
    import HotelExtras from '@/components/hotel/HotelExtras.vue'
import HotelExtrasProperty from './HotelExtrasProperty.vue'

export default {
    name:'HotelExtras',
    components:{HotelExtrasProperty},
    data(){
        return{
            extras:{
                name:'',
            valueType:'text',
            value:'',
            }
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