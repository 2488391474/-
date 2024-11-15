import { defineStore } from "pinia";
import { reqLogin, reqUserInfo } from "@/api/user";
import type { loginForm, userInfoResData } from "@/api/user/type";
import { setToken, getToken } from "@/utils/token";
import { constantRoute } from "@/router/router";
import type { RouteRecordRaw } from "vue-router";

const userStore = defineStore("User", {
  state: (): {
    userInfo: userInfoResData;
    token: string;
    isCollapse: boolean;
    routes: RouteRecordRaw[];
  } => {
    return {
      userInfo: null,
      token: getToken(),
      isCollapse: false,
      routes: constantRoute,
    };
  },
  actions: {
    async login(data: loginForm) {
      const res = await reqLogin(data);

      if (res.code == 200) {
        this.token = res.data.token;
        setToken(res.data.token);
        return "ok";
      } else {
        return Promise.reject(new Error(res.message));
      }
    },
  },
  getters: {},
});

export default userStore;
