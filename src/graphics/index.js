// src/graphics/index.js
import * as THREE from 'three';
import Game from './game';

const GameField_Size = {
        width: 30,
        height: 30,
}

export default class Graphics {
    constructor(canvas) {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setSize(canvas.width, canvas.height);

        // Load the background texture
        const loader = new THREE.TextureLoader();
        loader.load('src/assets/textures/horror_wall_09-512x512.png', (texture) => {
            // Create a plane to apply the background texture
            const planeGeometry = new THREE.PlaneGeometry(GameField_Size.width, GameField_Size.height);  // Size of the background plane
            const planeMaterial = new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide
            });

            // Create the plane and set its position behind the camera
            const backgroundPlane = new THREE.Mesh(planeGeometry, planeMaterial);
            backgroundPlane.position.z = -5; // Ensure it stays behind other objects
            this.scene.add(backgroundPlane);
        });

        this.scene.background = new THREE.Color(0x87CEEB); // Light Blue (optional, as the texture will be the background)
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