<template>
  <div
    class="w-100  d-flex justify-content-center align-items-center"
    style="min-height:100vh"
  >  
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <a
            href="../../index2.html"
            class="h1"
          >
            I-<b>RECEPTION</b></a>
        </div>
        <div class="card-body">
          <p class="login-box-msg">
            Sign up to reservation room
          </p>
  
          <form
            method="post"
            @submit.prevent="register"
          >
            <div class="input-group mb-3">
              <input
                v-model="form.email"
                type="email"
                class="form-control"
                placeholder="Email"
              >
              <div class="input-group-append">
                <div class="input-group-text">
                  <b-icon
                    icon="envelope"
                    style="color: #7952b3;"
                  />
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                v-model="form.password"
                type="password"
                class="form-control"
                placeholder="Password"
              >
            </div>

            <div class="input-group mb-3">
              <input
                v-model="form.firstName"
                type="text"
                class="form-control"
                placeholder="First Name"
              >
            </div>

            <div class="input-group mb-3">
              <input
                v-model="form.lastName"
                type="text"
                class="form-control"
                placeholder="LastName"
              >
            </div>


            <div class="input-group mb-3">
              <input
                v-model="form.phone"
                type="text"
                class="form-control"
                placeholder="Phone"
              >
            </div>


            <div class="input-group mb-3">
              <input
                v-model="form.streetName"
                type="text"
                class="form-control"
                placeholder="Street"
              >
            </div>


            <div class="input-group mb-3">
              <input
                v-model="form.flatNumber"
                type="text"
                class="form-control"
                placeholder="Flat number"
              >
            </div>
            <div class="input-group mb-3">
              <input
                v-model="form.city"
                type="text"
                class="form-control"
                placeholder="City "
              >
            </div>
            <div class="input-group mb-3">
              <input
                v-model="form.zipCode"
                type="text"
                class="form-control"
                placeholder="Zip Code"
              >
            </div>
            
            <button
              type="submit"
              class="btn btn-primary btn-block"
            >
              Register
            </button>
          </form>
  
          <div class="social-auth-links text-center mt-2 mb-3" />
          <!-- /.social-auth-links -->
  
          
          <p class="mb-0">
            <router-link
              :to="{name:'Login'}"
              class="text-center"
            >
              has account? sign in
            </router-link>
          </p>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </div>
</template>
    
    <script>
    export default {
    name:'Register',
    data(){
        return{
            form:{
                email:'',
                password:'',
                phone:'',
                streetName:'',
                HouseNumber:'',
                flatNumber:'',
                city:'',
                zipCode:''
            }
        }
    },
    methods:{
      register(){
        this.axios.post('user/register',this.form).then(res=>{
          this.$router.push({name:'Home'})
        })
      }
    }
    }
    </script>
    
    <style>
    
    </style>