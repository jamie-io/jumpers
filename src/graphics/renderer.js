// src/graphics/renderer.js
import * as THREE from 'three';

export default class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setSize(canvas.width, canvas.height);

        // Load and set an image texture as the background
        const loader = new THREE.TextureLoader();
        loader.load('path/to/your/texture.jpg', (texture) => {
            this.renderer.setClearColor(0x0000ff); // Set background to black
            this.renderer.setClearColor(new THREE.Color(0x0000ff));  // Ensure it is set
            this.renderer.setClearAlpha(1); // Make sure the alpha is set to 1 to fully opaque
        });
    }

    render(scene, camera) {
        this.renderer.render(scene, camera);
    }
}