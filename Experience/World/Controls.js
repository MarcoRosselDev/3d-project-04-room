import Experience from "../Experience";
import * as THREE from "three";
import GSAP from "gsap";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;

    // this.progress = 0;
    // this.dummyCurve = new THREE.Vector3(0, 0, 0);

    /* second renderer

    this.position = new THREE.Vector3(0, 0, 0);
    this.lookAtPosition = new THREE.Vector3(0, 0, 0);
    
    this.directionalVector = new THREE.Vector3(0, 0, 0);
    this.staticVector = new THREE.Vector3(0, 1, 0);
    this.crossVector = new THREE.Vector3(0, 0, 0);
    
    this.setPath();
    this.onWheel();
    */
  }

  /* second renderer
  setPath() {
    this.curve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-5, 0, 0),
        new THREE.Vector3(0, 0, -5),
        new THREE.Vector3(5, 0, 0),
        new THREE.Vector3(0, 0, 5),
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
  */

  /* second render 
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
  */

  resize() {}

  update() {
    /* second renderer
    this.curve.getPointAt(this.lerp.current % 1, this.position);
    this.camera.orthographicCamera.position.copy(this.position);
    
    this.directionalVector.subVectors(
      this.curve.getPointAt((this.lerp.current % 1) + 0.000001),
      this.position
    );
    this.directionalVector.normalize();
    this.crossVector.crossVectors(this.directionalVector, this.staticVector);
    this.crossVector.multiplyScalar(100000);
    this.camera.orthographicCamera.lookAt(0, 0, 0);
    */
    /* first renderer
// if (this.back) {
  //   this.lerp.target -= 0.001;
  // } else {
    //   this.lerp.target += 0.001;
    // }

    // this.lerp.target = GSAP.utils.clamp(0, 1, this.lerp.target);
    // this.lerp.current = GSAP.utils.clamp(0, 1, this.lerp.current);
    // this.curve.getPointAt(this.lerp.current, this.position);
    
    // this.curve.getPointAt(this.lerp.current + 0.00001, this.lookAtPosition);

    // this.camera.orthographicCamera.position.copy(this.position);
    // this.camera.orthographicCamera.lookAt(this.lookAtPosition);
    */
  }
}
