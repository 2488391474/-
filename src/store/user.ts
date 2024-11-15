import { defineStore } from "pinia";
import { reqLogin, reqUserInfo } from "@/api/user";
import type { loginForm, userInfoResData } from "@/api/user/type";
import { setToken, getToken } from "@/utils/token";

const userStore = defineStore("User", {
  state: (): { userInfo: userInfoResData; token: string } => {
    return {
      userInfo: null,
      token: getToken(),
    };
  },
  actions: {
    async login(data: loginForm) {
      const res = await reqLogin(data);
      console.log(res, "res");

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
