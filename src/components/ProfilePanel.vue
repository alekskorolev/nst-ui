<template>
  <div class="panel">
    <div class="button">Создать</div>
    <div class="button">Создать</div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class ProfilePanel extends Vue {}
</script>

<style scoped lang="scss">
  .panel {
    background-color: bisque;
    padding: 15px;
    border-bottom: 1px solid;
    border-color: black;
    text-align: left;
    .button {
      padding: 5px;
      border: 1px solid;
      border-color: black;
      display: inline-flex;
      margin-left: 10px;
      &:first-child {
        margin-left: 0px;
      }
    }
  }
</style>
