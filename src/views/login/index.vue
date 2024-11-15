<template>
  <div>
    <el-row>
      <el-col :offset="12" :span="12" class="login-container">
        <div class="box_container">
          <h1>Vue3+Typescript后台管理界面</h1>

          <el-form :model="loginForm">
            <el-form-item label="账号">
              <el-input v-model="loginForm.username" placeholder="username" />
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="loginForm.password" placeholder="password" />
            </el-form-item>

            <el-button type="primary" @click="login">登录</el-button>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { loginForm } from "@/api/user/type";
import useUserStore from "@/store/user";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
let $router = useRouter();
const userStore = useUserStore();

let loginForm = reactive<loginForm>({ username: "admin", password: "111111" });
const login = async () => {
  try {
    await userStore.login(loginForm);
    $router.push("/");
    ElNotification({
      type: "success",
      message: "登录成功",
      title: "早上好",
    });
  } catch (err) {
    ElNotification({
      type: "error",
      message: "登录失败",
    });
  }
};
console.log(userStore.userInfo, "index");
</script>

<style scoped lang="scss">
.login-container {
  background: #409eff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box_container {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    padding: 16px;
    text-align: center;

    h1 {
      font-size: 20px;
      padding: 16px;
    }
  }
}
</style>
