import Experience from "../Experience";
import * as THREE from "three";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;

    this.progress = 0;
    this.dummyCurve = new THREE.Vector3(0, 0, 0);

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };

    this.setPath();
    this.onWheel();
  }

  setPath() {
    this.curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-10, 0, 10),
        new THREE.Vector3(-5, 5, 5),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(5, -5, 5),
        new THREE.Vector3(10, 0, 10),
      ],
      true
    );

    const points = this.curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    // Create the final object to add to the scene
    const curveObject = new THREE.Line(geometry, material);
    this.scene.add(curveObject);
  }

  onWheel() {
    window.addEventListener("wheel", (e) => {
      console.log(e);
      if (e.deltaY > 0) {
        this.lerp.target += 0.01;
      } else {
        this.lerp.target -= 0.01;
      }
    });
  }

  resize() {}

  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );
    this.curve.getPointAt(this.progress % 1, this.dummyCurve);

    this.camera.orthographicCamera.position.copy(this.dummyCurve);
  }
}
