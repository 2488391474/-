export interface loginForm {
  username: string;
  password: string;
}

export interface loginResponseData {
  code: number;
  data: dataType;
}
interface dataType {
  code: number;
  data: {
    token?: string;
    message?: string;
  };
}

interface user{
    checkUser:userInfo
}

export interface userResponseData {
  code: number;
  //userinfo和message
  data: user
}
export interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
