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
            :value="currentProps[0]"
            type="text"
            class="form-control"
            placeholder="Enter Property name"
            @blur="setObject"
          >
        </div>
      </div>
    </div>
    <div class="col-7">
      <div class="form-group  ">
        <label for="">Value 
          <b-form-radio-group
            value="valueType"
            class="pt-2"
            :options="['text', 'boolean', 'object','number']"
            @input="changeValue"
          />

        </label>
        <div class="extras">
          <template v-if="['text','number'].includes(valueType)">
            <input
              id=""
              :type="valueType"
              class="form-control"
              placeholder="Enter value name"
            >
          </template>
          <template v-if="valueType ==='boolean'">
            <b-form-checkbox
              :checked="currentProps[1]"
              name="check-button"
              switch
            >
              Switch Checkbox <b>(Checked: {{ currentProps[1] }})</b>
            </b-form-checkbox>
          </template>
        </div>
      </div>
    </div>
    <template v-if="valueType ==='object'">
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
  currentProps:{
  type:Array,
  require:false,
  default:()=>['','']
  },
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
    computed:{
      valueType(){
        return  typeof this.currentProps[1]
      },
      extrasObject(){
        return {name:this.currentProps[0],value:this.currentProps[1]}
      }
    },
watch:{
        'valueType'(newVal){
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
    },
    methods:{
      changeValue(e){
        console.log(e)
      },
      setObject(e){
        this.$store.commit('SET_NEW_EXTRAS',{
          object:{
            [e.target.value]:this.currentProps[1]}
            ,
            id:'asdasd'})
        console.log({[e.target.value]:this.currentProps[1]})
      }
    }
}
</script>

<style>

</style>