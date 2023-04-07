import {
  Mesh,
  TextureLoader,
  BoxGeometry,
  MeshBasicMaterial,
} from 'three';

export class Box extends Mesh {
  static textureLoader: TextureLoader = new TextureLoader();
  constructor() {
    const map = Box.textureLoader.load('img/crate.gif')
    const geometry = new BoxGeometry(200, 200, 200);
    const material = new MeshBasicMaterial({ map });
    super(geometry, material)
  }

  public rotate(x = 0, y = 0, z = 0) {
    this.rotation.x += x;
    this.rotation.y += y;
    this.rotation.z += z;
  }

  public animate() {
    this.rotate(0.005, 0.01, -0.02)
  }
}