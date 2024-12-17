// src/graphics/index.js
import * as THREE from 'three';
import Game from './game';

export default class Graphics {
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setSize(canvas.width, canvas.height);
        this.scene.background = new THREE.Color(0x87CEEB); // Light Blue
        this.game = new Game(this.scene); // Initialize the game objects
        this.camera.position.z = 5;
    }

    start() {
        this.gameLoop();
    }

    gameLoop() {
        // Update the game objects (rotate, move, etc.)
        this.game.update();

        // Render the scene
        this.renderer.render(this.scene, this.camera);

        // Request the next frame
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}