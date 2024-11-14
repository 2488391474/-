//@ts-ignore
import request from "@/utils/request";
import type { loginForm, userInfo, userResponseData } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}

const reqLogin = (data: any) =>
  request.post<any, userInfo>(API.LOGIN_URL, data);
const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL);

export { reqLogin, reqUserInfo };
