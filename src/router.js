import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import UserProfile from "./views/UserProfile.vue";
import Customers from "./views/Customers.vue";
import Projects from "./views/Projects.vue";
import Team from "./views/Team.vue";
import Taskboard from "./views/Taskboard.vue";
import TaskDetail from "./views/TaskDetail.vue";
import Location from "./views/Location.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Timeline from "./views/Timeline.vue";
import Faqs from "./views/Faqs.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/userprofile",
      name: "userprofile",
      component: UserProfile
    },
    {
      path: "/customers",
      name: "customers",
      component: Customers
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/taskboard",
      name: "taskboard",
      component: Taskboard
    },
    {
      path: "/taskdetail",
      name: "taskdetail",
      component: TaskDetail
    },
    {
      path: "/location",
      name: "location",
      component: Location
    },

    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/timeline",
      name: "timeline",
      component: Timeline
    },
    {
      path: "/faqs",
      name: "faqs",
      component: Faqs
    }
  ]
});
