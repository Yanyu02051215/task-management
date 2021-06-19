package main

import (
	"database/sql"
	"github.com/gin-gonic/gin"
	"log"

	_ "github.com/lib/pq"
)

func main() {
	Db, err := sql.Open("postgres", "user=ishikawayuuya  dbname=task_management sslmode=disable")
	if err != nil {
		log.Panicln(err)
	}
	defer Db.Close()

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello Gin!!")
	})
	r.Run()
}
