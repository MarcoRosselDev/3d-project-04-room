import Experience from "../Experience";
import * as THREE from "three";

export default class Room {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.resources = this.experience.resources;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;

    this.setModel();
  }

  setModel() {
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShasow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }

      if (child.name === "AquaGlass") {
        child.material = new THREE.MeshPhysicalMaterial();
        child.material.roughness = 0;
        child.material.color.set("279fdd");
        child.material.ior = 3;
        child.material.transmission = 1;
        child.material.opacity = 1;
      }
    });

    this.scene.add(this.actualRoom);
    this.actualRoom.scale.set(0.051, 0.051, 0.051);
  }

  resize() {}

  update() {}
}
