// src/graphics/game.js
import * as THREE from 'three';
import {createApp} from "vue";
import {PlaneGeometry} from "three";

export default class Game {
    constructor(scene) {
        this.scene = scene;
        this.createCube()
        this.createPlane()

    }

    createPlane(){
        const geo = new PlaneGeometry(20, 0.1);
        const material = new THREE.MeshBasicMaterial({color: 808080});
        const mesh = new THREE.Mesh(geo, material);
        //mesh.rotation.x = Math.PI / 2;
        this.scene.add(mesh);
    }

    createCube(){
        // Example: create a rotating cube as a placeholder for your player or game object
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
    }

    update() {
        // Example: update the cube's rotation
        this.cube.rotation.x += 0.05;
        this.cube.rotation.y += 0.01;
    }
}