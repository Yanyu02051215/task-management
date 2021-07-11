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
	r.GET("/tasks", controller.TaskController{}.CreateTask())
	// r.GET("/tasks", controller.TaskController{}.GetTasks())
	r.Run()
}
