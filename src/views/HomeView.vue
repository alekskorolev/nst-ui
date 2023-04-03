<template>
  <div class="home">
    <h2>Игровые профили</h2>
    <ProfilePanel></ProfilePanel>
    <ProfileList v-bind:profiles="$store.state.profile.profiles"></ProfileList>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ProfilePanel from '@/components/ProfilePanel.vue';
import ProfileList from '@/components/ProfileList.vue';
import { ComponentOptions } from 'vue';
import { useStore } from 'vuex';

@Options({
  components: {
    ProfilePanel,
    ProfileList,
  },
})
export default class HomeView extends Vue {
  constructor(props: ComponentOptions) {
    const store = useStore();
    store.dispatch('profile/getProfiles').then(() => console.log(store));
    super(props);
  }
}
</script>

<style lang="scss">
  .home {

  }
</style>
