import * as THREE from "three";
import Experience from "./Experience";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      1000
    );
    this.scene.add(this.perspectiveCamera);
  }
  createOrthographicCamera() {
    this.frutrum = 5;
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frutrum) / 2,
      (this.sizes.aspect * this.sizes.frutrum) / 2,
      this.sizes.frutrum / 2,
      -this.sizes.frutrum / 2,
      -100,
      100
    );
    this.scene.add(this.orthographicCamera);
  }

  resize() {
    // Updateing Perspective Camera on Resize
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    // Updateing Orthographic Camera on Resize
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frutrum) / 2;

    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frutrum) / 2;

    this.orthographicCamera.top = this.sizes.frutrum / 2;

    this.orthographicCamera.bottom = -this.sizes.frutrum / 2;
    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {}
}
