<template>
  <div class="tab-bar" v-if="$route.meta.hasTabbar">
    <router-link
      v-for="(item, index) in navBarData"
      :to="item.path"
      tag="div"
      class="tab-bar-item"
      active-class="active"
      :key="item.title"
    >
      <div class="item-icon">
        <!-- <img v-if="iconActive" :src="item.iconActive" alt="">
        <img v-else :src="item.icon" alt=""> -->
        <img :src="iconUrl(item)" alt />
      </div>
      <div class="item-text">
        {{ item.title }}
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      navBarData: [
        {
          title: "首页",
          icon: "home.svg",
          iconActive: "home_active.svg",
          path: "/home",
        },
        {
          title: "分类",
          icon: "category.svg",
          iconActive: "category_active.svg",
          path: "/category",
        },
        {
          title: "购物车",
          icon: "shopcart.svg",
          iconActive: "shopcart_active.svg",
          path: "/cart",
        },
        {
          title: "我的",
          icon: "profile.svg",
          iconActive: "profile_active.svg",
          path: "/profile",
        },
      ],

      iconActive: false,
    };
  },

  methods: {
    iconUrl(item) {
      if (this.$route.path === item.path) {
        return require("@/assets/img/tabbar/" + item.iconActive);
      } else {
        return require("@/assets/img/tabbar/" + item.icon);
      }
    },
  },

  computed: {},
};
</script>

<style scoped>
.tab-bar {
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0 -1px 1px rgba(150, 150, 150, 0.08);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  text-align: center;
}

.tab-bar .tab-bar-item {
  flex: 1;
}

.tab-bar-item .item-icon img,
.item-active-icon img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

.tab-bar-item.active {
  color: #ff5777;
}
</style>
