import { EventEmitter } from "events";
import Experience from "../Experience.js";

export default class Resources extends EventEmitter {
  constructor(assets) {
    super();
    this.experience = new Experience();
    this.renderer = this.experience.renderer;

    this.assets = assets;

    this.items = {};
    this.queue = this.assets.length;
    this.loaded = 0;

    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    console.log("hola");
  }

  startLoading() {
    console.log("hola");
  }
}
