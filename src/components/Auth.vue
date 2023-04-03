<template>
    <div class="auth">
      <h3>{{ $t('Авторзация') }}</h3>
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
.auth {
  background-image: url('@/assets/form_bg.jpg');
  width: 500px;
  left: 50%;
  top: 200px;
  position: relative;
  margin-left: -250px;
}
</style>
