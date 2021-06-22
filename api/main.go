package main

import (
	// "database/sql"
	"github.com/gin-gonic/gin"
	// "log"
	"task-management/app/models"

	_ "github.com/lib/pq"
)

func main() {

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello Gin!!")
	})
	r.POST("/tasks", models.CreateTask())
	r.Run()
}
