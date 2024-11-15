<template>
  <div>
    <el-row>
      <el-col :offset="12" :span="12" class="login-container">
        <div class="box_container">
          <h1>Vue3+Typescript后台管理界面</h1>

          <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
            <el-form-item label="账号" prop="username">
              <el-input
                v-model="loginForm.username"
                placeholder="username"
                :suffix-icon="Search"
              />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="loginForm.password"
                placeholder="password"
                :suffix-icon="Search"
              />
            </el-form-item>

            <el-button type="primary" @click="login">登录</el-button>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import type { loginForm } from "@/api/user/type";
import useUserStore from "@/store/user";
import { useRouter } from "vue-router";
import { ElNotification, FormInstance, FormRules } from "element-plus";
import { Search } from "@element-plus/icons-vue";
import getTime from "@/utils/gettime";

let $router = useRouter();
const userStore = useUserStore();

const loginFormRef = ref<FormInstance>(null);

let loginForm = reactive<loginForm>({ username: "admin", password: "111111" });

//表单校验
const rules: FormRules<loginForm> = {
  username: [
    {
      required: true,
      message: "长度必须在5-10",
      trigger: "blur",
      min: 5,
      max: 10,
    },
  ],
  password: [
    {
      required: true,
      min: 6,
      max: 10,
      message: "长度应为6-15位",
      trigger: "change",
    },
  ],
};
const login = async () => {
  const valRes = await loginFormRef.value.validate();
  console.log(valRes,'@@');
  

  try {
    await userStore.login(loginForm);
    $router.push("/");
    ElNotification({
      type: "success",
      message: "登录成功",
      title: getTime(),
    });
  } catch (err) {
    ElNotification({
      type: "error",
      message: "登录失败",
    });
  }
};
onMounted(async () => {});
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
