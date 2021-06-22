package main

import (
	// "database/sql"
	"github.com/gin-gonic/gin"
	"task-management/app/controller"

	_ "github.com/lib/pq"
)

func main() {

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.String(200, "Hello Gin!!")
	})
	r.POST("/tasks", controller.TaskController{}.CreateTask())
	r.Run()
}
