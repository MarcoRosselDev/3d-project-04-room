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
      95, // aqui se modifica el zoom
      this.sizes.aspect,
      0.1,
      1000
    );
    this.scene.add(this.perspectiveCamera);

    // aqui se modifica la posicion inicial de la camara
    this.perspectiveCamera.position.z = 6.3;
    this.perspectiveCamera.position.x = 0.3;
    this.perspectiveCamera.position.y = 3.06;
  }
  createOrthographicCamera() {
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2, // aqui se modifica el zoom
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frutrum / 2,
      -this.sizes.frutrum / 2,
      -10,
      10
    );
    this.orthographicCamera.position.y = 3.5;
    this.orthographicCamera.position.z = 5;
    this.orthographicCamera.rotation.x = -Math.PI / 6;

    this.scene.add(this.orthographicCamera);

    this.helper = new THREE.CameraHelper(this.orthographicCamera);
    this.scene.add(this.helper);

    const size = 20;
    const division = 20;

    const gridHelper = new THREE.GridHelper(size, division);
    this.scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(10);
    this.scene.add(axesHelper);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enableZoom = false; // aqui se modifica si el zoom se aplica o no
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
    // console.log(this.perspectiveCamera.position);
    this.controls.update();

    this.helper.matrixWorldNeedsUpdate = true;
    this.helper.update();

    this.helper.position.copy(this.orthographicCamera.position);
    this.helper.rotation.copy(this.orthographicCamera.rotation);
  }
}
