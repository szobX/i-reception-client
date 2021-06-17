import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index';
import Home from "../views/Home.vue";
import AdminDashboard from "../views/admin/Dashboard.vue";
import AdminDashboardHotelList from '../views/admin/hotel/List.vue';
import AdminDashboardHotelAdd from '../views/admin/hotel/Add.vue';
import AdminDashboardHotelEdit from '../views/admin/hotel/Edit.vue';
import AdminDashboardHotelItem from '../views/admin/hotel/Hotel.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Hotel from '../views/Hotel.vue';
import Room from '../views/Room.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/hotel/:id",
    name: "Hotel",
    component: Hotel,
  },
  {
    path: "/room/:id",
    name: "Room",
    component: Room,
  },
  {
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
  {
    path: "/admin/dashboard/hotel",
    name:"AdminDashboardHotelList",
    component:AdminDashboardHotelList
  },
  {
    path: "/admin/dashboard/hotel/add",
    name:"AdminDashboardHotelAdd",
    component:AdminDashboardHotelAdd
  },
  {
    path: "/admin/dashboard/hotel/:id",
    name:"AdminDashboardHoteItem",
    component:AdminDashboardHotelItem
  },
  {
    path: "/admin/dashboard/hotel/:id/edit",
    name:"AdminDashboardHotelItemEdit",
    component:AdminDashboardHotelEdit
  }
 
];

const router = new VueRouter({
  routes,
});


router.beforeEach((to, from, next) => {
  console.log(to)
  if(['Login','Register'].includes(to.name)  && store.state.user !==null){
    next({
      path:from.fullPath
    })
  }

  
      store.dispatch('checkAuth')
      next()
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //     // this route requires auth, check if logged in
  //     // if not, redirect to login page.
  //     store.dispatch('user/getUser').then(user => {
  //         next()
  //     }).catch(error => {
  //         next({
  //             path: '/login',
  //             query: {redirect: to.fullPath}
  //         })
  //     })
  // } else {
  //     if (to.name === "login" && store.getters['user/getUser']) {
  //         next({
  //             path: '/',
  //             query: {redirect: to.fullPath}
  //         }) // make sure to always call next()!
  //     } else {
  //         next();
  //     }
  // }
});



export default router;
