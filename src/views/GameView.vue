<template>
  <canvas ref="game" v-on:click="pause"></canvas>
</template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import {
    PerspectiveCamera,
    Scene,
    Mesh,
    TextureLoader,
    BoxGeometry,
    MeshBasicMaterial,
    WebGLRenderer
  } from 'three';
  
  @Options({
    components: {
    },
  })
  export default class HomeView extends Vue {
    public camera: PerspectiveCamera;
    public scene: Scene;
    public mesh: Mesh;
    public renderer: WebGLRenderer;
    public active: boolean = true;

    public initGame() {
        this.camera = new PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
        this.camera.position.z = 400;

        this.scene = new Scene();

        const texture = new TextureLoader().load( 'img/crate.gif' );
        const geometry = new BoxGeometry( 200, 200, 200 );
        const material = new MeshBasicMaterial( { map: texture } );

        this.mesh = new Mesh( geometry, material );
        this.scene.add( this.mesh );

        this.renderer = new WebGLRenderer( { canvas: <HTMLCanvasElement>this.$refs.game, antialias: true } );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        window.addEventListener( 'resize', this.onWindowResize );

    }
    public onWindowResize() {

      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize( window.innerWidth, window.innerHeight );

    }

    public animate() {
      console.log('animate')
      if (!this.active) return;
      requestAnimationFrame( this.animate );

      this.mesh.rotation.x += 0.005;
      this.mesh.rotation.y += 0.01;

      this.renderer.render( this.scene, this.camera );

      }

    public mounted(): void {
      console.log('mounted')
      this.initGame();
      this.animate();
    }

    public pause() {
      this.active = !this.active;
      if (this.active) {
        this.animate()
      }
    }

    public beforeUnmount(): void {
      this.active = false;
    }
  }
  </script>
  
  <style lang="scss" scoped>
    canvas {
      width: 100%;
      height: 100%;
    }
  </style>