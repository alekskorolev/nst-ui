<template>
  <ul>
    <li v-for="profile, index in profiles" v-bind:key="profile.id">{{ profile.username }}</li>
  </ul>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    profiles: Array,
  },
})
export default class ProfileList extends Vue {
  public profiles!: Array<any>
}
</script>
