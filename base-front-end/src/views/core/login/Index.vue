<template>
  <el-container>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :xl="6" :lg="6" :md="8" :sm="10" :xs="24">
          <el-card shadow="always">
            <template #header>
              <span><b>Login</b></span>
            </template>
            <el-form
              ref="formLogin"
              :rules="rules"
              :model="user"
              :label-position="'top'"
            >
              <el-row type="flex" justify="center">
                <el-col :span="18" :xs="24">
                  <el-form-item label="Username" prop="login">
                    <el-input v-model="user.login" suffix-icon="el-icon-user" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="18" :xs="24">
                  <el-form-item label="Password" prop="password">
                    <el-input
                      type="password"
                      suffix-icon="el-icon-lock"
                      v-model="user.password"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="18" :xs="24">
                  <el-form-item prop="stayConnected">
                    <el-checkbox
                      label="Stay Connected"
                      type="checkbox"
                      v-model="user.stayConnected"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-divider />
              <el-row type="flex" justify="end" class="text-right">
                <el-col>
                  <el-button
                    type="primary"
                    :loading="loading"
                    @click="loginAsync()"
                    >Login <i class="el-icon-s-home"></i
                  ></el-button>
                </el-col>
              </el-row>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script src="./script.ts" />
