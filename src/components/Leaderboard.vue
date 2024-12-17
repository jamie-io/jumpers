<template>
  <div class="leaderboard">
    <h1>Leaderboard</h1>
    <ul>
      <li v-for="player in leaderboard" :key="player.id">
        {{ player.name }} - {{ player.score }}
      </li>
    </ul>
    <button @click="backToStart">Back to Start</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leaderboard: [],  // This will hold the list of players and their scores
    };
  },
  created() {
    // Fetch the leaderboard data from the backend (API call)
    fetch('http://localhost:8080/api/leaderboard')
        .then(response => response.json())
        .then(data => {
          this.leaderboard = data;
        })
        .catch(error => {
          console.error('Error fetching leaderboard:', error);
        });
  },
  methods: {
    backToStart() {
      this.$router.push('/');  // Navigate back to the start screen
    },
  },
};
</script>

<style scoped>
.leaderboard {
  text-align: center;
  margin-top: 20%;
}

button {
  margin-top: 20px;
  padding: 10px;
  font-size: 18px;
}
</style>