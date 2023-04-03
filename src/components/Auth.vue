<template>
    <div class="auth">
      <h2>{{ $t('Авторзация') }}</h2>
      <form>
        <fieldset>
          <label for="login">
            <span>{{ $t('Имя пользователя') }}</span>
            <input name="login" v-model="username" @keyup="change">
          </label>
        </fieldset>
        <fieldset>
          <label for="password">
            <span>{{ $t('Пароль') }}</span>
            <input type="password" name="password" v-model="password" @keyup="change">
          </label>
        </fieldset>
        <fieldset>
          <button type="submit" @click.prevent="onSubmit">{{ $t('Войти') }}</button>
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
  padding-bottom: 10px;
  border: 2px solid #545454;
  border-radius: 3px;
  h2 {
    border-bottom: 1px solid #545454;
    padding-bottom: 10px;
  }
  fieldset {
    border: none;
    label {
      display: block;
      width: 100%;
      span {
        display: inline-block;
        width: 40%;
        text-align: right;
        padding-right: 10px;
      }
      input {
        width: 50%;
        padding: 5px;
      }
    }
    button {
      width: 150px;
      padding: 5px 15px;
    }
  }
}
</style>
