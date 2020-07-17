import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("@/views/home/Home");
const Category = () => import("@/views/category/Category");
const Cart = () => import("@/views/cart/Cart");
const Profile = () => import("@/views/profile/Profile");
const Detail = () => import("@/views/home/Detail");

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: {
        hasTabbar: true,
        title: "我是hometitle",
      },
    },
    {
      path: "/category",
      name: "Category",
      component: Category,
      meta: {
        hasTabbar: true,
        title: "我是Catefoty",
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      meta: {
        hasTabbar: true,
        title: "我是Cart",
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        hasTabbar: true,
        title: "我是Profile",
      },
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail,
      meta: {
        hasTabbar: false,
        title: "detailpage",
      },
    },
  ],
});

export default router;
