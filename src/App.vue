<template>
  <div id="app">
    <template v-if="isAdmin > -1">
      <navbar />
      <Aside />
      <div class="wrapper">
        <router-view />
        <footer class="main-footer">
          admin dashboard reception app 
        </footer>
      </div>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>
<script>
import Aside from './components/layout/aside.vue'
import navbar from './components/layout/navbar.vue'
export default{
  name:'App',
  components: { navbar,Aside },
  data(
    ){
    return{
      currentRoute:'null'
    }
  },
  computed:{
    isAdmin(){
      return this.$route.path.indexOf('admin')
    }
  }
}
</script>

