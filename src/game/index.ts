import { Object3D, Scene } from "three";
import { Camera } from "./camera";
import { Renderer } from "./renderer";
import { Box } from "./box";

export class Game {
  private renderer: Renderer;
  private camera: Camera;
  private scene: Scene;
  private active = false;
  private objects: Array<Box> = [];
  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);
    this.camera = new Camera();
    this.scene = new Scene();
    window.addEventListener('resize', this.onWindowResize);
  }

  private onWindowResize() {
    this.camera.onResize();
    this.renderer.onResize();
  }

  private animate() {
    if (!this.active) return;
    requestAnimationFrame(() => this.animate());
    this.objects.forEach((object: Box) => object.animate())
    this.renderer.render(this.scene, this.camera);

  }

  public add(mesh: Box) {
    this.scene.add(mesh);
    this.objects.push(mesh)
  }

  public destroy() {
    window.removeEventListener('resize', this.onWindowResize);
    this.toogleState(false)
  }

  public toogleState(state?: boolean) {
    if (state === false || state === true) {
      this.active = state;
    } else {
      this.active = !this.active;
    }
    if (this.active) {
      requestAnimationFrame(() => this.animate());
    }
  }
}