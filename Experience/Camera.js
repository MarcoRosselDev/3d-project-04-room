import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    this.createPerspectiveCamera();
    this.createOrthographicCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      1000
    );
    this.scene.add(this.perspectiveCamera);

    this.perspectiveCamera.position.z = 6.3;
    this.perspectiveCamera.position.x = 0.3;
    this.perspectiveCamera.position.y = 3.06;
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
    this.perspectiveCamera.position.z = 5;
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
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

  update() {
    this.controls.update();
    // console.log(this.perspectiveCamera.position);
  }
}

/*

if (child.name === "Aquarium") {
        child.children[0].material = new THREE.MeshPhysicalMaterial();
        child.children[0].material.roughness = 0;
        child.children[0].material.color.set(0x549dd2);
        child.children[0].material.ior = 3;
        child.children[0].material.transmission = 1;
        child.children[0].material.opacity = 1;
      }

      if (child.name === "Computer") {
        child.children[1].material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
        });
      }
*/
