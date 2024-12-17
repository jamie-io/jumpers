package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/mattn/go-sqlite3"
)

type Player struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Score int    `json:"score"`
}

func main() {
	db, err := sql.Open("sqlite3", "./players.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// Initialize database
	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS players (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT NOT NULL,
		score INTEGER NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);
	`)
	if err != nil {
		log.Fatal(err)
	}

	router := gin.Default()

	// Routes
	router.GET("/players", func(c *gin.Context) {
		rows, err := db.Query("SELECT id, name, score FROM players ORDER BY score DESC")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		defer rows.Close()

		var players []Player
		for rows.Next() {
			var player Player
			if err := rows.Scan(&player.ID, &player.Name, &player.Score); err != nil {
				c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
				return
			}
			players = append(players, player)
		}
		c.JSON(http.StatusOK, players)
	})

	router.POST("/players", func(c *gin.Context) {
		var player Player
		if err := c.ShouldBindJSON(&player); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		_, err := db.Exec("INSERT INTO players (name, score) VALUES (?, ?)", player.Name, player.Score)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"status": "player added"})
	})

	router.PUT("/players/:id", func(c *gin.Context) {
		id := c.Param("id")
		var player Player
		if err := c.ShouldBindJSON(&player); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		_, err := db.Exec("UPDATE players SET score = ? WHERE id = ?", player.Score, id)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"status": "player updated"})
	})

	router.DELETE("/players/:id", func(c *gin.Context) {
		id := c.Param("id")
		_, err := db.Exec("DELETE FROM players WHERE id = ?", id)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"status": "player deleted"})
	})

	router.Run(":8080")
}
