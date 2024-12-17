// src/graphics/game.js
import * as THREE from 'three';
import {createApp} from "vue";
import {PlaneGeometry} from "three";

const groundLevel = {
    width: 20,
    height: 0.1,
}

export default class Game {
    constructor(scene) {
        this.scene = scene;
        this.createPlane()
    }

    createPlane() {
        const plane = new PlaneGeometry(groundLevel.width,groundLevel.height );
        const material = new THREE.MeshStandardMaterial({color: 0xffffff});
        const mesh = new THREE.Mesh(plane, material);
        mesh.position.y = -3
        this.scene.add(mesh);
    }

    update() {
    }
}