package handlers

import (
    "encoding/json"
    "net/http"
    "github.com/gorilla/mux"
    "your-project/backend/models"
)

// GetLeaderboard returns the leaderboard data as JSON
func GetLeaderboard(w http.ResponseWriter, r *http.Request) {
    // Example: Query the database or mock data
    players := []models.Player{
        {ID: 1, Name: "Player 1", Score: 1200},
        {ID: 2, Name: "Player 2", Score: 1000},
        {ID: 3, Name: "Player 3", Score: 800},
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(players)
}

func RegisterRoutes(r *mux.Router) {
    r.HandleFunc("/api/leaderboard", GetLeaderboard).Methods("GET")
}