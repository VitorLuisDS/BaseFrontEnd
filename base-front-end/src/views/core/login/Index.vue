<template>
  <el-container>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :xl="6" :lg="6" :md="8" :sm="10" :xs="24">
          <el-card shadow="always" :body-style="{ padding: '20px' }">
            <template #header>
              <span><b>Login</b></span>
            </template>
            <form ref="formLogin">
              <el-row type="flex" justify="center">
                <el-col :span="18" :xs="24">
                  <el-input
                    placeholder="Username"
                    v-model="username"
                    suffix-icon="el-icon-user"
                  />
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="18" :xs="24">
                  <el-input
                    type="password"
                    placeholder="Password"
                    suffix-icon="el-icon-lock"
                    v-model="password"
                  />
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="18" :xs="24">
                  <el-checkbox
                    label="Stay Connected"
                    type="checkbox"
                    v-model="stayConnected"
                  />
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col :span="18" :xs="24">
                  <el-button
                    type="primary"
                    :loading="loading"
                    @click="loginAsync()"
                    >Login</el-button
                  >
                </el-col>
              </el-row>
            </form>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script src="./script.ts" />
<style lang="sass" scoped>
.login-form
  text-align: center
</style>
