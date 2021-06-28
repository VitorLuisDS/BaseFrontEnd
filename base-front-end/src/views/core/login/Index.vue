<template>
  <div class="login-form">
    <form ref="formLogin">
      <div><h1>Login</h1></div>
      <div>
        <input type="text" placeholder="Username" v-model="username" />
      </div>
      <br />
      <div>
        <input type="password" placeholder="Password" v-model="password" />
      </div>
      <div>
        <label>Stay Connected</label>
        <input type="checkbox" v-model="stayConnected" />
      </div>
      <br />
      <div>
        <button type="submit" :disabled="loading" @click="loginAsync()">
          Login
        </button>
        <button
          type="button"
          @click="renewAccessToken()"
          v-if="token"
          :disabled="loading"
        >
          Renew AccessToken
        </button>
      </div>
    </form>
  </div>
</template>
<script src="./script.ts" />
<style lang="sass" scoped>
.login-form
  text-align: center
</style>
