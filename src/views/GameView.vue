<template>
  <canvas
    ref="game"
    v-on:click="pause"
    v-on:keydown="() => {}"
  ></canvas>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Box } from '@/game/box';
import { Game } from '../game/index';

@Options({
  components: {
  },
})
export default class HomeView extends Vue {
  public game!: Game;

  public initGame() {
    const mesh = new Box();
    // this.scene.add(this.mesh);

    const canvas = this.$refs.game as HTMLCanvasElement;
    this.game = new Game(canvas);
    this.game.add(mesh)
    
  }

  public mounted(): void {
    this.initGame();
    this.game.toogleState(true);
  }

  public pause() {
    this.game.toogleState()
  }

  public beforeUnmount(): void {
    this.game.destroy()
  }
}
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
