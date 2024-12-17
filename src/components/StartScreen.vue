<template>
  <div class="start-screen">
    <h1>Welcome to the Jump and Run Game!</h1>
    <button @click="startGame">Start Game</button>
    <button @click="viewLeaderboard">Leaderboard</button>
  </div>
</template>

<script>
export default {
  methods: {
    startGame() {
      this.$router.push('/game');  // Navigate to the game page
    },
    viewLeaderboard() {
      this.$router.push('/leaderboard');  // Navigate to the leaderboard page
    },
  },
};
</script>

<style scoped>
.start-screen {
  text-align: center;
  margin-top: 20%;
}

button {
  margin: 10px;
  padding: 10px;
  font-size: 18px;
}
</style>