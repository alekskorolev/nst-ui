<template>
    <div class="auth">
      Авторзация
      <form>
        <fieldset>
          <label for="login">
            Имя пользователя
            <input name="login" v-model="username" @keyup="change">
          </label>
        </fieldset>
        <fieldset>
          <label for="password">
            Пароль
            <input type="password" name="password" v-model="password" @keyup="change">
          </label>
        </fieldset>
        <fieldset>
          <button type="submit" @click.prevent="onSubmit">Войти</button>
        </fieldset>
      </form>
    </div>
  </template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

  @Options({
    props: {
      credentials: Object,
    },
  })
export default class Auth extends Vue {
  msg!: string

  username?: string

  password?: string

  public change() {
    console.log(this.password, this.username);
    this.$emit('input', { password: this.password, username: this.username });
  }

  public async onSubmit() {
    console.log(this.password, this.username);
    this.$emit('submit');
  }
}
</script>

  <style scoped lang="scss">
  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  </style>
