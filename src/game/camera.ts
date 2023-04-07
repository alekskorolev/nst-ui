import {
  PerspectiveCamera
} from 'three';

export class Camera extends PerspectiveCamera {
  constructor() {
    super(70, window.innerWidth / window.innerHeight, 1, 1000)
    this.position.z = 400;
  }

  public onResize() {
    this.aspect = window.innerWidth / window.innerHeight;
    this.updateProjectionMatrix;
  }
}