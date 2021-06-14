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
  <div>
    <h3>{{ token?.accessToken }}</h3>
    <br />
    <h3>{{ token?.refreshToken }}</h3>
  </div>
</template>
<script src="./script.ts" />
