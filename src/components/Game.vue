<template>
  <div class="game-container">
    <canvas ref="gameCanvas" width="800" height="600"></canvas>
  </div>
</template>

<script>
// Import the Graphics class that ties everything together
import Graphics from '@/graphics/index';

export default {
  name: "Game",
  mounted() {
    const canvas = this.$refs.gameCanvas;
    const graphics = new Graphics(canvas);
    graphics.start();
  }
};
</script>

<style scoped>
.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
canvas {
  border: 1px solid black;
}
</style>