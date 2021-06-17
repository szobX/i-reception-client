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
            @submit.prevent=""
          >
            <div class="input-group mb-3">
              <input
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
                type="password"
                class="form-control"
                placeholder="Password"
              >
              <div class="input-group-append">
                <div class="input-group-text">
                  <b-icon
                    icon="lock"
                    style="color: #7952b3;"
                  />
                </div>
              </div>
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
            }
        }
    }
    }
    </script>
    
    <style>
    
    </style>