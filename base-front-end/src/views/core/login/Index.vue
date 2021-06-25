<template>
  <form ref="formLogin">
    <div>
      <input type="text" placeholder="Username" v-model="username" />
    </div>
    <div>
      <input type="password" placeholder="Password" v-model="password" />
    </div>
    <div>
      <button type="submit" :disabled="loading" @click="login()">Login</button>
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
  <div style="max-width: 400px">
    <h3 style="overflow-wrap: break-word">{{ token }}</h3>
  </div>
</template>
<script src="./script.ts" />
