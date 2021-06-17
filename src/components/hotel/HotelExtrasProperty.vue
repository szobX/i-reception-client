<template>
  <div
    class="row  align-items-end"
    :class="[{'mt-1':isChildren},{'mt-5':!isChildren},{'pl-4':isChildren}]"
  >
    <div class="col-5">
      <div class="form-group  ">
        <label for="">Property name</label>
        <div class="d-flex">
          <input
             
            type="text"
            class="form-control"
            placeholder="Enter Bulding name"
          >
        </div>
      </div>
    </div>
    <div class="col-7">
      <div class="form-group  ">
        <label for="">Value 
          <b-form-radio-group
            v-model="extras.valueType"
            class="pt-2"
            :options="['text', 'boolean', 'object','number']"
          />

        </label>
        <div class="extras">
          <template v-if="['text','number'].includes(extras.valueType)">
            <input
              id=""
              :type="extras.valueType"
              class="form-control"
              placeholder="Enter value name"
            >
          </template>
          <template v-if="extras.valueType ==='boolean'">
            <b-form-checkbox
              v-model="extras.value"
              name="check-button"
              switch
            >
              Switch Checkbox <b>(Checked: {{ extras.value }})</b>
            </b-form-checkbox>
          </template>
        </div>
      </div>
    </div>
    <template v-if="extras.valueType ==='object'">
      <hotel-extras-property
        key="asdv"
        is-children
        :children-extras="1"
        :extras="extras.value"
      />
    </template>
  </div>
</template>

<script>
    import HotelExtrasProperty from './HotelExtrasProperty'
export default {
name:'HotelExtrasProperty',
components:{HotelExtrasProperty},
props:{
    isChildren:{type:Boolean,default:()=>false},
    childrenExtras:{
    type:Number,
    required:false,
    default:()=>1
    },
    extras:{
        type:Object,
        required:true,
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

</style>