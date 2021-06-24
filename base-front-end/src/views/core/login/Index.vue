<template>
  <form ref="formLogin" v-on:submit.prevent="login">
    <div>
      <input type="text" placeholder="Username" v-model="username" />
    </div>
    <div>
      <input type="password" placeholder="Password" v-model="password" />
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
  <div style="max-width: 400px">
    <h3 style="overflow-wrap: break-word">{{ token?.accessToken }}</h3>
    <br />
    <h3 style="overflow-wrap: break-word">{{ token?.refreshToken }}</h3>
  </div>
</template>
<script src="./script.ts" />
