import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminDashboard from "../views/admin/Dashboard.vue";
import AdminDashboardHotelList from '../views/admin/hotel/List.vue';
import AdminDashboardHotelAdd from '../views/admin/hotel/Add.vue';
import AdminDashboardHotelEdit from '../views/admin/hotel/Edit.vue';
import AdminDashboardHotelItem from '../views/admin/hotel/Hotel.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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

export default router;
