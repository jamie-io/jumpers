// src/graphics/renderer.js
import * as THREE from 'three';

export default class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setSize(canvas.width, canvas.height);
    }

    render(scene, camera) {
        this.renderer.render(scene, camera);
    }
}