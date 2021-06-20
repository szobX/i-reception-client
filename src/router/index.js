import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index';
import Home from "../views/Home.vue";
import AdminDashboard from "../views/admin/Dashboard.vue";
import AdminDashboardHotelList from '../views/admin/hotel/List.vue';
import AdminDashboardHotelAdd from '../views/admin/hotel/Add.vue';
import AdminDashboardHotelEdit from '../views/admin/hotel/Edit.vue';
import AdminDashboardHotelItem from '../views/admin/hotel/Hotel.vue';

import AdminDashboardRoomList from '../views/admin/room/List.vue';
import AdminDashboardRoomAdd from '../views/admin/room/Add.vue';
import AdminDashboardRoomEdit from '../views/admin/room/Edit.vue';
import AdminDashboardRoomItem from '../views/admin/room/Room.vue';
import AdminUserList from '../views/admin/UserList.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import Hotel from '../views/Hotel.vue';
import Room from '../views/Room.vue';
import Reservation from '../views/Reservation.vue';
import ReservationList from '../views/admin/ReservationList.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path:"/reservation",
    name:"Reservation",
    component:Reservation
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
    path:'/admin/dashboard/users',
    name:'AdminUserList',
    component:AdminUserList
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
  },
  {
    path: "/admin/dashboard/room",
    name:"AdminDashboardRoomList",
    component:AdminDashboardRoomList
  },
  {
    path: "/admin/dashboard/room/add",
    name:"AdminDashboardRoomAdd",
    component:AdminDashboardRoomAdd
  },
  {
    path: "/admin/dashboard/room/:id",
    name:"AdminDashboardRoomItem",
    component:AdminDashboardRoomItem
  },
  {
    path: "/admin/dashboard/room/:id/edit",
    name:"AdminDashboardRoomEdit",
    component:AdminDashboardRoomEdit
  },
  {
    path:"/admin/dashboard/reservations",
    name:"AdminDashboardReservation",
    component:ReservationList
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
