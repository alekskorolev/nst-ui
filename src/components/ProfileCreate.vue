<template>
  <div class="profile panel">
    <form>
      <fieldset>
        <label>
          <input>
        </label>
      </fieldset>
    </form>
    <MenuButton v-on:click="onStartGame" v-bind:title="$t('Начать игру')"></MenuButton>
    <MenuButton v-on:click="onBack" v-bind:title="$t('Назад')"></MenuButton>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MenuButton from './Button.vue';

@Options({
  components: {
    MenuButton,
  },
  props: {
    profiles: Array,
  },
})
export default class ProfileCreate extends Vue {
  public profiles!: Array<any>

  public onStartGame($event: MouseEvent) {
    console.log('start', $event);
  }

  public onBack() {
    this.$router.back();
  }
}
</script>

<style lang="scss" scoped>
  @import './menuBlock.scss';
</style>
