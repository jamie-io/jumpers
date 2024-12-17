// src/graphics/game.js
import * as THREE from 'three';

export default class Game {
    constructor(scene) {
        this.scene = scene;

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