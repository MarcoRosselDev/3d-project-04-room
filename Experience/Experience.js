import * as THREE from "three";
import Sizes from "./Utils/Sizes";

export default class Experience {
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.sizes = new Sizes();
  }
}
