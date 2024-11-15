//@ts-ignore
import request from "@/utils/request";
import type { loginForm, loginResData,userInfoResData } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

const reqLogin = (data: loginForm) =>
  request.post<any, loginResData>(API.LOGIN_URL, data);
const reqUserInfo = () => request.get<any, userInfoResData>(API.USERINFO_URL);

export { reqLogin, reqUserInfo };
