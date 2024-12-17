import { createRouter, createWebHistory } from 'vue-router';
import StartScreen from '../components/StartScreen.vue';
import Leaderboard from '../components/Leaderboard.vue';
import Game from '../components/Game.vue';
const routes = [
    {
        path: '/',
        name: 'StartScreen',
        component: StartScreen,  // Start Screen as the default page
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,  // Game page for actual gameplay
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: Leaderboard,  // Leaderboard page to display scores
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;