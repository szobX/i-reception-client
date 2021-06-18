<template>
  <div
    v-if="extrasProperty"
    class="row  align-items-end my-5 bg-gray-light"
    :class="[{'mt-1':isChildren},{'mt-5':!isChildren},{'children':isChildren}]"
  >
    <!-- {{extrasPro}} -->
    <div class="col-5">
      <div class="form-group  ">
        <label for="">Property name</label>
        <div class="d-flex">
          <input
            :value="extrasProperty.label"
            type="text"
            class="form-control"
            placeholder="Enter Property name"
            @input="setPropertyName"
          >
        </div>
      </div>
    </div>
    <div class="col-7">
      <div class="form-group  ">
        <label for="">Value 
          <b-form-radio-group
            :checked="extrasProperty.type"
            class="pt-2"
            :options="['text', 'boolean', 'object','number']"
            @input="changeValueType"
          />

        </label>
        <div class="extras">
          <template v-if="['text','number'].includes(extrasProperty.type)">
            <input
              :id="extrasProperty.id"
              :value="extrasProperty.value"
              :type="extrasProperty.type"
              class="form-control"
              placeholder="Enter value name"
              @input="setValue"
            >
          </template>
          <template v-else-if="extrasProperty.type ==='boolean'">
            <b-form-checkbox
              :checked="extrasProperty.value"
              name="check-button"
              switch
              @input="setBooleanValue"
            >
              Switch Checkbox <b>(Checked: {{ extrasProperty.value }})</b>
            </b-form-checkbox>
          </template>
        </div>
      </div>
    </div>
    <template v-if="extrasProperty.type ==='object'">
      <hotel-extras-property
        v-for="(extra,idx) in extrasProperty.value"
        :key="extra.label+idx"
        is-children
        :children-extras="idx+1"
        :parent="extrasProperty"
        :extras-property="extra"
      />
    </template>
    <template v-if="isChildren && parent.value.length === childrenExtras">
      <button
        class="btn w-25 text-white btn-warning"
        @click.prevent="addNewProperty"
      >
        ADD PROPERTY TO PARENT
      </button>
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
    parent:{
        type:Object,
        required:false,
        default:()=>null
    },
    extrasProperty:{
        type:Object,
        required:true
    }
},
    // computed:{
    //   valueType(){
    //     return  typeof this.currentProps[1]
    //   },
    //   extrasObject(){
    //     return {name:this.currentProps[0],value:this.currentProps[1]}
    //   }
    // },
watch:{
     
    },
    methods:{
      setBooleanValue(e){
        this.extrasProperty.value = e
      },
      addNewProperty(){
          this.parent.value.push({
              label:'',
              type:'text',
              value:''
            })
      },
      changeValueType(newVal){
           // 'valueType'(newVal){
        // console.log(newVal)
        this.extrasProperty.type = newVal
        if(newVal==='boolean'){
            this.extrasProperty.value = true
        }
        if(newVal ==='text'){
            this.extrasProperty.value = ''
        }
        if(newVal ==='object'){
            this.extrasProperty.value = [{
              label:'',
              type:'text',
              value:''
            }]
        }
        
      },
      setValue(e){
    
        this.extrasProperty.value = this.extrasProperty.type ==='number' ? parseFloat(e.target.value) : e.target.value
        
      },
      setPropertyName(e){
          console.log(e)
    this.extrasProperty.label =  e.target.value
    
  }
      // changeValue(e){
      //   console.log(e)
      // },
 
    }
}
</script>

<style>
.children{
  padding-left:20px;
  border-left:10px solid rgb(192, 0, 118);
}
</style>