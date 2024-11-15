import type { RouteRecordRaw } from "vue-router";
//对外暴露配置路由(常量路由)
export const constantRoute: RouteRecordRaw[] = [
  {
    //登录路由
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login", //命名路由
    meta: {
      title: "login",
      icon: "GoldMedal",
    },
  },
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "layout",
      icon: "Present",
    },
  },
  {
    //登录成功以后展示数据的路由
    path: "/zi",
    component: () => import("@/views/login/index.vue"),
    name: "zi",
    meta: {
      title: "zi1",
      icon: "CollectionTag",
    },
    children: [
      {
        //登录成功以后展示数据的路由
        path: "zi2",
        component: () => import("@/views/login/index.vue"),
        name: "zi",
        meta: {
          title: "zi23",
          icon: "Flag",
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      icon: "GoldMedal",
    },
  },
  {
    //重定向
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "any",
      icon: "GoldMedal",
    },
  },
];
